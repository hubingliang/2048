<template>
    <section class="buttonbox">
        <div class="button" v-on:click="newGame">New Game</div>
    </section>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";
import store from "@/store";
@Component
export default class Game extends Vue {
    @Emit()
    newGame() {
        let gameBox = Array.from(Array(4)).map(() => Array(4).fill(undefined));
        let x = Math.floor(Math.random() * 4);
        let y = Math.floor(Math.random() * 4);
        this.$store.state.gameBox[x][y] = Math.random() < 0.9 ? 2 : 4;
        store.commit("setGameBox", gameBox);
        store.commit("initScore");
        localStorage.setItem("gameBox", JSON.stringify(gameBox));
    }
}
</script>

<style lang="less" scoped>
.buttonbox {
    grid-area: "newgame";
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .button {
        background: #8f7a66;
        color: #fff;
        width: 300px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        font-size: 30px;
        font-weight: bold;
        margin-right: 50px;
    }
}
</style>
