<template>  
    <v-dialog v-model="gameStop" v-if="gameStop" persistent class="menu d-flex" style="opacity: 1">
        <v-row class="d-flex align-start justify-center">
            <p class="text-h5 mb-1">Jeu en pause</p>
        </v-row>
        <v-row class="justify-center flex-column mt-5">
            <p class="text-subtitle-1 my-0 text-center">ZQSD pour se déplacer</p>
            <p class="text-subtitle-1 my-0 text-center">Espace pour sauter</p>
            <p class="text-subtitle-1 my-0 text-center">VerMaj pour se baisser</p>
            <p class="text-subtitle-1 my-0 text-center">Maj pour sprinter</p>
            <p class="text-subtitle-1 my-0 text-center">Entré pour activer les bruits</p>
            <p class="text-subtitle-1 my-1 text-center">Appuyez de nouveau sur 'P' pour revenir en jeu</p>
        </v-row>
        <v-row class="justify-center mt-5">
            <v-btn class="btn-restart mx-2" variant="outlined" @click="restart()">Recommencer la partie</v-btn>
        </v-row>
    </v-dialog> 
</template>

<script>
import { eventBus } from '../../../plugins/eventBus';

export default {
    name: 'AppProjetComponent',
    created(){
        // MAJ balles restantes
        eventBus.on('gameStop', (data) => {
            this.gameStop = data
        })
    },
    mounted(){ // Lance la fonction au chargement de la page
    
    },
    data () {
        return {
            gameStop: false,
            sound: false,
        }
    },
    methods:{
        restart(){
            this.gameStop = false
            eventBus.emit("restartGame")
        },
    },
    computed: {
    }

}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu{
    top: 0;
    left: 0;
    width: 60vw;
    height: 50vh;
    border-radius: 5px;
    background-color: rgb(218, 217, 217);
    position: fixed;
    z-index: 999;
}

.btn-restart:hover{
    color: aliceblue;
}
</style>