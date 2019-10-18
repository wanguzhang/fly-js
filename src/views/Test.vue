<template>
    <div>
        <span class="count">{{ text }}</span>
        <AxiosTest :obj="obj"></AxiosTest>
    </div>
</template>
<script>
import AxiosTest from '@/components/AxiosTest.vue';

export default {
    components: { AxiosTest },
    data() {
        return { text: '默认', obj: null };
    },
    created() {
    // 创建一个大的字符串用于验证内存占用
        window.$eventBus.$on('home-on', (text) => {
            window.vm.text = text;
        });
    },
    mounted() {
        this.$axios
            .get(
                'https://www.thingjs.com/uinoUser/thingjs/user/userMsgCount?userId=12614',
            )
            .then((data) => {
                this.obj = data;
            });
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
