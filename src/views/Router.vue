<template>
    <div>
        <button @click="changSlotB">测试点击切换页面</button>
        <div>路径传递参数：{{$route.params.id}}</div>
        <router-link to="/">home 页面</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    mounted() {
        console.log(this.$route.params);
        console.log(this.$route);
    },
    methods: {
        changSlotB() {
            this.$router.push({
                name: 'routerForm',
                params: { id: Math.random(), name: 222 },
            });
        },
    },
    beforeRouteUpdate(to, from, next) {
        console.log(to);
        console.log(from);
        console.log(next);
        next();
    },
};
</script>
