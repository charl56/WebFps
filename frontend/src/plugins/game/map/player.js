import * as THREE from 'three';

import { entity } from '../entities/entity.js';
// Player spawn
import { spawnsCoord as SpaceSpawns } from '../../../../static/datas/Maps/Map_Space.js'
import { spawnsCoord as ZombieSpawns } from '../../../../static/datas/Maps/Map_Zombie_Ville.js'

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

            document.addEventListener('keydown', (event) => {
                if (event.key === ' ') {
                    this.dead_ ? this.shouldRespawn = true : false
                }
            });
        }
        InitEntity(){
            this.e_ = this.FindEntity('player')
        }
        
        InitComponent() {
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