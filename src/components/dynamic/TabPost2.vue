<template>
    <div>Posts2-{{message}}</div>
</template>
<script>
export default {
    props: {
        jsonData2: { type: Object },
    },
    computed: {
        message() {
            return `${Math.random()}-${JSON.stringify(this.jsonData2)}`;
        },
    },
};
</script>
