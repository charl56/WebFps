<template>
    <div>
        <!-- Affichage en bas a gauche -->
        <div class="round d-flex" id="div-round">
            <div v-if="round.length >= 1" class="round-img">
                <v-img cover :src="firstDigitImg"></v-img>
            </div>
            <div v-if="round.length >= 10" class="round-img">
                <v-img cover :src="secondDigitImg"></v-img>
            </div>     
        </div>
        <!-- Affichage manche au milieu au changement -->
        <div class="round-change d-flex align-center justify-center">
            <div v-if="round.length >= 1" class="round-change-img">
                <v-img cover :src="firstDigitImg"></v-img>
            </div>
            <div v-if="round.length >= 10" class="round-change-img">
                <v-img cover :src="secondDigitImg"></v-img>
            </div>  
        </div>
    </div>   
</template>

<script>

import { eventBus } from '../../../plugins/eventBus'

export default {
    name: 'AppProjetComponent',
    created(){
        // MAJ round number
        eventBus.on('roundNumber', (data) => {
            this.round = data.toString()
            // Affiche le numero de la manche 
            this.setRoundDigit()
            setTimeout(() => {
                document.getElementsByClassName("round-change")[0].style.visibility = "hidden";
            }, 1000);
        })
        /// MAJ round onChange
        eventBus.on('onChangeRound', () => {
            document.getElementsByClassName("round-change")[0].style.visibility = "visible";
        })
    }
    ,
    props: {
    },
    mounted(){ // Lance la fonction au chargement de la page
    },
    data () {
        return {
            round: "",
            firstDigit: "",         // Premier chiffre
            firstDigitImg: null,    // Image premier chiffre
            secondDigit: "",
            secondDigitImg: null,
        }
    },
    methods:{
        setRoundDigit(){
            // Si 1 ou 2 chiffre dans le nombre de la manche
            if(this.round.length == 1){
                if(import.meta.env.DEV){
                    this.firstDigitImg = new URL('../../../../static/Game/Round_'+this.round[0]+'.png', import.meta.url).href
                } else {
                    this.firstDigitImg = './static/Game/Round_'+this.round[0]+'.png'
                }
            } else {
                if(import.meta.env.DEV){
                    this.firstDigitImg = new URL('../../../../static/Game/Round_'+this.round[0]+'.png', import.meta.url).href
                    this.secondDigitImg = new URL('../../../../static/Game/Round_'+this.round[1]+'.png', import.meta.url).href
                } else {
                    this.firstDigitImg = './static/Game/Round_'+this.round[0]+'.png'
                    this.secondDigitImg = './static/Game/Round_'+this.round[1]+'.png'
                }
            }            
        }
    },
    computed: {
    }

}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.round{           
    left: 0;
    bottom: 0;
    position: fixed;
}.round-change{
    left: 0;
    bottom: 0;
    position: fixed;
    height: 100%;
    width: 100%;
}

.round-img{
    width: 3vw;
}.round-change-img{
    width: 6vw;
    animation-name: opac;
    animation-iteration-count: infinite;
    transition: none;
    animation-duration: 1s;
}@keyframes opac {
  0%   { opacity:1; }
  40%   {opacity:0; }
  100% { opacity:1; }
}



</style>