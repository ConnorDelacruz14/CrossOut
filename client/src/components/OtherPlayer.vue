<template>
    <div class="other-player">
        <div class="player-screen"></div>
        <div class="other-player-name">{{ name }}</div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        }
    }
}
</script>

<style>
    .other-player {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .player-screen {
        width: 400px;
        height: 220px;
        border: 1px solid rgba(0, 0, 0, 0.22);
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        margin: 5px 10px;
    }

    .other-player-name {
        font-size: 20px;
    }

</style>