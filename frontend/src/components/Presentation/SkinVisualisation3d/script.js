import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import skinsSpace from '../../../../static/datas/Skins/Skins_Space.js';
import skinsZombie from '../../../../static/datas/Skins/Skins_Zombie.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const clock = new THREE.Clock();

export class SkinVisualisation {
    constructor(modelPath, container, map) {
        this.modelPath_ = modelPath;
        this.container_ = container;
        this.map_ = map;
        this.camera_ = null;
        this.controls_ = null;
        this.scene_ = null;
        this.renderer_ = null;
        this.mixer_ = null;
        this.model_ = null;

        this.animate = this.animate.bind(this);
        this.onWindowResize = this.onWindowResize.bind(this);

        this.init_()
    }


    init_() {
        const width = this.container_.clientWidth;
        const height = this.container_.clientHeight;

        this.camera_ = new THREE.PerspectiveCamera(65, width / height, 1, 2000);
        this.camera_.position.set(0, 0.5, 2);

        this.scene_ = new THREE.Scene();
        this.scene_.background = new THREE.Color(0xeeeeee);

        this.renderer_ = new THREE.WebGLRenderer({ antialias: true });
        this.renderer_.setSize(width, height);
        this.renderer_.setAnimationLoop(this.animate);
        this.renderer_.shadowMap.enabled = true;
        this.container_.appendChild(this.renderer_.domElement);

        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(5, 10, 7.5);
        this.scene_.add(light);


        const ground = new THREE.Mesh(
            new THREE.PlaneGeometry(10, 10),
            new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false })
        );
        ground.rotation.x = -Math.PI / 2;
        ground.position.y = -1.5;
        ground.receiveShadow = true;
        this.scene_.add(ground);

        this.controls_ = new OrbitControls(this.camera_, this.renderer_.domElement);
        this.controls_.minDistance = 2;
        this.controls_.maxDistance = 5;

        window.addEventListener('resize', this.onWindowResize);

        this.loadGLTFModel();
    }


    onWindowResize() {
        const width = this.container_.clientWidth;
        const height = this.container_.clientHeight;

        this.camera_.aspect = width / height;
        this.camera_.updateProjectionMatrix();

        this.renderer_.setSize(width, height);
    }

    animate() {
        const delta = clock.getDelta();

        if (this.mixer_) this.mixer_.update(delta);
        this.renderer_.render(this.scene_, this.camera_);
    }

    loadGLTFModel() {
        return new Promise((resolve, reject) => {
            const loader = new GLTFLoader();
            var skins = this.map_ == "Space" ? skinsSpace : skinsZombie;

            const skin = skins[this.modelPath_];

            loader.load(skin.gltf, (gltf) => {
                const model = gltf.scene;

                if (this.model_) {
                    this.scene_.remove(this.model_);
                    this.mixer_ = null;
                }

                this.model_ = model;

                model.traverse((child) => {
                    if (child.isMesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                });

                this.mixer_ = new THREE.AnimationMixer(model);
                this.mixer_.clipAction(gltf.animations[2]).play();

                model.position.set(0, -2, 0);
                this.scene_.add(model);

                resolve();
            },
                undefined,
                (error) => {
                    console.error(error);
                    reject(error);
                }
            );
        });
    }
}