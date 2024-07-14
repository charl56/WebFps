import * as THREE from 'three';


export const player_state = (() => {

  class State {
    constructor(parent) {
      this._parent = parent;
    }
  
    Enter() {}
    Exit() {}
    Update() {}
  };

  class DeathState extends State {
    constructor(parent) {
      super(parent);
  
      this._action = null;
    }
  
    get Name() {
      return 'death';
    }
  
    Enter(prevState) {
      this._action = this._parent._proxy.animations['death'].action;

      this._action.reset();  
      this._action.setLoop(THREE.LoopOnce, 1);
      this._action.clampWhenFinished = true;

      if (prevState) {
        const prevAction = this._parent._proxy.animations[prevState.Name].action;
  
        this._action.crossFadeFrom(prevAction, 1, false);   // From : acutal action to new action :death
        this._action.play();
      } else {
        this._action.play();
      }
    }
  
    Exit() {
    }
  
    Update(_) {
    }
  };
  
  class DanceState extends State {
    constructor(parent) {
      super(parent);
  
      this._action = null;
  
      this._FinishedCallback = () => {
        this._Finished();
      }
    }
  
    get Name() {
      return 'dance';
    }
  
    Enter(prevState) {
      this._action = this._parent._proxy.animations['dance'].action;
      const mixer = this._action.getMixer();
      mixer.addEventListener('finished', this._FinishedCallback);

      this._action.reset();  
      this._action.setLoop(THREE.LoopOnce, 1);
      this._action.clampWhenFinished = true;

      if (prevState) {
        const prevAction = this._parent._proxy.animations[prevState.Name].action;
  
        this._action.crossFadeFrom(prevAction, 0.2, true);
        this._action.play();
      } else {
        this._action.play();
      }
    }
  
    _Finished() {
      this._Cleanup();
      this._parent.SetState('idle');
    }
  
    _Cleanup() {
      if (this._action) {
        this._action.getMixer().removeEventListener('finished', this._FinishedCallback);
      }
    }
  
    Exit() {
      this._Cleanup();
    }
  
    Update(_) {
    }
  };

  class AttackState_1 extends State {
    constructor(parent) {
      super(parent);
  
      this._action = null;
  
      this._FinishedCallback = () => {
        this._Finished();
      }
    }
  
    get Name() {
      return 'attack_1';
    }
  
    Enter(prevState) {

      this._action = this._parent._proxy.animations['attack_1'].action;
      const mixer = this._action.getMixer();
      mixer.addEventListener('finished', this._FinishedCallback);

      if (prevState.Name != 'attack_1' && prevState.Name != 'attack_2') {
        const prevAction = this._parent._proxy.animations[prevState.Name].action;
  
        this._action.reset();  
        this._action.setLoop(THREE.LoopOnce, 1);
        this._action.clampWhenFinished = true;
        this._action.crossFadeFrom(prevAction, 0.4, true);
        this._action.play();
      } else {
        this._action.play();
      }
    }
  
    _Finished() {
      this._Cleanup();
      this._parent.SetState('idle');
    }
  
    _Cleanup() {
      if (this._action) {
        this._action.getMixer().removeEventListener('finished', this._FinishedCallback);
      }
    }
  
    Exit() {
      this._Cleanup();
    }
  
    Update(_) {
    }
  };
  
  class AttackState_2 extends State {
    constructor(parent) {
      super(parent);
  
      this._action = null;
  
      this._FinishedCallback = () => {
        this._Finished();
      }
    }
  
    get Name() {
      return 'attack_2';
    }
  
    Enter(prevState) {

      this._action = this._parent._proxy.animations['attack_2'].action;
      const mixer = this._action.getMixer();
      mixer.addEventListener('finished', this._FinishedCallback);

      if (prevState.Name != 'attack_1' && prevState.Name != 'attack_2') {
        const prevAction = this._parent._proxy.animations[prevState.Name].action;
  
        this._action.reset();  
        this._action.setLoop(THREE.LoopOnce, 1);
        this._action.clampWhenFinished = true;
        this._action.crossFadeFrom(prevAction, 0.4, true);
        this._action.play();
      } else {
        this._action.play();
      }
    }
  
    _Finished() {
      this._Cleanup();
      this._parent.SetState('idle');
    }
  
    _Cleanup() {
      if (this._action) {
        this._action.getMixer().removeEventListener('finished', this._FinishedCallback);
      }
    }
  
    Exit() {
      this._Cleanup();
    }
  
    Update(_) {
    }
  };
  
  class WalkState extends State {
    constructor(parent) {
      super(parent);
    }
  
    get Name() {
      return 'walk';
    }
  
    Enter(prevState) {
      const curAction = this._parent._proxy.animations['walk'].action;
      if (prevState) {
        const prevAction = this._parent._proxy.animations[prevState.Name].action;
  
        curAction.enabled = true;
  
        if (prevState.Name == 'run') {
          const ratio = curAction.getClip().duration / prevAction.getClip().duration;
          curAction.time = prevAction.time * ratio;
        } else {
          curAction.time = 0.0;
          curAction.setEffectiveTimeScale(1.0);
          curAction.setEffectiveWeight(1.0);
        }
  
        curAction.crossFadeFrom(prevAction, 0.1, true);
        curAction.play();
      } else {
        curAction.play();
      }
    }
  
    Exit() {
    }
  
    Update(timeElapsed, input) {
      if (!input) {
        return;
      }
  
    }
  };
  
  class RunState extends State {
    constructor(parent) {
      super(parent);
    }
  
    get Name() {
      return 'run';
    }
  
    Enter(prevState) {
      const curAction = this._parent._proxy.animations['run'].action;
      if (prevState) {
        const prevAction = this._parent._proxy.animations[prevState.Name].action;
  
        curAction.enabled = true;
  
        if (prevState.Name == 'walk') {
          const ratio = curAction.getClip().duration / prevAction.getClip().duration;
          curAction.time = prevAction.time * ratio;
        } else {
          curAction.time = 0.0;
          curAction.setEffectiveTimeScale(1.0);
          curAction.setEffectiveWeight(1.0);
        }
  
        curAction.crossFadeFrom(prevAction, 0.1, true);
        curAction.play();
      } else {
        curAction.play();
      }
    }
  
    Exit() {
    }
  
    Update(timeElapsed, input) {
      if (!input) {
        return;
      }

    }
  };
  
  class IdleState extends State {
    constructor(parent) {
      super(parent);
    }
  
    get Name() {
      return 'idle';
    }
  
    Enter(prevState) {
      const idleAction = this._parent._proxy.animations['idle'].action;
      if (prevState) {
        const prevAction = this._parent._proxy.animations[prevState.Name].action;
        idleAction.time = 0.0;
        idleAction.enabled = true;
        idleAction.setEffectiveTimeScale(1.0);
        idleAction.setEffectiveWeight(1.0);
        idleAction.crossFadeFrom(prevAction, 0.25, true);
        idleAction.play();
      } else {
        idleAction.play();
      }
    }
  
    Exit() {
    }
  
    Update(_, input) {
      if (!input) {
        return;
      }

    }
  };

  class JumpState extends State {
    constructor(parent) {
      super(parent);
    }
  
    get Name() {
      return 'jump';
    }
  
    Enter(prevState) {
      const jumpAction = this._parent._proxy.animations['jump'].action;
      if (prevState) {
        const prevAction = this._parent._proxy.animations[prevState.Name].action;
        jumpAction.time = 0.0;
        jumpAction.enabled = true;
        jumpAction.setEffectiveTimeScale(1.0);
        jumpAction.setEffectiveWeight(1.0);
        jumpAction.crossFadeFrom(prevAction, 0.25, true);
        jumpAction.play();
      } else {
        jumpAction.play();
      }
    }
  
    Exit() {
    }
  
    Update(_, input) {
      if (!input) {
        return;
      }

    }
  };

  class LoadingState extends State {
    constructor(parent) {
      super(parent);
    }
  
    get Name() {
      return 'loading';
    }
  
    Enter(prevState) {
      const idleAction = this._parent._proxy.animations['loading'].action;
      if (prevState) {
        const prevAction = this._parent._proxy.animations[prevState.Name].action;
        idleAction.time = 0.0;
        idleAction.enabled = true;
        idleAction.setEffectiveTimeScale(1.0);
        idleAction.setEffectiveWeight(1.0);
        idleAction.crossFadeFrom(prevAction, 0.25, true);
        idleAction.play();
      } else {
        idleAction.play();
      }
    }
  
    Exit() {
    }
  
    Update(_, input) {
      if (!input) {
        return;
      }
  
    }
  };

  class HitState extends State {
    constructor(parent) {
      super(parent);
    }
  
    get Name() {
      return 'recieveHit';
    }

    Enter(prevState) {
      const recieveHitAction = this._parent._proxy.animations['recieveHit'].action;

      if (prevState) {
        const prevAction = this._parent._proxy.animations[prevState.Name].action;
        recieveHitAction.crossFadeFrom(prevAction, 1, true);
        recieveHitAction.play();
      } else {
        recieveHitAction.play();
      }
    }
  
    Exit() {
    }
  
    Update(_, input) {
      if (!input) {
        return;
      }

    }
  };

  return {
    State: State,
    DanceState: DanceState,
    AttackState_1: AttackState_1,
    AttackState_2: AttackState_2,
    IdleState: IdleState,
    JumpState: JumpState,
    LoadingState: LoadingState,
    WalkState: WalkState,
    RunState: RunState,
    DeathState: DeathState,
    HitState: HitState
  };

})();