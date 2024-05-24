<template>
    <!-- Affichage au centre, en dessous du milieu -->
    <div v-if="intersect" class="weapon-buy d-flex justify-center align-center mt-10 pt-10">
        <p class="text-subtitle-1 weapon-buy-p">Appuyer sur F pour acheter {{ type }} {{ weaponOnWall }} : {{ price }} points</p>
    </div>
</template>

<script>

import { eventBus } from '../../../plugins/eventBus'

export default {
    name: 'AppProjetComponent',
    created(){
        // MAJ round number
        eventBus.on('inAreaWeaponWall', (data) => {
            this.intersect = true
            this.weaponOnWall = data.weapon
            this.price = data.price
            this.type = data.type
            setTimeout(() => {
                this.intersect = false
            }, 250);
        })
    }
    ,
    props: {
    },
    mounted(){ // Lance la fonction au chargement de la page
    },
    data () {
        return {
            weaponOnWall: "",       // L'arme sur le mur
            price: "",              // Prix
            intersect: false,       // Si dans la zone de l'arme
        }
    },
    methods:{
    },
    computed: {
    }

}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weapon-buy{           
    left: 0;
    top: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    color: white
}


.weapon-buy-p{
    animation-name: opac;
    animation-iteration-count: infinite;
    transition: none;
    animation-duration: 1s;
}@keyframes opac {
  0%   { opacity:1; }
  70%   {opacity:0; }
  100% { opacity:1; }
}



</style>