<template>
    <div>{{obj}}</div>
</template>

<script>
export default {
    name: 'AxiosTest',
    props: {
        obj: {
            type: [Object, String],
        },
    },
};
</script>
