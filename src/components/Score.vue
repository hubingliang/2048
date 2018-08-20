<template>
    <section class="score">
        {{'分数：' + this.$store.state.score}}
        {{'最佳分数：'+ this.$store.state.bestScore}}
    </section>
</template>

<style lang="less" scoped>
.score {
    position: absolute;
    left: 0;
    width: 20vw;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
