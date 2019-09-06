<template>
    <div @click="alartName">
        Slot 内容
        <slot name="a">aaaa</slot>
        <!-- <slot name="b" :b="test">{{test.age}}</slot> -->
        <slot name="b" :test="test">{{test.age}}</slot>
        <slot name="c">cccc</slot>
        <slot name="d">dddd</slot>
    </div>
</template>
<script>
export default {
    inject: ['slot'],
    methods: {
        alartName() {
            console.log('触发子组件事件');
            this.slot('子组件传递参数');
        },
    },
    data() {
        return { test: { age: '子组件内容 age', name: '子组件内容 name' } };
    },
};
</script>
<style>
.slot-b {
    background-color: red;
}
</style>
