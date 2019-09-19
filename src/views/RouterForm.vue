<template>
    <div>
        <div>222</div>
        <div>{{$router.params.id}}</div>
    </div>
</template>
<script>
export default {
    mounted() {
        console.log(this.$router.params);
    },
};
</script>
