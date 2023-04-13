<template>
  <div id="game">
        <Titleheader />
        <div id="game-screen" v-if="in_game">
            <PrimaryScreen :words="words" :board="board"/>
            <SecondaryScreen />
        </div>
        <div id="loading" v-else>
            Finding game 
            <span class="dot">.</span> 
            <span class="dot">.</span> 
            <span class="dot">.</span> 
          {{ current_players }}/4
        </div>
    </div>

</template>

<script>
import Titleheader from '../components/Titleheader.vue';
import PrimaryScreen from '../components/PrimaryScreen.vue';
import SecondaryScreen from '../components/SecondaryScreen.vue';
import io from "socket.io-client"
import { v4 as uuidv4 } from 'uuid';

export default {
  components: {
    Titleheader,
    PrimaryScreen,
    SecondaryScreen
  },
  data() {
    return {
      in_game: false,
      current_players: 0,
      playerId: "",
      words: {},
      board: [],
    };
  },
  created() {
    this.socket = io("http://localhost:3000");

    this.socket.on("connect", () => {
      console.log("connected to server");
      this.playerId = uuidv4();
      this.socket.emit("connect_player", this.playerId);
    });

    this.socket.on("disconnect", () => {
      console.log("disconnected from server");
    });

    this.socket.on("update_player_count", (players) => {
      this.current_players = players;
    });

    this.socket.on("start_game", (board, words) => {
      this.in_game = true;
      this.words = words;
      this.board = board;
    });
  },
};

</script>

<style>
  #game {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #game-screen {
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-height: 0;
  }

  #loading {
    margin-top: 340px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
  }

  .dot {
    animation-name: pulse;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
  }

  .dot:nth-child(1) {
    animation-delay: 0.0s;
  }
  
  .dot:nth-child(2) {
    animation-delay: 0.5s;
  }

  .dot:nth-child(3) {
    animation-delay: 1.0s;
  }

  @keyframes pulse {
    50% {
      opacity: 0;
    }
  }
</style>