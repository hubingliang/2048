<template>
    <div id="app">
        <Topbar/>
        <Score/>
        <NewGame/>
        <Game/>
        <Footer/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Game from "./components/Game.vue";
import Topbar from "./components/Topbar.vue";
import Score from "./components/Score.vue";
import Footer from "./components/Footer.vue";
import NewGame from "./components/NewGame.vue";

@Component({
    components: {
        Game,
        Score,
        Topbar,
        Footer,
        NewGame
    }
})
export default class App extends Vue {}
</script>

<style lang="less">
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    height: 100vh;
    width: 100vw;
    background: #faf8ef;
    overflow: hidden;
    display: grid;
    grid-template-columns: 750px;
    grid-template-rows: 20vh 9vh 8vh 55vh 8vh;
    grid-template-areas:
        "topbar"
        "score"
        "newgame"
        "game"
        "footer";
}
</style>
