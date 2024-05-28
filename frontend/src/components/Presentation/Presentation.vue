<template>
    <div class="div-presentation">

        <div class="mt-10">
            <p class="my-1">ZQSD pour se déplacer</p>
            <p class="my-1">Espace pour sauter</p>
            <p class="my-1">VerMaj pour se baisser</p>
            <p class="my-1">Maj pour sprinter</p>
        </div>
        <div class="mt-10">
            <form @submit.prevent="login">
                <label for="username">Nom d'utilisateur:</label>
                <input type="text" id="username" v-model="username" class="form-control" required>
                <p>Choix de la map</p>
                <div class="radio-btn-map">
                    <div v-for="(map, index) in maps" :key="index" class="radio-btn-input"
                        :class="{ 'map-available': map.availability, 'map-not-available': !map.availability     || map.nbplayer == map.quantity }">
                        <input type="radio" :id="'map-' + index" :value="map" v-model="mapChoosen" :disabled="!map.availability || map.nbplayer == map.quantity" required>
                        <label :for="'map-' + index">{{ map.name }}</label>
                        <p>{{ map.nbplayer }} / {{ map.quantity }}</p>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary my-5">Se connecter</button>
            </form>
            <div v-if="error">
                <p class="error-message">{{ errorMessage }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { eventBus } from '../../plugins/eventBus';
import { sendRequest } from '../../utils/api';

export default {
    name: 'AppPresentation',
    data() {
        return {
            username: '',
            error: false,
            errorMessage: '',
            maps: [],
            mapChoosen: null
        }
    },
    mounted() {
        this.checkMaps();
    },
    methods: {
        async login() {
            this.error = false;
            this.errorMessage = '';

            if (!this.mapChoosen) {
                this.error = true;
                this.errorMessage = 'Please select a map.';
                return;
            }

            const response = await sendRequest('POST', 'login', { username: this.username, map: this.mapChoosen.name});
            if (response.status == "success") {
                localStorage.setItem('mapChoosen', this.mapChoosen.name)
                eventBus.emit("startGame")
            } else {
                this.error = true;
                this.errorMessage = response.data.data.message
            }
        },
        async checkMaps() {
            const response = await sendRequest('GET', 'maps');
            if (response.status == "success") {
                this.maps = response.data.data;
            } else {
                this.error = true;
                this.errorMessage = response.data.data.message
            }
        }
    },
}
</script>

<style scoped>
.div-presentation {
    font-family: 'Roboto', sans-serif;
    width: 100%;
    height: 100%;
    margin: auto;
    padding: 50px;
    background: rgb(239 239 239 / 80%);
    color: #000000;
}

.btn-primary {
    background-color: #6fad71;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.btn-primary:hover {
    scale: 1.03;
}

.form-control {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(224, 222, 222, 0.8);
}

.form-control:focus {
    border: 1px solid rgba(187, 186, 186, 0.8);
}

.radio-btn-map {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 20px;
}

.radio-btn-input {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 180px;
    padding: 10px;
    border-radius: 5px;
    margin: 5px;
    transition: transform 0.2s ease-in-out;
}

.radio-btn-input:hover {
    transform: scale(1.05);
}

.map-available {
    background-color: #6fad71;
}

.map-not-available {
    background-color: #d8515e;
}

.map-not-available:hover {
    transform: scale(1);
}

.error-message {
    color: #f44336;
    font-size: 14px;
    margin-top: 10px;
}
</style>