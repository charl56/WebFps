<template>
    <div id="container" class="scene" ref="scene" onselectstart="return false" onmousedown="return false">
        <Display />
    </div>
</template>

<script>
import { QuickFPS1 } from '../../plugins/game/main';
import Ammo from 'ammo.js';
// Display : bullets, round...
import Display from './Display.vue'

export default {
    components: {
        Display
    },
    async mounted() {
        // App
        let _APP = null;
        try {
            await new Ammo();
            _APP = new QuickFPS1();
        } catch (error) {
            console.error("Error initializing Ammo:", error);
        }
    },
    data() {
        return {
        }
    },
};
</script>


<style>
.scene {
    height: 100vh;
    width: 100vw;
    cursor: none;
    position: relative;
}
</style>
