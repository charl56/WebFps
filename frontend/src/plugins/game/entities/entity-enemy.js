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
    constructor(params) {
      super();
      this.params_ = params;
      this.mesh_ = null;
    }

    InitEntity() {
      this.Init_();
    }

    Init_() {
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
      console.log("init entiti enemy")
      this.RegisterHandler_('health.death', (m) => { this.OnDeath_(m); });
      this.RegisterHandler_('health.update', (m) => { this.OnHit_(m); });
      this.RegisterHandler_('update.position', (m) => { this.OnUpdatePosition_(m); });
      this.RegisterHandler_('update.rotation', (m) => { this.OnUpdateRotation_(m); });
    }

    OnUpdatePosition_(msg) {
      this.group_.position.copy(msg.value);
    }

    OnUpdateRotation_(msg) {
      this.group_.quaternion.copy(msg.value);
    }

    OnDeath_(msg) {
      // Change animation
      console.log("moooorrtt")
      this.stateMachine_.SetState('death');
    }


    OnHit_(msg) {
      this.stateMachine_.SetState('recieveHit');
    }

    async LoadModels_() {
      const skinNames = Object.keys(skins);
      const enemyGltf = skins[skinNames[Math.floor(Math.random() * skinNames.length)]];

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
      console.log("EntityEnemy => this.group_.position.y : ", this.group_.position.y)
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