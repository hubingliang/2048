<template>
    <section class="game">
        <div class="row" v-for="row in gameBox">
            <div class="col" v-for="number in row">{{number}}</div>
        </div>
    </section>
</template> 

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

@Component
export default class Game extends Vue {
    gameBox: any[] = [];
    score: number = 0;
    size: number = 4;
    over: boolean = true;
    emptyBox: any[] = [];
    @Emit()
    newGame() {
        this.score = 0;
        this.over = false;
        this.gameBox = Array.from(Array(this.size)).map(() =>
            Array(this.size).fill(undefined)
        );
        document.addEventListener("keyup", this.keyDown);
    }
    keyDown(e: any) {
        let arr = null;
        switch (e.keyCode) {
            case 38: //上
                this.move(1);
                break;
            case 40: //下
                this.move(3);
                break;
            case 37: //左
                this.move(0);
                break;
            case 39: //右
                this.move(2);
                break;
        }
        this.setRandom();
    }
    setRandom() {
        if (this.getEmptyBox().length > 0) {
            let [x, y] = this.getRandomBox();
            this.gameBox[x][y] = this.getRandomNumber();
        }
    }
    getRandomBox() {
        if (this.emptyBox.length) {
            return this.emptyBox[
                Math.floor(Math.random() * this.emptyBox.length)
            ];
        }
    }
    getRandomNumber() {
        return Math.random() < 0.9 ? 2 : 4;
    }
    getEmptyBox() {
        this.emptyBox = [];
        for (let x = 0; x < this.size; x++) {
            for (let y = 0; y < this.size; y++) {
                if (!this.gameBox[x][y]) {
                    this.emptyBox.push([x, y]);
                }
            }
        }
        return this.emptyBox;
    }
    move(i: number) {
        let arr = this.rotate(Array.from(this.list), i).map((item, index) => {
            return this.moveLeft(item);
        });
        this.list = this.rotate(arr, this.size - i);
        this.setLocalstorage();
        if (!this.isAvailable()) {
            this.over = true;
        }
    }
    mounted() {
        this.newGame();
    }
}
</script>

<style lang="less" scoped>
.row {
    display: flex;
    height: 100px;
    width: 400px;
    .col {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        width: 100px;
        background: #333;
        color: white;
        font-size: 24px;
    }
}
</style>
