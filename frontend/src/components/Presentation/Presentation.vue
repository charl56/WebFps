<template>
    <div class="d-flex flex-column align-center presentation-div">
        <CustomeParticles />
        <p class="presentation-title">SIUUU</p>
        <form @submit.prevent="login" v-if="!errorServer"
            class="d-flex flex-column justify-space-around py-10 h-screen w-25">
            <div>
                <label for="username">Pseudo :</label>
                <input type="text" id="username" v-model="username" class="form-control" required>

                <p class="mt-5">Choix de la map</p>
                <div class="btn-map w-100">
                    <div v-for="(map, index) in maps" :key="index" class="btn-map-input"
                        :class="{ 'map-available': map.availability, 'map-not-available': !map.availability || map.nbplayer == map.quantity, 'selected': mapChoosen && mapChoosen.name === map.name }">
                        <button type="button" :disabled="!map.availability || map.nbplayer == map.quantity"
                            @click="selectMap(map)">
                            {{ map.name }}
                        </button>
                        <p>{{ map.nbplayer }} / {{ map.quantity }}</p>
                    </div>
                </div>
                <div v-if="errorMessage">
                    <p class="error-message">{{ errorMessage }}</p>
                </div>
            </div>
            <button type="submit" class="btn btn-primary my-5">Jouer</button>
        </form>
        <div v-if="errorServer">
            <p class="error-message">{{ errorMessage }}</p>
        </div>
    </div>
</template>

<script>
import { eventBus } from '../../plugins/eventBus';
import { sendRequest } from '../../utils/api';
import CustomeParticles from '../Particles/Particles.vue';

export default {
    name: 'AppPresentation',
    components: {
        CustomeParticles,
    },
    data() {
        return {
            username: '',
            error: false,
            errorMessage: '',
            errorServer: false,
            maps: [],
            mapChoosen: null,
        }
    },
    mounted() {
        this.checkMaps();
    },
    methods: {
        async login() {
            this.error = false;
            this.errorServer = false;
            this.errorMessage = '';

            if (!this.mapChoosen) {
                this.error = true;
                this.errorMessage = 'Please select a map.';
                return;
            }

            const response = await sendRequest('POST', 'login', { username: this.username, map: this.mapChoosen.name });
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
                this.errorServer = true;
                this.errorMessage = 'Multi not available.';
            }
        },  
        selectMap(map) {
            this.mapChoosen = map;
        }
    },
}
</script>

<style scoped>
.presentation-div {
    position: relative;
    z-index: 1;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    color: white;
}

.presentation-title {
    font-size: 50px;
    font-family: system-ui;
}

.btn-primary {
    font-size: 30px;
    cursor: pointer;
    border: 1px solid rgba(224, 222, 222, 0.8);
    border-radius: 50px;
    animation: blink-animation 1.5s infinite;
}

@keyframes blink-animation {
    0% {
        opacity: 1;
    }

    30% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}


.btn-primary:hover {
    background-color: rgba(255, 255, 255, 0.123);
    animation: size-animation 1.5s infinite;
}
@keyframes size-animation {
    0% {
        scale: 1;
    }

    30% {
        scale: 1.05;
    }

    100% {
        scale: 1;
    }
}

.form-control {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
}


.btn-map {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
}

.btn-map-input {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease-in-out;
}

.btn-map-input button {
    background-color: transparent;
    border: none;
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
}

.map-available button {
    background-color: #6fad71;
}

.map-not-available button {
    background-color: #d8515e;
}

.map-not-available button:hover {
    cursor: not-allowed;
}

.map-available:hover {
    transform: scale(1.05);
}


.map-not-available:hover {
    transform: scale(1);
}

.selected button {
    color: white;
    border: 1px solid white;
    background-color: #6cc46f;
}

.error-message {
    color: #f44336;
    font-size: 14px;
    margin-top: 10px;
}


.img-movement {
    width: 200px;
}
</style>
