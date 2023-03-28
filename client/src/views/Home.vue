<template>
    <Titleheader/>
    <div id="images-container">
        <img class="background_cross" src="../assets/background_cross_1.png" width="100">
        <img class="background_cross" src="../assets/background_cross_2.png" width="100">
        <img class="background_cross" src="../assets/background_cross_4.png" width="100">
        <img class="background_cross" src="../assets/background_cross_1.png" width="100">
        <img class="background_cross" src="../assets/background_cross_3.png" width="100">
        <img class="background_cross" src="../assets/background_cross_5.png" width="100">
        <img class="background_cross" src="../assets/background_cross_2.png" width="100">
        <img class="background_cross" src="../assets/background_cross_5.png" width="100">
        <img class="background_cross" src="../assets/background_cross_1.png" width="100">
        <img class="background_cross" src="../assets/background_cross_4.png" width="100">
    </div>
    <div id="buttons-container">
        <router-link to="/game">
            <button class="navigation-btn pressable">
            <h1>Play now</h1>
            </button>
        </router-link>
        <router-link to="/custom">
            <button class="navigation-btn pressable">
            <h1>Join custom</h1>
            </button>
        </router-link>
    </div>
  </template>
  
  <script>
  import Titleheader from '../components/Titleheader.vue';
  export default {
    components: { Titleheader },
    data() {
      return {
        images: null,
      }
    },
  
    mounted() {
      this.images = Array.from(document.querySelectorAll('#images-container .background_cross'));
      shuffleArray(this.images);
      this.images.forEach(function(img, index) {
        const randomX = Math.floor(Math.random() * window.innerWidth);
        const randomY = Math.floor(Math.random() * window.innerHeight);
        img.style.transform = `translate(${randomX}px, ${randomY}px)`;
        img.style.animationDelay = `${index}s`; // set delay based on index
      });
    }
  }
  
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  </script>
  
  <style>
    #login-btn {
      width: 154px;
      height: 65px;
      font-family: inherit;
      margin-bottom: 10px;
      margin-right: 40px;
      background-color: #D9D9D9;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      transition: 0.5s;
      border-width: 0.5px;
    }
  
    #buttons-container {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }
  
    .navigation-btn {
      z-index: 4;
      font-family: 'Courier Prime', monospace;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      width: 339px;
      height: 154px;
      background-color: #D9D9D9;
      border: none;
      transition: 0.5s;
    }
  
    .pressable:hover{
      cursor: pointer;
      transform: scale(1.1);
    }
  
    @keyframes fall {
    from {
        transform: translateY(-100%);
      }
      to {
        transform: translateY(1000%);
      }
    }   
  
    .background_cross {
      z-index: 1;
      padding: 50px;
      animation: fall 10s linear infinite;
    } 
    
  </style>