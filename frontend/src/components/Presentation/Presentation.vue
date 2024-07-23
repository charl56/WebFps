<template>
    <div class="d-flex flex-column align-center presentation-div">
        <!-- <CustomeParticles /> -->
        <div class="screen-small mt-10">
            <p>Le jeu est disponible sur PC</p>
        </div>
        <div class="screen-large">
            <div class="presentation-title d-flex flex-column align-center">
                <p class="presentation-title__p">SIUUU</p>
            </div>
            <div class="presentation-form">

                <form @submit.prevent="login" v-if="!errorServer"
                    class="d-flex flex-column justify-space-between align-center h-100">
                    <div class="presentation-form-maps d-flex justify-space-around w-100">
                        <div v-for="(map, index) in maps" :key="index" class="d-flex align-center justify-center"
                            :class="{ 'map-available': map.availability, 'map-not-available': !map.availability || map.nbplayer == map.quantity, 'map-selected': mapChoosen && mapChoosen.name === map.name }">
                            <p @click="changeMap(map)">{{ map.name }}</p>
                            <!-- <p>{{ map.nbplayer }} / {{ map.quantity }}</p> -->

                        </div>
                    </div>

                    <div class="presentation-form-pseudo d-flex align-center justify-center">
                        <input type="text" id="username" v-model="username" maxlength="20" required
                            placeholder="Entrer un pseudo" />
                    </div>

                    <div class="presentation-form-skins d-flex">
                        <div class="presentation-form-skins-title d-flex align-center justify-end">
                            <p v-if="mapChoosen != null">Choix du skin</p>
                        </div>
                        <div v-if="mapChoosen != null"
                            class="presentation-form-skins-btns d-flex align-center justify-center">
                            <div v-for="(skin, index) in skinNames" :key="index" class="form-check">
                                <input type="radio" :id="'skin' + index" :value="skin.name" v-model="selectedSkin"
                                    class="form-check-input" :disabled="!skin.available" />
                                <label :for="'skin' + index" class="form-check-label">{{ setRealName(skin.name)
                                    }}</label>
                            </div>
                        </div>
                    </div>

                    <div class="presentation-play">
                        <p v-if="errorMessage || errorServer" class="error-message">{{ errorMessage }}</p>
                        <button v-else type="submit" class="btn btn-primary my-5">Jouer</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { eventBus } from '../../plugins/eventBus';
import { sendRequest } from '../../utils/api';
import CustomeParticles from '../Particles/Particles.vue';
import skins from '../../../static/datas/targetItems.js';

export default {
    name: 'AppPresentation',
    components: { CustomeParticles },
    data() {
        return {
            username: '',
            error: false,
            errorMessage: '',
            errorServer: false,
            maps: [],
            mapChoosen: null,
            skinNames: [],
            selectedSkin: ''
        }
    },
    mounted() {
        this.fetchMaps();
        this.username = localStorage.getItem('username') || '';
        this.selectedSkin = localStorage.getItem('userSkin') || '';
    },
    methods: {
        async login() {
            this.clearErrors();

            if (!this.mapChoosen) {
                this.setError('Il faut choisir une map');
                return;
            }
            if (this.selectedSkin == '') {
                this.setError('Il faut choisir un skin');
                return;
            }

            const response = await sendRequest('POST', 'login', {
                username: this.username,
                map: this.mapChoosen.name,
                skin: this.selectedSkin
            });

            if (response.status === "success") {
                this.storeUserData();
                eventBus.emit("startGame");
                localStorage.setItem('username', this.username);
                localStorage.setItem('mapChoosen', this.mapChoosen.name);
                localStorage.setItem('userSkin', this.selectedSkin);
            } else {
                this.setError(response.data.data.message);
            }
        },
        async fetchMaps() {
            const response = await sendRequest('GET', 'maps');
            if (response.status === "success") {
                this.maps = response.data.data;
            } else {
                this.setServerError('Multi not available.');
            }
        },
        async changeMap(map) {
            this.clearErrors();
            this.mapChoosen = map;
            const response = await sendRequest('GET', `maps/${map.name}`);
            if (response.status === "success") {
                this.updateSkinNames(response.data.data.users);
            } else {
                this.setServerError('Skins not found.');
            }
        },
        updateSkinNames(users) {
            const usedSkins = new Set(users.map(user => user.skin));
            this.skinNames = Object.keys(skins).map(skin => ({
                name: skin,
                available: !usedSkins.has(skin)
            }));
        },
        setRealName(name) {
            return name = name.split('_').join(' ');
        },
        storeUserData() {
            localStorage.setItem('mapChoosen', this.mapChoosen.name);
            localStorage.setItem('userSkin', this.selectedSkin);
        },
        clearErrors() {
            this.error = false;
            this.errorServer = false;
            this.errorMessage = '';
        },
        setError(message) {
            this.error = true;
            this.errorMessage = message;
        },
        setServerError(message) {
            this.errorServer = true;
            this.errorMessage = message;
        }
    }
}
</script>


<style scoped>
.presentation-div {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: var(--background-color);
    color: var(--text-color) !important;
    font-family: JockeyOne-Regular;
}



.screen-large {
    display: block;
    width: 100%;
    display: contents;
}

.screen-small {
    display: none;

    p {
        font-size: 3vh;
    }
}

@media screen and (max-width: 850px) {
    .screen-large {
        display: none;
    }

    .screen-small {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
}



/* Titre */
.presentation-title {
    height: 125px;
    font-size: 80px;

    p:hover {
        text-decoration: none;
    }
}

/* Form */
.presentation-form {
    height: 100%;
    width: 100%;
}

/* Maps choose */
.presentation-form-maps {
    height: 120px;

    div:hover {
        cursor: pointer;
    }

    p {
        color: var(--text-color);
        font-size: 50px;
    }
}

.map-not-available {
    p {
        color: var(--text-color-danger);
    }
}

.map-not-available:hover {
    p {
        scale: 1;
        text-decoration: none;
        cursor: not-allowed;
    }
}

.map-selected {
    p {
        text-decoration: underline
    }
}

/* Pseudo */
.presentation-form-pseudo {
    input {
        width: 400px;
        height: 55px;
        background-color: #cccccc;
        color: var(--text-color);
        font-size: 25px;
        padding: 5px 10px;
        border-radius: 5px;
    }

    input:focus {
        background-color: #D9D9D9;
        outline: none;
    }
}

/* Skin */
.presentation-form-skins {
    height: 120px;
    width: 100%;
}

.presentation-form-skins-title {
    width: 20%;
    padding: 10px 30px;

    p {
        font-size: 25px;
    }
}

.presentation-form-skins-btns {
    width: 80%;

    div {
        width: 20%;
        padding: 10px 30px;
    }
}

/* Play btn */
.presentation-play {
    height: 120px;

    button {
        color: var(--text-color);
        font-size: 50px;
    }
}




/* CSS Components */
p:hover,
button:hover {
    text-decoration: underline;
    scale: 1.05;
}


/* .presentation-title {
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
        transform: scale(1);
    }

    30% {
        transform: scale(1.05);
    }

    100% {
        transform: scale(1);
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
    font-size: 15px;
    margin-top: 10px;
} */
</style>
