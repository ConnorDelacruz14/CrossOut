<template>
    <div id="title-bg">
        <router-link to="/">
            <img class="pressable" src="../assets/icon.png" height="100" width="70.25" style="margin: 0 20px; transition: 0.5s; padding-top: 20px;">
        </router-link>
        <h4>CrossOut</h4>
        <button id="login-btn" class="pressable">
            <h4>Login</h4>
        </button>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    #title-bg {
      position: absolute;
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 120px;
      left: 0px;
      top: 0px;
      background-color: #D9D9D9;
      text-align: center;
      justify-content: space-between;
      align-items: center;
      font-family: 'Courier Prime', monospace;
      font-size: 80px;
      font-weight: 100;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      z-index: 2;
    }

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
</style>