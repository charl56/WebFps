import { threejs_component } from './component/threejs-component.js';
import { ammojs_component } from './component/ammojs-component.js';
// Entities  
import { entity_manager } from './entities/entity-manager.js';
import { entity } from './entities/entity.js';
// Rassemble les differents chargement (texture, sound...)
import { load_controller } from './load-controller.js';
// Map
import { map_builder } from './map/map-builder.js'
// Setup player input, FPC, kinematic controller
import { player } from './map/player.js';
// Udp server
import { web_socket } from './utils/websocket.js';
// Gun effect
import { blaster } from './fx/blaster.js';
// Show FPS
import Stats from 'stats.js'
let stats = new Stats()
stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom)

// Limite FPS
const maxFPS = 60;
const frameDelay = 1000 / maxFPS;

export class QuickFPS1 {
    constructor(ammo) {
        this.entityManager_ = new entity_manager.EntityManager();
        this.OnGameStarted_();
        this.ammo_ = ammo
    }

    OnGameStarted_() {
        this.LoadControllers_();
        // Grap mouse
        document.body.requestPointerLock();

        this.previousRAF_ = null;
        this.RAF_();
    }

    LoadControllers_() {
        // Create ThreeJs part
        const threejs = new entity.Entity();
        threejs.AddComponent("ThreeJSController", new threejs_component.ThreeJSController());
        this.entityManager_.Add(threejs, 'threejs');

        // Create AmmoJs part
        const ammojs = new entity.Entity();
        ammojs.AddComponent("AmmoJSController", new ammojs_component.AmmoJSController(this.ammo_));
        this.entityManager_.Add(ammojs, 'physics');

        // Setup
        this.ammojs_ = ammojs.GetComponent('AmmoJSController');
        this.threejs_ = threejs.GetComponent('ThreeJSController');
        this.scene_ = threejs.GetComponent('ThreeJSController').scene_;
        this.camera_ = threejs.GetComponent('ThreeJSController').camera_;

        // Parametres : scene, cam... a tous les composants "enfants"
        const basicParams = {
            scene: this.scene_,
            camera: this.camera_,
        };

        // FX
        const fx = new entity.Entity();
        fx.AddComponent("BlasterSystem", new blaster.BlasterSystem({
            scene: this.scene_,
            camera: this.camera_,
            texture: './static/Texture/fx/fire.png',
        }));
        this.entityManager_.Add(fx, 'fx');

        // Loaders (textures)
        const l = new entity.Entity();
        l.AddComponent("LoadController", new load_controller.LoadController());
        this.entityManager_.Add(l, 'loader');

        // Map
        const map = new entity.Entity();
        map.AddComponent("Build", new map_builder.Build(basicParams));
        this.entityManager_.Add(map, 'map');

        // Websocket 
        const websocket = new entity.Entity();
        websocket.AddComponent("WebSocketManager", new web_socket.WebSocketManager(basicParams));
        this.entityManager_.Add(websocket, 'websocket');

        // Player
        const playerSpawner = new entity.Entity();
        this.entityManager_.Add(playerSpawner, 'playerSpawner');
        playerSpawner.AddComponent("Player", new player.Player(basicParams));
    }

    RAF_() {
        requestAnimationFrame((t) => {
            // Démarre le rendu si début, sinon continue
            if (this.previousRAF_ === null) {
                this.previousRAF_ = t;
            } else {
                const elapsed = t - this.previousRAF_;
                // Seulement effectuer le rendu si suffisamment de temps s'est écoulé
                if (elapsed > frameDelay) {
                    this.Step_(elapsed);
                    this.previousRAF_ = t - (elapsed % frameDelay);
                }
            }
            // Lance le rendu en boucle
            this.RAF_();
        });
    }

    Step_(timeElapsed) {
        stats.update()
        const timeElapsedS = Math.min(1.0 / 30.0, timeElapsed * 0.001);
        // Update entities, AmmoJs part & ThreeJs part
        this.entityManager_.Update(timeElapsedS);
        console.log(this.entityManager_)
        this.ammojs_.StepSimulation(timeElapsedS);
        this.threejs_.Render(timeElapsedS);
    }
}


