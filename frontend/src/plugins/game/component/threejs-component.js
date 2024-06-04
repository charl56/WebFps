
import * as THREE from 'https://cdn.skypack.dev/three@0.130.1';

import {ShaderPass} from 'https://cdn.skypack.dev/three@0.130.1/examples//jsm/postprocessing/ShaderPass.js';
import {GammaCorrectionShader} from 'https://cdn.skypack.dev/three@0.130.1/examples/jsm/shaders/GammaCorrectionShader.js';
import {RenderPass} from 'https://cdn.skypack.dev/three@0.130.1/examples/jsm/postprocessing/RenderPass.js';
import {FXAAShader} from 'https://cdn.skypack.dev/three@0.130.1/examples/jsm/shaders/FXAAShader.js';

import {CSM} from '../third_party/csm/three-csm.js';

import {entity} from "../entities/entity.js";


export const threejs_component = (() => {

  

    class ThreeJSController extends entity.Component {
        constructor() {
            super();
        }

        InitEntity() {
            
            this.threejs_ = new THREE.WebGLRenderer({
            antialias: false,
            });
            this.threejs_.shadowMap.enabled = true;
            this.threejs_.shadowMap.type = THREE.PCFSoftShadowMap;
            this.threejs_.setPixelRatio(window.devicePixelRatio);
            this.threejs_.setSize(window.innerWidth, window.innerHeight);
            this.threejs_.domElement.id = 'threejs';
            this.threejs_.physicallyCorrectLights = true;
            // Create canvas
            document.getElementById('container').appendChild(this.threejs_.domElement);
            // Event
            window.addEventListener('resize', () => {
                this.onWindowResize_();
            }, false);
            // Camera
            const fov = 90;
            const aspect = 1280/720;
            const near = 0.1;
            const far = 100.0;
            this.camera_ = new THREE.PerspectiveCamera(fov, aspect, near, far);
            this.camera_.lookAt(0,0,0)
            // Sceme
            this.scene_ = new THREE.Scene();
            this.scene_.background = new THREE.Color( 0x82888f );
            this.scene_.add(this.camera_);
            this.scene_.fog = new THREE.FogExp2(0xDFE9F3, 0.00005);
            // Audio
            this.listener_ = new THREE.AudioListener();
            this.camera_.add(this.listener_);
            // Ambient light
            const ambientLight = new THREE.AmbientLight(0xFFD8C4, 1)
            this.scene_.add(ambientLight)
            // Light for shadows
            let light = new THREE.DirectionalLight(0xFCB490, 3);
            light.position.set(0, 30, 0);
            light.target.position.set(0, 0, 0);
            this.scene_.add(light)

            const lightDir = light.position.clone();
            lightDir.normalize();
            lightDir.multiplyScalar(-1);
            // Cascade Shadow Map
            this.csm_ = new CSM( {
            maxFar: this.camera_.far,
            cascades: 4,
            mode: 'logarithmic',
            parent: this.scene_,
            shadowMapSize: 4096,
            lightDirection: lightDir,
            camera: this.camera_,
            lightNear: 1.0,
            lightFar: 1000.0,
            });
            this.csm_.fade = true;

            const parameters = {
            minFilter: THREE.NearestFilter,
            magFilter: THREE.NearestFilter,
            format: THREE.RGBAFormat,
            type: THREE.FloatType,
            };
            
            const renderTarget = new THREE.WebGLRenderTarget(
                window.innerWidth, window.innerHeight, parameters);
            this.writeBuffer_ = renderTarget;
            this.readBuffer_ = renderTarget.clone();

            this.fxaaPass_ = new ShaderPass(FXAAShader);


            this.opaquePass_ = new RenderPass(this.scene_, this.camera_);
            this.gammaPass_ = new ShaderPass(GammaCorrectionShader);


            this.onWindowResize_();
        }

        getMaxAnisotropy() {
            return this.threejs_.capabilities.getMaxAnisotropy();
        }

        onWindowResize_() {
            this.camera_.aspect = window.innerWidth / window.innerHeight;
            this.camera_.updateProjectionMatrix();

            this.threejs_.setSize(window.innerWidth, window.innerHeight);

            this.csm_.updateFrustums();

            const pixelRatio = this.threejs_.getPixelRatio();
            this.fxaaPass_.material.uniforms['resolution'].value.x = 1 / (
                window.innerWidth * pixelRatio);
            this.fxaaPass_.material.uniforms['resolution'].value.y = 1 / (
                window.innerHeight * pixelRatio);
        }

        Render(timeElapsedS) {
            this.csm_.update(this.camera_.matrix);

            this.opaquePass_.clearColor = new THREE.Color(0x000000);
            this.opaquePass_.clearAlpha = 0.0;
            this.opaquePass_.render(this.threejs_, this.writeBuffer_, this.readBuffer_, timeElapsedS, false);

            // VIDEO HACK
            this.fxaaPass_.render(this.threejs_, this.writeBuffer_, this.readBuffer_, timeElapsedS, false);

            this.gammaPass_.renderToScreen = true;
            this.gammaPass_.render(this.threejs_, this.writeBuffer_, this.readBuffer_, timeElapsedS, false);
        }

        Update(timeElapsed) {
            const player = this.FindEntity('player');
            if (!player) {
            return;
            }
        }
    }

    return {
        ThreeJSController: ThreeJSController,
    };
})();