<script setup>
const sight = new URL('../../assets/Icons/crosshair.png', import.meta.url).href
const movementLogo = new URL('../../assets/Icons/movementLogo.png', import.meta.url).href
</script>
<template>
    <div class="div-display d-flex align-center justify-center">
        <div id="sight" class="">
            <v-img class="sight-img" :src="sight"></v-img>
        </div>
        <div id="div-msg-spawn">
            <p class="msg-spawn">Press 'space' to spawn</p>
            <v-img class="msg-spawn" :src="movementLogo"></v-img>

        </div>
        <div id="score-table">

        </div>
        <div id="top-left" class="div-quart">
            <p id="ping-p">Ping</p>
        </div>
        <div id="top-right" class="div-quart"></div>
        <div id="bottom-left" class="div-quart">
            <section id="chatSection" class="chatContainer hidden">
                <div>
                    <ul class="chatList"></ul>
                </div>
            </section>
            <!-- Chat input -->
            <div id="inputForm">
                <input class="chatList" id="inputText" placeholder="Use 'T' to type message.." maxlength="50" />
            </div>
        </div>
        <div id="bottom-right" class="div-quart d-flex">
            <div id="healthBar">
            </div>
            <div id="bullets" class="d-flex align-center justify-center flex-column">
                <div class="">
                    <p id="weapon-name">Weapon name</p>
                </div>
                <div class="d-flex align-center justify-center">
                    <div class="d-flex">
                        <v-progress-linear id="progress-linear-bullet" class="progress-linear mx-2"
                            model-value="67"></v-progress-linear>
                    </div>
                    <div class="d-flex">
                        <p id="bullet-in-magazine">15</p>
                        <p>/</p>
                        <p id="bullet-all-magazines">60</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {

    },
    created() {

    },
    mounted() {

    },
    data() {
        return {
        }
    },
};
</script>


<style>
/* Div principal */
.div-display {
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: 10;
}

/* Crosshair */
#sight {
    position: absolute;
    visibility: hidden;
}

.sight-img {
    height: 40px;
    width: 40px;
}

/* Score table */
#score-table {
    width: 400px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    top: 0;
    position: absolute;
    font-family: cursive;
}

.score-row {
    display: flex;
    justify-content: space-between;
    padding: 3px;
    border-bottom: 1px solid #eee;
}

.player-id {
    /* flex: 1; */
    width: 200px;
}

.player-kills,
.player-deaths {
    width: 100px;
    /* flex: 1; */
    text-align: right;
}


/* Parts */
.div-quart {
    position: absolute;
    height: 50vh;
    width: 50vw;
}

#top-left {
    top: 0;
    left: 0;
    padding: 45px 7px;
    p {
        font-size: 15px;
    }
}

#top-right {
    top: 0;
    right: 0;
}

#bottom-left {
    bottom: 0;
    left: 0;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: column;
}

#bottom-right {
    bottom: 0;
    right: 0;
}


.chatList {
    font-family: cursive !important;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    font-size: 18px;
    background-color: #59595954;
    border-top-right-radius: 10px;
}
#inputText{
    padding: 5px 10px;
}
#chatSection{
    .div-chatList{
        padding: 5px 10px;
    }
}

.div-chatList {
    display: flex;
}

#healthBar {
    position: absolute;
    bottom: 15px;
    right: 200px;
    height: 20px;
    background-color: #35c334;
}


/* Bullets */
#bullets {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 100px;
    width: 150px;
    margin: 0px 20px;
    color: white;
    font-size: 2vw;
    font-weight: lighter;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    visibility: hidden;
    transform: skew(335deg, 5deg);
}

.progress-linear {
    height: 30px !important;
    width: 30px !important;
    rotate: -90deg;
    transform: translateX(0) !important;
    right: 0 !important;
    left: 0 !important;
}

.msg-spawn {
    font-size: larger;
    font-weight: 700;
    animation: blink-animation 2s infinite;
}

@keyframes blink-animation {
    0% {
        opacity: 1;
    }

    25% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>
