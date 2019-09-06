<template>
    <div>
        <div @click="changeMessage" class="a-pointer">{{message}}</div>
        <div>{{prop1}}</div>
        <div>{{num}}</div>
        <div>{{obj.name}}</div>
        <div>{{arr}}</div>
        <div>{{camelCase}}</div>
        <slot name="testSlot">测试内容分发 slot</slot>
    </div>
</template>

<script>
export default {
    name: 'Component-A',
    data() {
        return { message: 'Component-A' };
    },
    methods: {
        changeMessage() {
            this.$emit('changeMessage-emit', { msg: Math.random() });
        },
    },
    props: {
        prop1: {
            type: String,
            default: '111',
        },
        num: {
            type: [Number, String],
            default: 0,
        },
        obj: {
            type: [Object, String],
        },
        arr: {
            type: [Array, String],
        },
        camelCase: {
            type: String,
        },
    },
};
</script>

<style>
.a-pointer:hover {
    cursor: pointer;
}
</style>
