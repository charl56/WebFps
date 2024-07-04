import * as THREE from 'https://cdn.skypack.dev/three@0.130.1';

import { entity } from '../entities/entity.js';
import { basic_rigid_body } from '../basic-rigid-body.js';
import { sceneItems as SpaceItems } from '../../../../static/datas/Maps/Map_Space.js'
import { sceneItems as ZombieItems } from '../../../../static/datas/Maps/Map_Zombie_Ville.js'

const mapTypes = {
    Space: SpaceItems,
    Zombie: ZombieItems,
};
function getKeysForMap(mapType) {
    return Object.keys(mapTypes[mapType]);
}


export const map_builder = (() => {
    // Create map with building, road...
    class Build extends entity.Component {
        constructor(params) {
            super();

            this.params_ = params;
            this.spawned_ = false;
        }

        InitEntity() {
            // Floor for spawn
            const s = new entity.Entity();
            s.AddComponent("BasicRigidBody", new basic_rigid_body.BasicRigidBody({ box: new THREE.Vector3(100, 2, 100) }));
            this.Manager.Add(s);
            s.SetPosition(new THREE.Vector3(0, 23, 0));
            s.SetActive(false);

            this.loader_ = this.FindEntity('loader').GetComponent('LoadController');
            this.threejs_ = this.FindEntity('threejs').GetComponent('ThreeJSController');

            this.BuildMap_();
        }

        async BuildMap_() {
            // Var to check when map is ready
            this.params_.scene.userData.mapReady = false
            // HDR texture, 360° image
            // const url = './static/Texture/hdr/background_town_old_cars.hdr'
            // const texture = await this.loader_.loadRGBE(url);
            // texture.mapping = THREE.EquirectangularReflectionMapping;
            // this.params_.scene.background = texture
            // Ajout des items pour faire la map, du fichier sceneItems.js
            const map = localStorage.getItem('mapChoosen')
            const keys = getKeysForMap(map)

            // Pour chaques items
            for (const element of keys) {
                const key = element;
                const sceneItem = mapTypes[map][key]
                try {
                    // ------ THREEJS SECTION
                    // Loader entity
                    const materialItem = await this.loader_.loadMTL(sceneItem.mtl);
                    await materialItem.preload();

                    const materielMesh = await this.loader_.loadOBJ(sceneItem.obj, materialItem);
                    // Ombre de l'objet
                    materielMesh.receiveShadow = true
                    materielMesh.castShadow = true
                    // Position
                    materielMesh.position.set(
                        sceneItem.position.x,
                        sceneItem.position.y,
                        sceneItem.position.z
                    );
                    // Rotation
                    materielMesh.rotation.set(
                        sceneItem.rotation.x,
                        sceneItem.rotation.y,
                        sceneItem.rotation.z,
                    )
                    // Echelle
                    materielMesh.scale.set(sceneItem.scale_threejs, sceneItem.scale_threejs, sceneItem.scale_threejs);
                    // Ajout d'un tag pour différencier
                    materielMesh.userData.tag = "sceneItem"
                    // Ajout de la mesh à l'objet de l'item
                    sceneItem.mesh = materielMesh;

                    // Physics part
                    const e = new entity.Entity();
                    // ------ AMMOJS SECTION
                    e.AddComponent("BasicRigidBody", new basic_rigid_body.BasicRigidBody({
                        // scene: this.params_.scene,
                        box: new THREE.Vector3(
                            sceneItem.scale_physic.x,
                            sceneItem.scale_physic.y,
                            sceneItem.scale_physic.z
                        )
                    }));

                    this.Manager.Add(e, sceneItem);
                    e.SetPosition(new THREE.Vector3(
                        sceneItem.position.x,
                        sceneItem.position.y,
                        sceneItem.position.z
                    ));
                    e.SetActive(false);

                    // Ajout à la scene
                    this.params_.scene.add(materielMesh);

                } catch (error) {
                    console.error("Erreur lors du chargement de la physique d'un élement", error, key);
                }
            }

            // Map ready
            this.params_.scene.userData.mapReady = true
        }

        Update(timeElapsed) {
        }
    };

    return {
        Build: Build,
    };
})();