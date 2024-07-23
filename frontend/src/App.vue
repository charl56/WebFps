<template>
    <v-app >
        <Presentation v-if="presentation" />
        <!-- Jeu -->
        <Game v-else />
    </v-app>
</template>

<script>
import Game from './components/Game/Game.vue'
import Presentation from './components/Presentation/Presentation.vue'

import { eventBus } from './plugins/eventBus'

export default {
    name: 'App',
    components: {
        Presentation,
        Game,
    },
    created() {
        if (import.meta.env.DEV) {  // Permet de ne pas avoir les message en mode dev
            this.presentation = true
        }


        eventBus.on("startGame", () => {
            this.presentation = false
        })
    },
    data() {
        return {
            presentation: true,
        }
    }
}
</script>

<style>
:root {
    --background-color: #AEC8CE;
    --text-selection: #7eb3e8;
    --text-color: white;
    --text-color-danger: #cd5858;
}

@font-face {
    font-family: 'JockeyOne-Regular';
    src: url('@/assets/fonts/JockeyOne-Regular.ttf') format('opentype');
}
/* Hide scrollbar for Chrome, Safari and Opera */
html::-webkit-scrollbar {
    display: none;
}

html {
    margin: 0;
    height: 100%;
    position: fixed;
    width: 100vw;
    /* Hide scrollbar for IE, Edge and Firefox */
    /* IE and Edge */
    -ms-overflow-style: none;
    /* Firefox */
    scrollbar-width: none;
}

/* Surlignage du texte */
::selection {
    background-color: var(--background-color);
    color: var(--text-selection);
}

::-moz-selection {
    background-color: var(--background-color);
    color: var(--text-selection);
}
</style>