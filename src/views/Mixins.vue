<template>
    <div>
        <button @click="changSlotC">测试混入</button>
    </div>
</template>
<script>
const mixin = {
    data() {
        return { name: '混入name', mixinData: '混入 mixinData' };
    },
    methods: {
        changSlotC() {
            console.log(this.mixinData);
        },
    },
};
export default {
    // mixin的数据对象和组件的数据发生冲突时以组件数据优先。
    mixins: [mixin],
    methods: {
        changSlotB() {
            console.log(this.name);
        },
    },
    data() {
        return { name: '主页面 data.name', test: { name: 'name', age: 'age' } };
    },
};
</script>
