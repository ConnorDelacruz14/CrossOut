<template>
    <div id="secondary-screen">
        <ul>
            <li v-for="(player, index) in players" v-bind:key="index" style="list-style-type: none;">
                <OtherPlayer :name="player"/>
            </li>
        </ul>
    </div>
</template>

<script>
import OtherPlayer from './OtherPlayer.vue'

export default {
    components: {OtherPlayer},
    data() {
        return {
            players: ["Player 2", "Player 3", "Player 4"],
        }
    },
}
</script>

<style>
    #secondary-screen {
        margin: 120px 20px;
    }
</style>