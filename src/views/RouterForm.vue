<template>
    <div>
        <div>222</div>
        <div>{{$route.params.id}}</div>
        <div>{{$route.params.name}}</div>
    </div>
</template>
<script>
export default {
    mounted() {
        console.log(this.$route.params);
    },
};
</script>
