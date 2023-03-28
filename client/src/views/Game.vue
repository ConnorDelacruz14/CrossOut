<template>
  <Titleheader />
  <div id="game-screen">
    <PrimaryScreen />
    <SecondaryScreen />
  </div>
</template>

<script>
import Titleheader from '../components/Titleheader.vue';
import PrimaryScreen from '../components/PrimaryScreen.vue';
import SecondaryScreen from '../components/SecondaryScreen.vue';

export default {
  components: { Titleheader,  PrimaryScreen, SecondaryScreen},
  
}
</script>

<style>
  #game-screen {
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-height: 0;
  }
</style>