<template>
    <section class="game">
        <div class="row" v-for="row in gameBox" v-bind:key="row">
            <div class="col animated" :class="'n-' + number" v-for="number in row" v-bind:key="number">{{number}}</div>
        </div>
    </section>
</template> 

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
import store from "@/store";

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
    // 游戏初始化
    newGame() {
        store.commit("initGame");
        this.over = false;
        this.gameBox = Array.from(Array(this.size)).map(() =>
            Array(this.size).fill(undefined)
        );
        this.setLocalstorage()
        document.addEventListener("keyup", this.keyDown);
    }
    // 绑定键盘事件
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
        this.updateScore();
    }
    // 随机在空格子生成一个2或4
    setRandom() {
        if (this.getEmptyBox().length > 0) {
            let [x, y] = this.getRandomBox();
            this.gameBox[x][y] = this.getRandomNumber();
        }
    }
    // 获取所有空格子
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
    // 在空格子中随机选取一个
    getRandomBox() {
        if (this.emptyBox.length) {
            return this.emptyBox[
                Math.floor(Math.random() * this.emptyBox.length)
            ];
        }
    }
    // 以1:9的概率选择4或2
    getRandomNumber() {
        return Math.random() < 0.9 ? 2 : 4;
    }
    // 根据不同方向的移动进行合并，并判断是否game over
    move(i: number) {
        let arr = this.rotate(this.gameBox, i).map(item => {
            return this.moveLeft(item);
        });
        this.gameBox = this.rotate(arr, this.size - i);
        this.setLocalstorage();
        if (this.getEmptyBox().length === 0) {
            this.over = true;
            alert("game over!!");
        }
    }
    // 逆时针旋转算法
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
    // 左移合并算法
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
                let extraScore = next * 2;
                store.commit("updateScore", extraScore);
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
    // 判断最远的
    farthestPosition(list: number[], cell: {}) {
        let farthest = cell.x;
        while (farthest > 0 && !list[farthest - 1]) {
            farthest = farthest - 1;
        }
        return farthest;
    }
    // 利用localstorage储存数据
    setLocalstorage() {
        let bestScore = localStorage.getItem("bestScore");
        
        let currentScore = this.$store.state.score;
        if (bestScore) {
            if (currentScore > +bestScore) {
                localStorage.setItem("bestScore", `${currentScore}`);
                store.commit("updateBestScore", currentScore);
            }else{
                store.commit("updateBestScore", bestScore);
            }
        } else {
            localStorage.setItem("bestScore", `${currentScore}`);
            store.commit("updateBestScore", currentScore);
        }
    }
    // 更新分数
    updateScore() {
        let score = 0;
        for (let x = 0; x < this.size; x++) {
            for (let y = 0; y < this.size; y++) {
                if (this.gameBox[x][y]) {
                    score = score + this.gameBox[x][y];
                }
            }
        }
        store.commit("updateScore", score);
    }
    mounted() {
        this.newGame();
    }
}
</script>

<style lang="less" scoped>
.game {
    border-radius: 3px;
    height: 500px;
    width: 500px;
    background: #bbada0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 15px;
    margin-top: 60px;
    .row {
        display: flex;
        height: 106.25px;
        width: 470px;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 15px;
        .col {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 55px;
            border-radius: 3px;
            height: 106.25px;
            width: 106.25px;
            color: #776e65;
            background: #cdc1b4;
            font-weight: bold;
            &.n-2 {
                background: #eee4da;
            }
            &.n-4 {
                background: #ede0c8;
            }

            &.n-8 {
                color: #f9f6f2;
                background: #f2b179;
            }
            &.n-16 {
                color: #f9f6f2;
                background: #f59563;
            }
            &.n-32 {
                color: #f9f6f2;
                background: #f67c5f;
            }
            &.n-64 {
                color: #f9f6f2;
                background: #f65e3b;
            }
            &.n-128 {
                color: #f9f6f2;
                background: #edcf72;
                font-size: 45px;
            }
            &.n-256 {
                color: #f9f6f2;
                background: #edcc61;
                font-size: 45px;
            }
            &.n-512 {
                color: #f9f6f2;
                background: #edc850;
                font-size: 45px;
            }
            &.n-1024 {
                color: #f9f6f2;
                background: #edc53f;
                font-size: 35px;
            }
            &.n-2048 {
                color: #f9f6f2;
                background: #edc22e;
                font-size: 35px;
            }
            &.n-4096 {
                color: #f9f6f2;
                background: #3c3a32;
                font-size: 35px;
            }
            &.n-8192 {
                color: #f9f6f2;
                background: #3c3a32;
                font-size: 35px;
            }
            .col:last-child {
                margin-bottom: 0;
            }
        }
    }
}
</style>
