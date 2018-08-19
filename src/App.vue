<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <Game/>
    <Score/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Game from "./components/Game.vue";
import Score from "./components/Score.vue";

@Component({
    components: {
        Game,Score
    }
})
export default class App extends Vue {
    data() {
        return {};
    }
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
