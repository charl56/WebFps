import * as THREE from 'https://cdn.skypack.dev/three@0.130.1';

import { entity } from './entities/entity';


export const render_component = (() => {

    class RenderWeapon extends entity.Component {
        constructor(params) {
            super();
            this.group_ = new THREE.Group();
            this.target_ = null;
            this.offset_ = null;
            this.params_ = params;
            this.params_.scene.add(this.group_);
        }

        Destroy() {
            this.group_.traverse(c => {
                if (c.material) {
                    c.material.dispose();
                }
                if (c.geometry) {
                    c.geometry.dispose();
                }
            });
            this.params_.scene.remove(this.group_);
        }

        InitEntity() {
            this.Parent.Attributes.Render = {
                group: this.group_,
            };

            this.loader_ = this.FindEntity('loader').GetComponent('LoadController');
            this.LoadModels_();
        }

        InitComponent() {
            this.RegisterHandler_('update.position', (m) => { this.OnPosition_(m); });
            this.RegisterHandler_('update.rotation', (m) => { this.OnRotation_(m); });
            this.RegisterHandler_('render.visible', (m) => { this.OnVisible_(m); });
            this.RegisterHandler_('render.offset', (m) => { this.OnOffset_(m.offset); });

        }

        OnVisible_(m) {
            this.group_.visible = m.value;
        }

        OnPosition_(m) {
            this.group_.position.copy(m.value);
        }

        OnRotation_(m) {
            this.group_.quaternion.copy(m.value);
        }

        OnOffset_(offset) {
            this.offset_ = offset;
            if (!this.offset_) {
                return;
            }

            if (this.target_) {
                this.target_.position.copy(this.offset_.position);
                this.target_.quaternion.copy(this.offset_.quaternion);
            }
        }

        async LoadModels_() {
            const materialItem = await this.loader_.loadMTL(this.params_.mtl);
            await materialItem.preload();

            const materielMesh = await this.loader_.loadOBJ(this.params_.obj, materialItem);
            this.OnLoaded_(materielMesh)
        }

        OnLoaded_(obj) {

            this.target_ = obj;
            this.group_.add(this.target_);
            this.group_.position.copy(this.Parent.Position);
            this.group_.quaternion.copy(this.Parent.Quaternion);

            this.target_.scale.copy(this.params_.scale);
            if (this.params_.offset) {
                this.offset_ = this.params_.offset;
            }
            this.OnOffset_(this.offset_);

            const textures = {};
            if (this.params_.textures) {

                for (let k in this.params_.textures.names) {
                    const t = this.loader_.LoadTexture(
                        this.params_.textures.resourcePath, this.params_.textures.names[k]);
                    t.encoding = THREE.sRGBEncoding;

                    if (this.params_.textures.wrap) {
                        t.wrapS = THREE.RepeatWrapping;
                        t.wrapT = THREE.RepeatWrapping;
                    }

                    textures[k] = t;
                }
            }

            this.target_.traverse(c => {
                let materials = c.material;
                if (!(c.material instanceof Array)) {
                    materials = [c.material];
                }

                if (c.geometry) {
                    c.geometry.computeBoundingBox();
                }

                for (let m of materials) {
                    if (m) {

                        if (this.params_.onMaterial) {
                            this.params_.onMaterial(m);
                        }
                        for (let k in textures) {
                            if (m.name.search(k) >= 0) {
                                m.map = textures[k];
                            }
                        }
                        if (this.params_.specular) {
                            m.specular = this.params_.specular;
                        }
                        if (this.params_.emissive) {
                            m.emissive = this.params_.emissive;
                        }
                        if (this.params_.colour) {
                            m.color = this.params_.colour;
                        }
                    }
                }
                if (this.params_.receiveShadow !== undefined) {
                    c.receiveShadow = this.params_.receiveShadow;
                }
                if (this.params_.castShadow !== undefined) {
                    c.castShadow = this.params_.castShadow;
                }
                if (this.params_.visible !== undefined) {
                    c.visible = this.params_.visible;
                }

                c.castShadow = true;
                c.receiveShadow = true;
            });

            this.Broadcast({
                topic: 'weapon.loaded',
                value: this.target_,
            });
        }

        Update(timeInSeconds) {
        }
    };

    class RenderComponent extends entity.Component {
        constructor(params) {
            super();
            this.group_ = new THREE.Group();
            this.target_ = null;
            this.offset_ = null;
            this.params_ = params;
            this.params_.scene.add(this.group_);
        }

        Destroy() {
            this.group_.traverse(c => {
                if (c.material) {
                    c.material.dispose();
                }
                if (c.geometry) {
                    c.geometry.dispose();
                }
            });
            this.params_.scene.remove(this.group_);
        }

        InitEntity() {
            this.Parent.Attributes.Render = {
                group: this.group_,
            };

            this.loader_ = this.FindEntity('loader').GetComponent('LoadController');
            this.LoadModels_();
        }

        InitComponent() {
            this.RegisterHandler_('update.position', (m) => { this.OnPosition_(m); });
            this.RegisterHandler_('update.rotation', (m) => { this.OnRotation_(m); });
            this.RegisterHandler_('render.visible', (m) => { this.OnVisible_(m); });
            this.RegisterHandler_('render.offset', (m) => { this.OnOffset_(m.offset); });
        }

        OnVisible_(m) {
            this.group_.visible = m.value;
        }

        OnPosition_(m) {
            this.group_.position.copy(m.value);
        }

        OnRotation_(m) {
            this.group_.quaternion.copy(m.value);
        }

        OnOffset_(offset) {
            this.offset_ = offset;
            if (!this.offset_) {
                return;
            }

            if (this.target_) {
                this.target_.position.copy(this.offset_.position);
                this.target_.quaternion.copy(this.offset_.quaternion);
            }
        }

        LoadModels_() {
            this.loader_.Load(
                this.params_.resourcePath, this.params_.resourceName, (mdl) => {
                    this.OnLoaded_(mdl.scene);
                });
        }

        OnLoaded_(obj) {
            this.target_ = obj;
            this.group_.add(this.target_);
            this.group_.position.copy(this.Parent.Position);
            this.group_.quaternion.copy(this.Parent.Quaternion);

            this.target_.scale.copy(this.params_.scale);
            if (this.params_.offset) {
                this.offset_ = this.params_.offset;
            }
            this.OnOffset_(this.offset_);

            const textures = {};
            if (this.params_.textures) {

                for (let k in this.params_.textures.names) {
                    const t = this.loader_.LoadTexture(
                        this.params_.textures.resourcePath, this.params_.textures.names[k]);
                    t.encoding = THREE.sRGBEncoding;

                    if (this.params_.textures.wrap) {
                        t.wrapS = THREE.RepeatWrapping;
                        t.wrapT = THREE.RepeatWrapping;
                    }

                    textures[k] = t;
                }
            }

            this.target_.traverse(c => {
                let materials = c.material;
                if (!(c.material instanceof Array)) {
                    materials = [c.material];
                }

                if (c.geometry) {
                    c.geometry.computeBoundingBox();
                }

                for (let m of materials) {
                    if (m) {

                        if (this.params_.onMaterial) {
                            this.params_.onMaterial(m);
                        }
                        for (let k in textures) {
                            if (m.name.search(k) >= 0) {
                                m.map = textures[k];
                            }
                        }
                        if (this.params_.specular) {
                            m.specular = this.params_.specular;
                        }
                        if (this.params_.emissive) {
                            m.emissive = this.params_.emissive;
                        }
                        if (this.params_.colour) {
                            m.color = this.params_.colour;
                        }
                    }
                }
                if (this.params_.receiveShadow !== undefined) {
                    c.receiveShadow = this.params_.receiveShadow;
                }
                if (this.params_.castShadow !== undefined) {
                    c.castShadow = this.params_.castShadow;
                }
                if (this.params_.visible !== undefined) {
                    c.visible = this.params_.visible;
                }

                c.castShadow = true;
                c.receiveShadow = true;
            });

            this.Broadcast({
                topic: 'render.loaded',
                value: this.target_,
            });
        }

        Update(timeInSeconds) {
        }
    };

    return {
        RenderWeapon: RenderWeapon,
        RenderComponent: RenderComponent,
    };

})();