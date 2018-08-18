<template>
    <section class="game">
        <div class="row animated" v-for="row in gameBox">
            <div class="col animated zoomIn" :class="'n-' + number" v-for="number in row">{{number}}</div>
        </div>
    </section>
</template> 

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

@Component
export default class Game extends Vue {
    gameBox: any[] = [];
    score: number = 0;
    bestScore: number = 0;
    size: number = 4;
    over: boolean = true;
    emptyBox: any[] = [];
    direction: object[] = [
        {
            x: 0, // up
            y: -1
        },
        {
            x: 0, // down
            y: 1
        },
        {
            x: -1, // left
            y: 0
        },
        {
            x: 1, // right
            y: 0
        }
    ];
    firstLine: number[] = [];
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
    moveLeft(list: number[]) {
        let _list: object[] = []; //当前行非空格子
        let flg: boolean = false;
        for (let i = 0; i < this.size; i++) {
            if (list[i]) {
                _list.push({
                    x: i,
                    merged: false,
                    value: list[i]
                });
            }
        }
        interface numberType {
            x: any;
            merged: boolean;
            value: number;
        }
        _list.forEach((item: numberType) => {
            let farthest = this.farthestPosition(list, item);
            let next: number = list[farthest - 1];
            if (next && next === item.value && !_list[farthest - 1].merged) {
                //合并
                list[farthest - 1] = next * 2;
                list[item.x] = undefined;
                item = {
                    x: farthest - 1,
                    merged: true,
                    value: next * 2
                };
                this.score += next * 2;
            } else {
                if (farthest != item.x) {
                    list[farthest] = item.value;
                    list[item.x] = undefined;
                    item.x = farthest;
                }
            }
        });
        return list;
    }
    farthestPosition(list: number[], cell: {}) {
        let farthest = cell.x;
        while (farthest > 0 && !list[farthest - 1]) {
            farthest = farthest - 1;
        }
        return farthest;
    }
    move(i: number) {
        let arr = this.rotate(this.gameBox, i).map(item => {
            return this.moveLeft(item);
        });
        this.gameBox = this.rotate(arr, this.size - i);
        this.setLocalstorage();
        if (this.getEmptyBox().length === 0) {
            this.over = true;
        }
    }
    rotate(arr: any[], n: number) {
        n = n % 4;
        if (n === 0) return arr;
        let tmp: any[] = Array.from(Array(this.size)).map(() =>
            Array(this.size).fill(undefined)
        );
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                tmp[this.size - 1 - i][j] = arr[j][i];
            }
        }
        if (n > 1) tmp = this.rotate(tmp, n - 1);
        return tmp;
    }
    setLocalstorage() {
        let score = localStorage.getItem("bestScore");
        if (score) {
            if (this.score > +score) {
                localStorage.setItem("bestScore", `${this.score}`);
                this.bestScore = this.score;
            }
        } else {
            localStorage.setItem("bestScore", `${this.score}`);
            this.bestScore = this.score;
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
    height: 125px;
    width: 500px;
    background: #bbada0;
    align-items: center;
    justify-content: space-around;
    .col {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        border-radius: 3px;
        height: 105px;
        width: 105px;
        color: #776e65;
        background: #cdc1b4;
        &.n-2 {
            background: #eee4da;
        }
        &.n-4 {
            background: #ede0c8;
        }

        &.n-8 {
            background: #F2B179;
        }
        &.n-16 {
            background: #F59563;
        }
        &.n-32 {
            background: #F67C5F;
        }
        &.n-64 {
            background: #F65E3B;
        }
        &.n-128 {
            background: #EDCF72;
        }
        &.n-256 {
            background: #EDCC61;
        }
        &.n-512 {
            background: #EDC850;
        }
        &.n-1024 {
            background: #EDC53F;
        }
        &.n-2048 {
            background: #edc22e;
        }
        &.n-4096 {
            background: #3c3a32;
        }
        &.n-8192 {
            background: #3c3a32;
        }
    }
}
</style>
