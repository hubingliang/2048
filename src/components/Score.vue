<template>
    <section class="scoreBox">
        <div class="score">
            <div class="title">Score</div>
            {{this.$store.state.score}}
        </div>
        <div class="bestScore">
            <div class="title">BestScore</div>
            {{this.$store.state.bestScore}}
        </div>
    </section>
</template>

<style lang="less" scoped>
.scoreBox {
    position: absolute;
    right: 0;
    top: 0;
    margin-right: 50px;
    margin-top: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    .score {
        background: #bbada0;
        height: 100px;
        min-width: 200px;
        color: #ffffff;
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 10px;
        font-weight: bold;
        font-size: 40px;
        .title {
            font-size: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            color: #eee4da;
        }
    }
    .bestScore {
        background: #bbada0;
        height: 100px;
        min-width: 160px;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 10px;
        font-weight: bold;
        font-size: 40px;
        .title {
            font-size: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            color: #eee4da;
        }
    }
}
</style>
