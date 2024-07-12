import * as THREE from 'three';

import { entity } from '../../entities/entity.js';
import { math } from '../../math.js';

import { player_input } from './player-input.js';
import { passes } from '../../passes.js';


export const first_person_camera = (() => {

    const POWER_TIME = 5;
    const POWER_RECHARGE = 10;

    class FirstPersonCamera extends entity.Component {
        constructor(params) {
            super();

            this.params_ = params;
            this.camera_ = params.camera;
            this.group_ = new THREE.Group();
            this.params_.scene.add(this.group_);
        }

        Destroy() {
            this.params_.scene.remove(this.group_);
        }

        InitEntity() {
            this.rotation_ = new THREE.Quaternion();
            this.translation_ = new THREE.Vector3(0, 3, 0);
            this.phi_ = 0;
            this.phiSpeed_ = 8;
            this.theta_ = 0;
            this.thetaSpeed_ = 5;
            this.headBobActive_ = false;
            this.headBobTimer_ = 0;
            this.headBobSpeed_ = 15;
            this.headBobHeight_ = 0.01;
            this.walkSpeed_ = 10;
            this.strafeSpeed_ = 10;
            this.powerTime_ = 1;
            this.power_ = false;
            this.Parent.Attributes.FPSCamera = {
                group: this.group_
            };
            this.SetPass(passes.CAMERA);
            this.socket = this.FindEntity('websocket').GetComponent('WebSocketManager').socket
        }

        Update(timeElapsedS) {
            this.updateRotation_(timeElapsedS);     // Camera rotation
            this.updateCamera_(timeElapsedS);       // Update camera datas 
            this.updateHeadBob_(timeElapsedS);      // Head
            this.updateTranslation_(timeElapsedS);  // Camera moving
            this.updatePower_(timeElapsedS);        // Speed 
            this.uploadMovementData_();             // Upload movement data to server

            this.Parent.SetPosition(this.translation_);
            this.Parent.SetQuaternion(this.rotation_);
        }

        updateCamera_(_) {
            this.camera_.quaternion.copy(this.rotation_);
            this.camera_.position.copy(this.translation_);
            this.camera_.position.y += Math.sin(this.headBobTimer_ * this.headBobSpeed_) * this.headBobHeight_;
            this.group_.position.copy(this.translation_);
            this.group_.quaternion.copy(this.rotation_);
        }

        updateTranslation_(timeElapsedS) {
            const input = this.GetComponent('PlayerInput');

            const forwardVelocity = (input.key(player_input.KEYS.z) ? 1 : 0) + (input.key(player_input.KEYS.s) ? -1 : 0)
            const strafeVelocity = (input.key(player_input.KEYS.q) ? 1 : 0) + (input.key(player_input.KEYS.d) ? -1 : 0)

            const qx = new THREE.Quaternion();
            qx.setFromAxisAngle(new THREE.Vector3(0, 1, 0), this.phi_);

            const forward = new THREE.Vector3(0, 0, -1);
            forward.applyQuaternion(qx);
            forward.multiplyScalar(forwardVelocity * timeElapsedS * this.walkSpeed_);

            const left = new THREE.Vector3(-1, 0, 0);
            left.applyQuaternion(qx);
            left.multiplyScalar(strafeVelocity * timeElapsedS * this.strafeSpeed_);

            const walk = forward.clone().add(left);
            this.Parent.Attributes.Physics.CharacterController.setWalkDirection(walk);
            const t = this.Parent.Attributes.Physics.CharacterController.body_.getWorldTransform();
            const pos = t.getOrigin();
            const pos3 = new THREE.Vector3(pos.x(), pos.y(), pos.z());

            this.translation_.lerp(pos3, 0.75);

            if (input.key(player_input.KEYS.SPACE)) {
                this.headBobActive_ = false;
                this.Parent.Attributes.Physics.CharacterController.jump();
            }


            if (input.key(player_input.KEYS.SHIFT_L)) {
                this.power_ = true;
            } else {
                this.power_ = false;
            }


            if (forwardVelocity != 0 || strafeVelocity != 0) {
                this.headBobActive_ = true;
            }
        }

        updateHeadBob_(timeElapsedS) {
            if (this.headBobActive_) {

                const wavelength = Math.PI;
                const nextStep = 1 + Math.floor(((this.headBobTimer_ + 0.000001) * this.headBobSpeed_) / wavelength);
                const nextStepTime = nextStep * wavelength / this.headBobSpeed_;
                this.headBobTimer_ = Math.min(this.headBobTimer_ + timeElapsedS, nextStepTime);

                if (this.headBobTimer_ == nextStepTime) {
                    this.headBobActive_ = false;
                    this.Broadcast({
                        topic: 'fps.step',
                        step: nextStep,
                    });
                }
            }
        }

        updateRotation_(timeElapsedS) {
            const input = this.GetComponent('PlayerInput');

            const xh = input.current_.mouseXDelta / window.innerWidth;
            const yh = input.current_.mouseYDelta / window.innerHeight;

            this.phi_ += -xh * this.phiSpeed_;
            this.theta_ = math.clamp(this.theta_ + -yh * this.thetaSpeed_, -Math.PI / 3, Math.PI / 3);

            const qx = new THREE.Quaternion();
            qx.setFromAxisAngle(new THREE.Vector3(0, 1, 0), this.phi_);
            const qz = new THREE.Quaternion();
            qz.setFromAxisAngle(new THREE.Vector3(1, 0, 0), this.theta_);

            const q = new THREE.Quaternion();
            q.multiply(qx);
            q.multiply(qz);

            const t = 1.0 - Math.pow(0.01, 5 * timeElapsedS);
            this.rotation_.slerp(q, t);
        }

        updatePower_(timeElapsedS) {
            if (this.power_) {
                this.powerTime_ -= timeElapsedS / POWER_TIME;
                if (this.powerTime_ < 0) {
                    this.power_ = false;
                }
            } else {
                this.powerTime_ += timeElapsedS / POWER_RECHARGE;
                this.powerTime_ = math.sat(this.powerTime_);
            }

            const power = this.power_;

            this.walkSpeed_ = power ? 18 : 10;
            this.Parent.Attributes.Physics.CharacterController.setJumpMultiplier(power ? 1.25 : 1);
        }


        uploadMovementData_() {
            if(this.socket.readyState != 1) return

            this.socket.send(JSON.stringify({
                type: 'updateClientPos',
                position: [
                    this.camera_.position.x,
                    this.camera_.position.y,
                    this.camera_.position.z,
                ],
                direction: this.camera_.quaternion.toArray()
            }));
        }
    };



    return {
        FirstPersonCamera: FirstPersonCamera
    };

})();