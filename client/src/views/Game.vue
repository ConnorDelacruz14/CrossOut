<template>
  <div id="game">
        <Titleheader />
        <div id="game-screen" v-if="in_game">
            <PrimaryScreen />
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

export default {
  components: { Titleheader,  PrimaryScreen, SecondaryScreen},
  data() {
    return {
      in_game: false,
      current_players: 0,
    }
  }
}
</script>

<style>
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