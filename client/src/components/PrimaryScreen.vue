<template>
    <div id="primary-screen">
        <Board :board="board"/>
        <div id="info-container">
            <div class="player-container">
                <div class="player-name player-item">{{ name }}</div>
                <div class="score-container player-item">Score: {{ score }}</div>
            </div>
            <div class="definitions">
                Definitions:
                <ol style="margin-top: 0;">
                    <li v-for="(definition, index) in words" v-bind:key="index">{{ definition }}</li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script>
import Board from './Board.vue';
export default {
    components: {Board},
    props: {
        words: {
            type: Object,
            required: true
        },
        board: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            name: "You",
            score: 0,
        }
    },
}
</script>

<style>
    #primary-screen {
        margin: 150px 20px;
    }

    #board {
        width: 640px;
        height: 400px;
        left: 45px;
        top: 0px;
        border: 1px solid #000000;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    #info-container {
        display: flex;
        flex-direction: row;
    }

    .player-container {
        font-size: 30px;
    }

    .player-name {
        border: 1px solid #000000;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    .player-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 229px;
        height: 65px;
        margin: 10px 0px;
    }

    .definitions {
        margin: 10px 80px;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 22px;
        display: flex;
        flex-direction: column;
    }
</style>