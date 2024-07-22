import * as THREE from 'three';
import { entity } from './entity';
import { finite_state_machine } from '../map/finite-state-machine.js';
import { player_state } from '../map/player_control/player-state.js';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';    // Pour les animation
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

import skins from '../../../../static/datas/targetItems.js';

export const entity_enemy = (() => {

    const _M = new THREE.Matrix4();
    const _R = new THREE.Quaternion();

    class TargetFSM extends finite_state_machine.FiniteStateMachine {
        constructor(proxy) {
            super();
            this._proxy = proxy;
            this.Init_();
        }

        Init_() {
            this._AddState('idle', player_state.IdleState);
            this._AddState('walk', player_state.WalkState);
            this._AddState('death', player_state.DeathState);
            this._AddState('attack_1', player_state.AttackState_1);
            this._AddState('recieveHit', player_state.HitState);
            this._AddState('jump', player_state.JumpState);
        }
    };

    class TargetCharacterControllerProxy {
        constructor(animations) {
            this.animations_ = animations;
        }

        get animations() {
            return this.animations_;
        }
    };

    class TargetCharacterController extends entity.Component {
        constructor(params, skin, playerId) {
            super();
            this.params_ = params;
            this.skin_ = skin;
            this.mesh_ = null;
            this.playerId_ = playerId;
            this.positionHistory_ = [];
            this.historyLength_ = 5; // Nombre de positions à conserver
            this.positionThreshold_ = 0.001; // Seuil de différence pour considérer le mouvement

        }

        InitEntity() {
            this.group_ = new THREE.Group();
            this.group_.name = this.playerId_;
            this.params_.scene.add(this.group_);
            this.animations_ = {};

            this.Parent.Attributes.Render = {
                group: this.group_,
            };
            this.Parent.Attributes.ENEMY_PLAYER = true;

            this.LoadModels_();
            this.AddPseudo_();
        }

        InitComponent() {
            this.RegisterHandler_('health.death', (m) => { this.OnDeath_(m); });
            this.RegisterHandler_('health.update', (m) => { this.OnHit_(m); });
            this.RegisterHandler_('update.position', (m) => { this.OnUpdatePosition_(m); });
            this.RegisterHandler_('update.rotation', (m) => { this.OnUpdateRotation_(m); });
        }

        OnUpdatePosition_(msg) {
            msg.value.y -= 2.6;
            this.group_.position.copy(msg.value);
        }


        OnUpdateRotation_(msg) {
            this.group_.quaternion.copy(msg.value);
        }

        OnDeath_(msg) {
            this.stateMachine_.SetState('death');
        }


        OnHit_(msg) {
            this.stateMachine_.SetState('recieveHit');
        }

        LoadModels_() {
            const enemyGltf = skins[this.skin_];
            const gltfLoader = new GLTFLoader();

            gltfLoader.load(enemyGltf.gltf, (gltf) => {
                // Mesh
                this.mesh_ = gltf.scene
                this.group_.add(this.mesh_);
                this.mesh_.scale.setScalar(enemyGltf.scale);
                // Pos/Rot
                this.mesh_.rotateY(Math.PI);
                // Shadows
                this.mesh_.traverse(c => {
                    c.castShadow = true;
                    c.receiveShadow = true;
                });
                // Load animation
                this.mixer_ = new THREE.AnimationMixer(this.mesh_);
                const _FindAnim = (animName) => {
                    for (let i = 0; i < gltf.animations.length; i++) {
                        if (gltf.animations[i].name.includes(animName)) {
                            const clip = gltf.animations[i];
                            const action = this.mixer_.clipAction(clip);
                            return {
                                clip: clip,
                                action: action
                            }
                        }
                    }
                    console.warn(`Animation not found: ${animName}`);
                    return null;
                };
                // Set animations
                this.animations_['jump'] = _FindAnim('Jump');
                this.animations_['idle'] = _FindAnim('Idle');
                this.animations_['walk'] = _FindAnim('Walk');
                this.animations_['death'] = _FindAnim('Death');
                this.animations_['attack_1'] = _FindAnim('PickUp');
                this.animations_['attack_2'] = _FindAnim('Punch');
                this.animations_['recieveHit'] = _FindAnim('RecieveHit');
                this.animations_['run'] = _FindAnim('Run');

                this.stateMachine_ = new TargetFSM(
                    new TargetCharacterControllerProxy(this.animations_));

                if (this.queuedState_) {
                    this.stateMachine_.SetState(this.queuedState_)
                    this.queuedState_ = null;
                } else {
                    this.stateMachine_.SetState('walk');
                }

            }, undefined, (error) => {
                console.log(error)
            })
        }

        AddPseudo_() {
            let fontUrl;
            if (import.meta.env.DEV) {
                fontUrl = new URL('../../../../static/fonts/ESPACION_Regular.json', import.meta.url).href
            } else {
                fontUrl = './static/fonts/ESPACION_Regular.json'
            }

            const loader = new FontLoader();
            loader.load(fontUrl, (font) => {
                const geometry = new TextGeometry(this.playerId_, {
                    font: font,
                    size: 0.8,
                    height: 0.1,
                });

                const textMesh = new THREE.Mesh(geometry, [
                    new THREE.MeshPhongMaterial({ color: 0x000000 }), // front    
                    new THREE.MeshPhongMaterial({ color: 0xFFFFFF }) // side    
                ]);

                this.group_.add(textMesh);

                textMesh.castShadow = true;
                textMesh.position.set(2, 3.5, 0);
                textMesh.rotateY(Math.PI);
            });
        }

        UpdateAnimations_() {
            this.positionHistory_.unshift({
                x: Number(this.group_.position.x.toFixed(4)),
                y: Number(this.group_.position.y.toFixed(4)),
                z: Number(this.group_.position.z.toFixed(4))
            });

            if (this.positionHistory_.length > this.historyLength_) {
                this.positionHistory_.pop();
            }
            const state = this.checkMovement_(this.group_.position)
            this.stateMachine_.SetState(state);
        }

        checkMovement_(currentPosition) {
            if (this.positionHistory_.length < 2) {
                return 'idle';
            }

            for (let i = 0; i < this.positionHistory_.length; i++) {
                const deltaX = Math.abs(currentPosition.x - this.positionHistory_[i].x).toFixed(4);
                const deltaY = (currentPosition.y - this.positionHistory_[i].y).toFixed(4);
                const deltaZ = Math.abs(currentPosition.z - this.positionHistory_[i].z).toFixed(4);

                if (deltaY > 0.1) {
                    return 'jump'; // Enemy jump animation
                }

                if (deltaX > this.positionThreshold_ || deltaZ > this.positionThreshold_) {
                    return 'walk'; // Enemy walk animation
                }
            }
            return 'idle'; // Enemy idle animation
        }

        Destroy() {
            this.params_.scene.remove(this.group_);
        }


        Update(timeInSeconds) {
            if (!this.stateMachine_) {
                return;
            }

            this.UpdateAnimations_();

            if (this.mixer_) {
                this.mixer_.update(timeInSeconds);
            }
        }
    };

    return {
        TargetFSM: TargetFSM,
        TargetCharacterController: TargetCharacterController,
    };
})();



/* List of animations : 
* Death
* Defeat
* Idle
* Jump
* PickUp
* Punch
* RecieveHit
* Roll
* Run
* Run_Carry
* Shoot_OneHanded
* SitDown
* StandUp
* SwordSlash
* Victory
* Walk
* Walk_Carry
*/