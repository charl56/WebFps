
import { entity } from '../../entities/entity.js';


export const kinematic_character_controller = (() => {

    class KinematicCharacterController extends entity.Component {
        constructor(params) {
            super();
            this.params_ = params;
        }

        Destroy() {
            this.FindEntity('physics').GetComponent('AmmoJSController').RemoveRigidBody(this.body_);
        }

        InitEntity() {
            const pos = this.Parent.Position;
            const quat = this.Parent.Quaternion;

            this.body_ = this.FindEntity('physics').GetComponent('AmmoJSController').CreateKinematicCharacterController(
                pos, quat, { name: this.Parent.Name });

            this.Parent.Attributes.Physics = {
                CharacterController: this.body_,
            };

            this.Broadcast({ topic: 'physics.loaded' });
        }

        InitComponent() {
            this.RegisterHandler_('update.position', (m) => { this.OnPosition_(m); });
        }

        OnPosition_(m) {
            const pos = this.Parent.Position;
            const t = this.body_.transform_;

            this.body_.body_.getWorldTransform(t);

            t.getOrigin().setValue(pos.x, pos.y, pos.z);
            this.body_.body_.setWorldTransform(t);
        }

        Update(timeInSeconds) {

        }

    };


    class KinematicCharacterControllerEnemy extends entity.Component {
        constructor(params) {
            super();
            this.params_ = params;
            this.body_ = null;
        }

        Destroy() {
            this.FindEntity('physics').GetComponent('AmmoJSController').RemoveKinematicCharacterControllerEnemy(this.body_);
            this.body_ = null;
        }

        InitEntity() {

            const pos = this.Parent.Position;
            const quat = this.Parent.Quaternion;

            this.body_ = this.FindEntity('physics').GetComponent('AmmoJSController').CreateKinematicCharacterControllerEnemy(
                pos, quat, { name: this.Parent.Name });

            this.Parent.Attributes.Physics = {
                CharacterController: this.body_,
            };

            this.Broadcast({ topic: 'physics.loaded' });
        }

        InitComponent() {
            this.RegisterHandler_('update.position', (m) => { this.OnPosition_(m); });
        }

        OnPosition_(msg) {
            const pos = msg.value;
            const t = this.body_.transform_;

            this.body_.body_.getWorldTransform(t);

            t.getOrigin().setValue(pos.x, pos.y + 1.9, pos.z);
            this.body_.body_.setWorldTransform(t);
        }

        Update(timeInSeconds) {
        }

    };


    return {
        KinematicCharacterController: KinematicCharacterController,
        KinematicCharacterControllerEnemy: KinematicCharacterControllerEnemy
    };
})();