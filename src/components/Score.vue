<template>
    <section class="score">
        {{score}} ss
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
@Component
export default class Score extends Vue {
    @Prop(Number) score!: number;
}
</script>

<style lang="less" scoped>
.score{
    position: absolute;
    left: 0;
    
}
</style>
