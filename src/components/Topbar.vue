<template>
    <section class="topbar">2048</section>
</template>

<style lang="less" scoped>
.topbar {
    width: 100vw;
    height: 5vw;
    background: #f09819; /* fallback for old browsers */
    background: -webkit-linear-gradient(
        to right,
        #edde5d,
        #f09819
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
        to right,
        #edde5d,
        #f09819
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    position: absolute;
    top: 0;
    left: 0;
    color: white;
    font-size: 55px;
    font-weight: bold;
    display: flex;
    align-items: center;
    padding-left: 40px;
}
</style>
