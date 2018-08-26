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
    grid-area: "score";
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 50px;
    .score {
        background: #bbada0;
        min-width: 200px;
        color: #ffffff;
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 5px;
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
        padding: 5px;
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
