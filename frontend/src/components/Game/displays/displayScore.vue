<template>
    <div v-if="!playerDeath" class="score d-flex justify-end pb-5 mb-15">
        <p id="pChangeMoney" class="text-h6 p-score pr-1 py-0">{{ changeMoney }}</p>
        <p class="text-h6 p-score pr-6 py-0 font-weight-bold">{{ money }}</p>
    </div>   
    <div v-else class="death-score mt-7 d-flex align-center justify-start flex-column">
        <div class="my-5">
            <p class="p-death-score mx-6 px-2 py-0">Vous êtes mort</p>
            <p class="p-death-score mx-6 px-2 py-0" v-if="score <= 1">Zombie tué : {{ score }}</p>
            <p class="p-death-score mx-6 px-2 py-0" v-else>Zombies tués : {{ score }}</p>
        </div>
        <div class="my-5">
            <v-btn class="btn-restart mx-2" variant="outlined" @click="restart()">Recommencer la partie</v-btn>
        </div>
    </div>  
</template>

<script>
import { eventBus } from '../../../plugins/eventBus';


export default {
    name: 'AppProjetComponent',
    created(){
        eventBus.on("playerDeath", () => {
            this.playerDeath = true
        })

        eventBus.on("watchMoney", (data) => {
            this.changeMoney = data
        })
    }
    ,
    props: {
        score: Number,
        money: Number,
    },
    watch: {
        money: function(newVal, oldVal){
            // Si deja animation, on l'arrete pour mettre la dernière
            if(this.changeTimeout != null){
                document.getElementById("pChangeMoney").classList.remove("active-change")
                clearTimeout(this.changeTimeout)
            }
            // Depend si gain ou perte
            if(newVal > oldVal){
                this.changeMoney = "+ " + (newVal - oldVal)
            } else if(newVal < oldVal){
                this.changeMoney = "- " + (oldVal - newVal)
            }         
            // Active animation
            document.getElementById("pChangeMoney").classList.add("active-change")
            // La desactive apres 400ms
            this.changeTimeout = setTimeout(() => {
                this.changeMoney = ""
                document.getElementById("pChangeMoney").classList.remove("active-change")
                this.changeTimeout = null
            }, 400);
        }
    },  
    mounted(){ // Lance la fonction au chargement de la page
    },
    data () {
        return {
            playerDeath: false,
            changeMoney: '',
            changeTimeout: null,
        }
    },
    methods:{
        restart(){
            eventBus.emit("restartGame")
        },
    },
    computed: {
    }

}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.score{
    bottom: 0;
    width: 100%;
}.death-score{
    right: 0;
    bottom: 0;
    position: fixed;
    height: 90%;
    width: 100%;
    cursor: default !important;
}
.p-score{
    color: white;
}.p-death-score{
    border-radius: 10px;
    font-size: 200%;
    color: white;
    animation-name: changeSize;
    animation-iteration-count: infinite;
    transition: none;
    animation-duration: 1.5s;
}
@keyframes changeSize {
  0%   { transform: scale(1); }
  50%   { transform: scale(1.03); }
  100% { transform: scale(1); }
}

.active-change{
    animation-name: moveDown;
    animation-iteration-count: infinite;
    animation-duration: 0.4s;
}@keyframes moveDown {
    0% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
}

/* Btn restart */
.btn-restart{
    color: aliceblue;
}
.btn-restart:hover{
    color: aliceblue;
}

</style>