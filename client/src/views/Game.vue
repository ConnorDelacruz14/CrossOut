<template>
  <Titleheader />
  <PrimaryScreen />
  <SecondaryScreen />
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
</style>