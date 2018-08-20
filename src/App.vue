<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <Game/>
    <Score/>
    <Topbar/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Game from "./components/Game.vue";
import Topbar from "./components/Topbar.vue";
import Score from "./components/Score.vue";


@Component({
    components: {
        Game,Score,Topbar
    }
})
export default class App extends Vue {
}
</script>

<style lang="less">
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: #FAF8EF;
    overflow: hidden;
}
</style>
