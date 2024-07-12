import * as THREE from 'three';
import { entity } from './entity';
import { finite_state_machine } from '../map/finite-state-machine.js';
import { player_state } from '../map/player_control/player-state.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';    // Pour les animation
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
        constructor(params, skin) {
            super();
            this.params_ = params;
            this.skin_ = skin;
            this.mesh_ = null;
            this.positionHistory_ = [];
            this.historyLength_ = 10; // Nombre de positions à conserver
            this.positionThreshold_ = 0.001; // Seuil de différence pour considérer le mouvement

        }

        InitEntity() {
            console.log("init entity enemy")
            this.group_ = new THREE.Group();

            this.params_.scene.add(this.group_);
            this.animations_ = {};

            this.Parent.Attributes.Render = {
                group: this.group_,
            };
            this.Parent.Attributes.ENEMYPLAYER = true;
            this.LoadModels_();
        }

        InitComponent() {
            console.log("init component enemy")
            this.RegisterHandler_('health.death', (m) => { this.OnDeath_(m); });
            this.RegisterHandler_('health.update', (m) => { this.OnHit_(m); });
            this.RegisterHandler_('update.position', (m) => { this.OnUpdatePosition_(m); });
            this.RegisterHandler_('update.rotation', (m) => { this.OnUpdateRotation_(m); });
        }

        OnUpdatePosition_(msg) {
            msg.value.y -= 2.8;

            this.positionHistory_.unshift(Number(this.group_.position.x.toFixed(4)));
            if (this.positionHistory_.length > this.historyLength_) {
                this.positionHistory_.pop();
            }

            this.checkMovement_(msg.value.x) ? this.stateMachine_.SetState('walk') : this.stateMachine_.SetState('idle')
            this.group_.position.copy(msg.value);
        }

        checkMovement_(currentX) {
            for (let i = 0; i < this.positionHistory_.length; i++) {
                if (Math.abs(currentX - this.positionHistory_[i]) > this.positionThreshold_) {
                    return true; // Il y a du mouvement
                }
            }
            return false; // Pas de mouvement
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

        async LoadModels_() {
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
                this.animations_['loading'] = _FindAnim('Jump');
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

        Update(timeInSeconds) {
            if (!this.stateMachine_) {
                return;
            }
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