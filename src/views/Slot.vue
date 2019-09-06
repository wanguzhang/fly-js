<template>
    <div>
        <div>111</div>
        <button @click="changSlotB">触发子组件方法</button>
        <SlotB ref="slotB">
            <template #a>
                <div>{{name}}</div>
            </template>
            <template #b="test">{{test.test.name}}</template>
            <template #d>
                <div>主页面dddd</div>
            </template>
            <template #c>
                <div>主页面cccc</div>
            </template>
        </SlotB>
    </div>
</template>
<script>
import SlotB from '@/components/SlotB.vue';

export default {
    provide() {
        return { slot: this.slotEvent };
    },
    methods: {
        changSlotB() {
            this.$refs.slotB.alartName();
        },
        slotEvent(data) {
            console.log('父组件', data);
        },
    },
    components: {
        SlotB,
    },
    mounted() {
        console.log(this.$root);
    },
    data() {
        return { name: '主页面 data.name', test: { name: 'name', age: 'age' } };
    },
};
</script>
