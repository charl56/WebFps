import * as THREE from 'three';
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader.js'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';      // Pour les objets
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';      // //
import {RGBELoader} from 'three/examples/jsm/loaders/RGBELoader.js';

import {Skeleton} from 'three/src/objects/Skeleton.js';

import {entity} from "./entities/entity.js";

 
export const load_controller = (() => {

  class LoadController extends entity.Component {
    constructor() {
      super();

      this.textures_ = {};
      this.models_ = {};
      this.sounds_ = {};
      this.playing_ = [];
    }

    AddModel(model, path, name) {
      const fullName = path + name;
      this.models_[fullName] = {loader: null, asset: model}
    }

    LoadTexture(path, name) {
      if (!(name in this.textures_)) {
        const loader = new THREE.TextureLoader();
        loader.setPath(path);

        this.textures_[name] = {loader: loader, texture: loader.load(name)};
        this.textures_[name].encoding = THREE.sRGBEncoding;
      }

      return this.textures_[name].texture;
    }

    LoadSound(path, name, onLoad) {
      if (!(name in this.sounds_)) {
        const loader = new THREE.AudioLoader();
        loader.setPath(path);

        loader.load(name, (buf) => {
          this.sounds_[name] = {
            buffer: buf
          };
          const threejs = this.FindEntity('threejs').GetComponent('ThreeJSController');
          const s = new THREE.PositionalAudio(threejs.listener_);
          s.setBuffer(buf);
          s.setRefDistance(10);
          s.setMaxDistance(500);
          onLoad(s);
          this.playing_.push(s);
        });
      } else {
        const threejs = this.FindEntity('threejs').GetComponent('ThreeJSController');
        const s = new THREE.PositionalAudio(threejs.listener_);
        s.setBuffer(this.sounds_[name].buffer);
        s.setRefDistance(25);
        s.setMaxDistance(1000);
        onLoad(s);
        this.playing_.push(s);
      }
    }

    Load(path, name, onLoad) {
      if (name.endsWith('glb') || name.endsWith('gltf')) {
        this.LoadGLB(path, name, onLoad);
      } else if (name.endsWith('fbx')) {
        this.LoadFBX(path, name, onLoad);
      } else {
        const fullName = path + name;
        if (this.models_[fullName]) {
          const clone = this.models_[fullName].asset.clone();
          onLoad({scene: clone});
          return;
        }
        // Silently fail, because screw you future me.
      }
    }


    LoadFBX(path, name, onLoad) {
      if (!(name in this.models_)) {
        const loader = new FBXLoader();
        loader.setPath(path);

        this.models_[name] = {loader: loader, asset: null, queue: [onLoad]};
        this.models_[name].loader.load(name, (fbx) => {
          this.models_[name].asset = fbx;

          const queue = this.models_[name].queue;
          this.models_[name].queue = null;
          for (let q of queue) {
            const clone = Skeleton.clone(this.models_[name].asset);
            q(clone);
          }
        });
      } else if (this.models_[name].asset == null) {
        this.models_[name].queue.push(onLoad);
      } else {
        const clone = Skeleton.clone(this.models_[name].asset);
        onLoad(clone);
      }
    }

    LoadGLB(path, name, onLoad) {
      const fullName = path + name;
      if (!(fullName in this.models_)) {
        const loader = new GLTFLoader();
        loader.setPath(path);

        this.models_[fullName] = {loader: loader, asset: null, queue: [onLoad]};
        this.models_[fullName].loader.load(name, (glb) => {
          this.models_[fullName].asset = glb;

          const queue = this.models_[fullName].queue;
          this.models_[fullName].queue = null;
          for (let q of queue) {
            const clone = {...glb};
            clone.scene = Skeleton.clone(clone.scene);

            q(clone);
          }
        });
      } else if (this.models_[fullName].asset == null) {
        this.models_[fullName].queue.push(onLoad);
      } else {
        const clone = {...this.models_[fullName].asset};
        clone.scene = Skeleton.clone(clone.scene);

        onLoad(clone);
      }
    }

    loadMTL(path) {                  
      return new Promise((resolve, reject) => {
          const mtlLoader = new MTLLoader();
          mtlLoader.load(path, resolve, undefined, reject);
      });
    }

    loadOBJ(path, materials) {      
      return new Promise((resolve, reject) => {
          const objLoader = new OBJLoader();
          objLoader.setMaterials(materials);
          objLoader.load(path, resolve, undefined, reject);
      });
    }

    loadGLTF(path){
      return new Promise((resolve, reject) => {
        const gltfLoader = new GLTFLoader();
        gltfLoader.load(path, resolve, undefined, reject);
      })
    }

    loadRGBE(path){
      return new Promise((resolve, reject) => {
        const rgbeLoader = new RGBELoader();
        rgbeLoader.load(path, resolve, undefined, reject);
      })
    }


    Update(timeElapsed) {
    }
  }

  return {
      LoadController: LoadController,
  };
})();