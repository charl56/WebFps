/*
    Inspired by https://github.com/felixgren
    From https://github.com/felixgren/three-arena
*/

import { entity } from "../entities/entity.js";
import * as THREE from 'three';
import { entity_enemy } from '../entities/entity-enemy.js';
import { kinematic_character_controller } from '../map/player_control/kinematic-character-controller.js';

export const web_socket = (() => {

    class WebSocketManager extends entity.Component {
        constructor(params) {
            super();
            this.params = params;
            this.params.box = new THREE.Vector3(1, 2.2, 1);
            this.scene = params.scene;
            this.socket = null;
            this.open = false;
            this.player = {};
            this.players = {};
            this.chatMessages = new Array();

            this.elapsedTime = 0;

            this.ui = {
                body: document.querySelector('body'),
                chatSection: document.getElementById('chatSection'),
                chatList: document.querySelector('.chatList'),
                crosshair: null,
            };
        }

        InitComponent() {
            const backendAddress = import.meta.env.VITE_BACK_WS || "ws://127.0.0.1:3000/" // WebSocket address
            this.socket = new WebSocket(backendAddress);
            
            this.socket.onopen = () => {
                this.handleConnect();
            };

            this.socket.onmessage = (event) => {
                const data = JSON.parse(event.data);
                switch (data.type) {
                    case 'playerPositions':
                        this.updateRemotePlayers(data.players);
                        break;
                    case 'player connect':
                        this.handlePlayerConnect(data);
                        break;
                    case 'player disconnect':
                        this.handlePlayerDisconnect(data.playerId);
                        break;
                    case 'chat message':
                        this.addChatMessage(data.username, data.message);
                        break;
                    case 'kill message':
                        if (data.shooter) {
                            if (this.player.id != data.victim) {
                                this.players[data.victim].entity.Broadcast({ topic: 'health.death' });
                            }
                            this.addKillMessage(data.shooter, data.victim);
                        }
                        if (this.player.id === data.victim) {
                            this.deathTrigger();
                        }
                        break;
                    case 'initPlayer':
                        this.player.id = data.playerId;
                        this.player.health = 100;
                        const players = Object.keys(data.players)
                        console.log("joueur dea la : " + players)
                        // Check all that isn't local player
                        for (let i = 0; i < data.playerCount; i++) {
                            if (players[i] !== this.player.id) {
                                this.initRemotePlayer(players[i], data.players[players[i]].skin);
                            }
                        }
                        break;
                    default:
                        console.error('Unknown message type:', data.type);
                }
            };

            this.socket.onclose = () => {
                console.log('WebSocket connection closed');
            };

            document.addEventListener('keyup', (event) => {
                if (event.key == 't') {
                    this.openForm();
                } else if (event.key == 'Enter') {
                    this.closeForm();
                    let inputText = document.getElementById('inputText');
                    if (inputText.value !== '') {
                        this.socket.send(JSON.stringify({
                            type: 'chat message',
                            username: this.player.id,
                            message: inputText.value
                        }));
                        inputText.value = '';
                    }
                }
            });

            this.addChatMessage('CR7', 'Welcome !');
            this.bar_ = document.getElementById('healthBar');
        }

        handleConnect() {
            const username = localStorage.getItem('username');
            const mapChoosen = localStorage.getItem('mapChoosen');
            const userSkin = localStorage.getItem('userSkin');

            this.socket.send(JSON.stringify({
                type: 'initUser',
                username: username,
                map: mapChoosen,
                skin: userSkin
            }));
        }

        handlePlayerConnect(data) {

            if (this.player.id === undefined) return;    // Because this function can be call before player init

            if (data.playerId !== this.player.id) {
                this.initRemotePlayer(data.playerId, data.skin);
            }
            this.addStatusMessage(data.playerId, 'join');
        }

        handlePlayerDisconnect(playerId) {
            this.players[playerId].entity.Destroy();
            delete this.players[playerId];
            this.addStatusMessage(playerId, 'leave');
        }

        async initRemotePlayer(playerID, skin) {
            const enemy = new entity.Entity();
            enemy.AddComponent("TargetCharacterController", new entity_enemy.TargetCharacterController(this.params, skin, playerID))
            enemy.AddComponent("KinematicCharacterControllerEnemy", new kinematic_character_controller.KinematicCharacterControllerEnemy(this.params));       // Set physical body to enemies
            this.Manager.Add(enemy, playerID);

            this.players[playerID] = {};
            this.players[playerID].entity = enemy;
            this.players[playerID].positionSync = new THREE.Vector3();
            this.players[playerID].lookDirection = new THREE.Vector4();
            this.players[playerID].health = 100;
            this.players[playerID].kills = 0;
            this.players[playerID].deaths = 0;
            this.players[playerID].isReady = true;
        }

        updateRemotePlayers(remotePlayers) {
            const positionSync = new THREE.Vector3();
            const lookDirection = new THREE.Vector4();
            const yRotationVector4 = new THREE.Vector4();

            for (let id in remotePlayers) {
                if (id !== this.player.id) {
                    if (this.players[id] && this.players[id].isReady) {
                        const remotePlayer = remotePlayers[id];
                        const localPlayer = this.players[id];

                        // Update position
                        if (!localPlayer.positionSync.equals(remotePlayer.position)) {
                            positionSync.fromArray(remotePlayer.position);
                            localPlayer.positionSync.copy(positionSync);
                            localPlayer.entity.SetPosition(positionSync);
                        }

                        // Update look direction
                        if (!localPlayer.lookDirection.equals(remotePlayer.direction)) {
                            lookDirection.fromArray(remotePlayer.direction);
                            localPlayer.lookDirection.copy(lookDirection);

                            const quaternion = new THREE.Quaternion(lookDirection.x, lookDirection.y, lookDirection.z, lookDirection.w);
                            const euler = new THREE.Euler().setFromQuaternion(quaternion, 'YXZ');
                            const yRotationQuaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), euler.y);

                            yRotationVector4.set(
                                yRotationQuaternion.x,
                                yRotationQuaternion.y,
                                yRotationQuaternion.z,
                                yRotationQuaternion.w
                            );
                            localPlayer.entity.SetQuaternion(yRotationVector4);
                        }

                        // Update kills and deaths
                        if (localPlayer.kills !== remotePlayer.kills) {
                            localPlayer.kills = remotePlayer.kills;
                        }
                        if (localPlayer.deaths !== remotePlayer.deaths) {
                            localPlayer.deaths = remotePlayer.deaths;
                        }
                    }
                } else {
                    const localPlayer = remotePlayers[id];
                    this.player.health = localPlayer.health > 0 ? localPlayer.health : 100;
                    this.player.kills = localPlayer.kills;
                    this.player.deaths = localPlayer.deaths;
                }
            }
        }


        deathTrigger() {
            this.Broadcast({ topic: 'health.death', });
            this.FindEntity('player').GetComponent('Player').OnDeath();
        }

        addChatMessage(username, message) {
            const usernameSpan = document.createElement('p');
            usernameSpan.style.color = '#0fff00';
            usernameSpan.textContent = username;

            const middleSpan = document.createElement('p');
            middleSpan.textContent = ': ';

            const messageSpan = document.createElement('p');
            messageSpan.style.color = '#ffffff';
            messageSpan.textContent = message;

            const content = document.createElement('div');
            content.classList.add('div-chatList');
            content.appendChild(usernameSpan);
            content.appendChild(middleSpan);
            content.appendChild(messageSpan);

            this.createMessage(content);
        }

        addKillMessage(shooter, killed) {
            const shooterSpan = document.createElement('p');
            shooterSpan.textContent = `${shooter}`;
            shooterSpan.style.color = '#00ff00';

            const middleSpan = document.createElement('p');
            middleSpan.textContent = ' ︻┳═一 ';

            const killedSpan = document.createElement('p');
            killedSpan.textContent = killed;
            killedSpan.style.color = '#ff0000';

            const content = document.createElement('div');
            content.classList.add('div-chatList');
            content.style.color = '#ffff00';
            content.style.fontWeight = '500';


            content.appendChild(shooterSpan);
            content.appendChild(middleSpan);
            content.appendChild(killedSpan);

            this.createMessage(content);
        }

        addStatusMessage(username, status) {
            const usernameSpan = document.createElement('p');
            usernameSpan.textContent = username;

            const statusSpan = document.createElement('p');
            statusSpan.textContent = status;

            const content = document.createElement('div');
            content.classList.add('div-chatList');
            switch (status) {
                case 'join':
                    content.style.color = '#00ff00';
                    statusSpan.textContent = ' has joined the game';
                    break;
                case 'leave':
                    content.style.color = '#ff0000';
                    statusSpan.textContent = ' has left the game ';
                    break;
                default:
                    statusSpan.textContent = ' unknown status event ';
                    break;
            }
            content.appendChild(usernameSpan);
            content.appendChild(statusSpan);

            this.createMessage(content);
        }

        createMessage(content) {
            this.ui.chatSection.classList.remove('hidden');

            const chatMessage = {
                endTime: this.elapsedTime + 7, // Message should disappear after 7 seconds
                ui: content,
            };

            this.chatMessages.push(chatMessage);
            const chatList = this.ui.chatList;
            chatList.appendChild(content);

            return this;
        }

        updateChatList() {
            const chatMessages = this.chatMessages;

            for (let i = chatMessages.length - 1; i >= 0; i--) {
                const message = chatMessages[i];

                if (this.elapsedTime >= message.endTime) {
                    chatMessages.splice(i, 1);

                    const chatList = this.ui.chatList;
                    chatList.removeChild(message.ui);
                }
            }

            if (chatMessages.length === 0) {
                this.ui.chatSection.classList.add('hidden');
            }

            return this;
        }

        openForm() {
            document.getElementById('inputForm').style.display = 'block';
            document.getElementById('inputText').focus();
        }

        closeForm() {
            document.getElementById('inputText').blur();
        }

        updateUi() {
            try {
                const playerHealth = this.player.health > 0 ? this.player.health : 0;
                const healthAsPercentage = playerHealth / 100;
                this.bar_.style.width = Math.floor(200 * healthAsPercentage) + 'px';
            } catch (error) {
                console.error('Error updating UI:', error);
            }
        }

        updateScoreTable() {
            // Collect scores
            const scores = [];
            scores.push({
                id: this.player.id,
                kills: this.player.kills || 0,
                deaths: this.player.deaths || 0
            });

            for (let id in this.players) {
                scores.push({
                    id: id,
                    kills: this.players[id].kills || 0,
                    deaths: this.players[id].deaths || 0
                });
            }

            // Sort scores by kills in descending order
            scores.sort((a, b) => b.kills - a.kills);

            // Create HTML content for the scores
            const scoreTable = document.getElementById('score-table');
            scoreTable.innerHTML = ''; // Clear previous content

            scores.forEach(player => {
                const playerRow = document.createElement('div');
                playerRow.classList.add('score-row');

                const playerId = document.createElement('span');
                playerId.classList.add('player-id');
                playerId.textContent = player.id;

                const playerKills = document.createElement('span');
                playerKills.classList.add('player-kills');
                playerKills.textContent = `Kills: ${player.kills}`;

                const playerDeaths = document.createElement('span');
                playerDeaths.classList.add('player-deaths');
                playerDeaths.textContent = `Deaths: ${player.deaths}`;

                playerRow.appendChild(playerId);
                playerRow.appendChild(playerKills);
                playerRow.appendChild(playerDeaths);

                scoreTable.appendChild(playerRow);
            });
        }

        Update(timeElapsedS) {
            this.elapsedTime += timeElapsedS;
            this.updateChatList();
            this.updateUi();
            this.updateScoreTable();
            
            // console.log(Object.keys(this.Parent.parent_.entities_))
            // console.log(this.Parent.parent_.entities_)
        }

    }
    return {
        WebSocketManager: WebSocketManager,
    };
})();
