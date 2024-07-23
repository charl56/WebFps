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

                <form @submit.prevent="login" class="d-flex flex-column align-center h-100">
                    <div class="presentation-form-maps d-flex justify-space-around w-100">
                        <div v-for="(map, index) in maps" :key="index" class="d-flex align-center justify-center"
                            :class="{ 'map-available': map.availability, 'map-not-available': !map.availability || map.nbplayer == map.quantity, 'map-selected': mapChoosen && mapChoosen.name === map.name }">
                            <div>
                                <p @click="changeMap(map)">{{ map.name }}</p>
                                <p>{{ map.nbplayer }} joueur(s) sur {{ map.quantity }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="presentation-form-content"></div>

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

                    <div class="presentation-form-play d-flex align-center justify-center">
                        <p v-if="errorMessage || errorServer" class="error-message">{{ errorMessage }}</p>
                        <p v-else-if="mapIsFull" class="error-message">La partie est pleine</p>
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
            selectedSkin: '',
            mapIsFull: false
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
                this.setServerError('Aucune map disponible, veuillez réessayer plus tard');
            }
        },
        async changeMap(map) {
            this.clearErrors();
            this.mapChoosen = map;

            const nbPlayer = this.maps.find(m => m.id === map.id).nbplayer
            if (nbPlayer == map.quantity) {
                this.mapIsFull = true
            }

            const response = await sendRequest('GET', `maps/${map.name}`);
            if (response.status === "success") {
                this.updateSkinNames(response.data.data.users);
            } else {
                this.setServerError('Impossible de récupérer les skins, veuillez réessayer plus tard');
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
            this.mapIsFull = false
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
    height: 120px;
    font-size: 80px;

    p:hover {
        text-decoration: none;
        scale: 1;
    }
}

/* Form */
.presentation-form {
    height: 100%;
    width: 100%;
}

/* Maps choose */
.presentation-form-maps {
    height: 10vh;

    div:hover {
        p:first-of-type {
            scale: 1.03;
            cursor: pointer;
        }

        p:first-of-type::before {
            width: 100%;
        }
    }

    p:first-of-type {
        color: var(--text-color);
        font-size: 50px;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            width: 0;
            height: 5px;
            bottom: 5px;
            left: 0;
            background-color: var(--text-color);
            transition: width 0.3s ease-in-out;
        }
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
    p:first-of-type {
        text-decoration: underline
    }
}

/* Pseudo */
.presentation-form-pseudo {
    height: 10vh;
    bottom: 20vh;
    position: absolute;

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
    height: 10vh;
    width: 100%;
    bottom: 10vh;
    position: absolute;
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
.presentation-form-play {
    height: 10vh;
    bottom: 0;
    position: absolute;

    button {
        color: var(--text-color);
        font-size: 50px;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            width: 0;
            height: 5px;
            bottom: 5px;
            left: 0;
            background-color: var(--text-color);
            transition: width 0.3s ease-in-out;
        }

        &:hover::before {
            width: 100%;
        }
    }
}

.presentation-form-play:hover {
    scale: 1.03;
}


/* Error messages */
.error-message {
    color: #BA4949;
    font-size: 25px;
    text-decoration: underline;
}

/* CSS Components */
input:hover {
    box-shadow: 0 0 5px 0px rgba(161, 161, 161, 0.5);
}
</style>
