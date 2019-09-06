<template>
    <div>
        <span class="count">{{ text }}</span>
    </div>
</template>
<script>
export default {
    data() {
        return { text: '默认' };
    },
    created() {
    // 创建一个大的字符串用于验证内存占用
        window.$eventBus.$on('home-on', (text) => {
            window.vm.text = text;
        });
    },
    mounted() {
        setTimeout(() => {
            const text = Array(1000000)
                .fill('xxx')
                .join(',');
            window.$eventBus.$emit('home-on', text);
            console.log(1111);
        }, 1000);
    },
    beforeDestroy() {
    // 注意这里没有off掉'home-on'的订阅事件
    // window.$eventBus.$off('home-on');
    },
};
</script>
