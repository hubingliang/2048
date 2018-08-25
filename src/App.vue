<template>
  <div id="app">
    <Game/>
    <!-- <Score/> -->
    <Topbar/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Game from "./components/Game.vue";
import Topbar from "./components/Topbar.vue";
import Score from "./components/Score.vue";
import Footer from "./components/Footer.vue";



@Component({
    components: {
        Game,Score,Topbar,Footer
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
