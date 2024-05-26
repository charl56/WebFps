<template>
  <v-app id="app">
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
  created(){
    if(import.meta.env.DEV){  // Permet de ne pas avoir les message en mode dev
      this.presentation = true
    }
    

    eventBus.on("startGame", () => {
      this.presentation = false
    })
  },
  data(){
    return {
      presentation: true,
    }
  }
}
</script>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
html::-webkit-scrollbar {
  display: none;
}

html {
  margin: 0;
  height: 100%;
  background-color: #ffffff;
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ffffff !important;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
/* Surlignage du texte */
::selection{
  background-color: #ffffff;
  color: #7eb3e8;
}
::-moz-selection{
  background-color: #ffffff;
  color: #2c3e50;
}
</style>