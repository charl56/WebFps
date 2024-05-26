import * as THREE from 'three';

import { entity } from '../entities/entity.js';

import { player_input } from './player_control/player-input.js';
import { first_person_camera } from './player_control/first-person-camera.js';
import { kinematic_character_controller } from './player_control/kinematic-character-controller.js';
import { gun_controller } from './player_control/gun-controller.js';
import { display } from '../fx/display.js'
// Player spawn
import { spawnsCoord as SpaceSpawns } from '../../../../static/datas/Maps/Map_Space.js'
import { spawnsCoord as ZombieSpawns } from '../../../../static/datas/Maps/Map_Zombie_Ville.js'
// Health
import { health_component } from './player_control/health-component.js';

const spawnsTypes = {
    Space: SpaceSpawns,
    Zombie: ZombieSpawns,
};

export const player = (() => {

    class Player extends entity.Component {
        constructor(params) {
            super();
            this.params_ = params;
            this.e_ = new entity.Entity();
            this.dead_ = true;
            this.shouldRespawn = false;
            this.respawnZone = new THREE.Vector3(0, 27, 0);
        }

        InitComponent() {
            this.e_.AddComponent("PlayerInput", new player_input.PlayerInput(this.params_));                                       // Input player (move, shoot, jump, pause...)
            this.e_.AddComponent("FirstPersonCamera", new first_person_camera.FirstPersonCamera(this.params_));                          // Move camera on player
            this.e_.AddComponent("KinematicCharacterController", new kinematic_character_controller.KinematicCharacterController(this.params_));    // Set "physical body" to player
            this.e_.AddComponent("GunController", new gun_controller.GunController(this.params_))                                    // Setup weapon with name (for sound and display)
            this.e_.AddComponent("Displays", new display.Displays(this.params));                                                // Crosshair
            this.e_.AddComponent("HealthComponent", new health_component.HealthComponent({ health: 100, maxHealth: 100, updateUI: true, isItMe: true }));

            this.Manager.Add(this.e_, 'player');

            document.addEventListener('keydown', (event) => {
                if (event.key === ' ') {
                    this.dead_ ? this.shouldRespawn = true : false
                }
            });
        }

        OnDeath() {
            this.dead_ = true
            document.getElementById('div-msg-spawn').style.display = 'block'
        }

        Spawn() {
            const map = localStorage.getItem('mapChoosen')
            const spawns = Object.keys(spawnsTypes[map])
            const randomSpawn = spawnsTypes[map][spawns[Math.floor(Math.random() * spawns.length)]]

            this.e_.SetPosition(new THREE.Vector3(randomSpawn.x, randomSpawn.y, randomSpawn.z));
            this.FindEntity('player').GetComponent('HealthComponent').SetHealth(100);
        }

        Update(timeElapsed) {
            if (this.shouldRespawn && this.params_.scene.userData.mapReady) {
                this.Spawn();
                this.shouldRespawn = false; // Réinitialiser l'indicateur
                this.dead_ = false;
                document.getElementById('div-msg-spawn').style.display = 'none'
            } else if(this.dead_) {
                this.e_.SetPosition(this.respawnZone);
            }
        }
    };

    return {
        Player: Player,
    };
})();