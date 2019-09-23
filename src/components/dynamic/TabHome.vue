<template>
    <div>Home-{{message}}</div>
</template>
<script>
export default {
    props: {
        jsonData1: { type: Object },
    },
    // mounted() {
    //     this.message = `${Math.random()}-${JSON.stringify(this.jsonData1)}`;
    // },
    computed: {
        message() {
            return `${Math.random()}-${JSON.stringify(this.jsonData1)}`;
        },
    },
};
</script>
