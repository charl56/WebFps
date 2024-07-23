<template>
    <div :id="modelPath" class="scene d-flex justify-center align-center">
    </div>
</template>

<script>
import { SkinVisualisation } from './script.js';

export default {
    props: {
        modelPath: {
            type: String,
            required: true,
        },
        map: {
            type: String,
            required: true,
        }
    },
    watch: {
        modelPath: 'initSkinVisualization',
    },
    mounted() {
        this.container = document.getElementById(this.modelPath);
        this.initSkinVisualization();
    },
    methods: {
        initSkinVisualization() {
            this.container.innerHTML = '';
            new SkinVisualisation(this.modelPath, this.container, this.map);
        }
    },

};
</script>

<style scoped>
.scene {
    height: 18vh;
}
</style>