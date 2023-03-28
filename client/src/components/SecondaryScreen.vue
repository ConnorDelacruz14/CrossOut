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
            players: ["Test Player 1", "Test Player 2", "Test Player 3"],
        }
    },
}
</script>

<style>
    #secondary-screen {
        margin: 120px 20px;
    }
</style>