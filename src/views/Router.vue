<template>
    <div>
        <button @click="changSlotB">测试混入</button>
        <router-link to="/">router</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    methods: {
        changSlotB() {
            this.$router.push({
                path: `/router/form/${Math.random()}`,
            });
        },
    },
};
</script>
