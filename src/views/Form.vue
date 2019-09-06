<template>
    <div>
        <button @click="showMessage">打印 message</button>
        <br />
        <input id="inputId" v-model="message" placeholder="填写message" />
        <br />
        <label for="inputId">{{message}}</label>
        <br />
        <span>{{message}}</span>
        <br />
    </div>
</template>

<script>
export default {
    data() {
        return { message: '' };
    },
    methods: {
        showMessage() {
            console.log(this.message);
        },
    },
};
</script>
