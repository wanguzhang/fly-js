<template>
    <div>
        <p>{{ message }}</p>
        <p>翻转: {{ reversedMessage }}</p>
        <input v-model="message" />
        <button @click="showMessage">点击</button>
    </div>
</template>
<script>
const data = {
    message: 'hello-world-message',
    id: 'myId',
    firstName: '张',
    lastName: '攀钦',
    data: 'hello-word-data',
};
window.data = data;
export default {
    data() {
        return data;
    },
    computed: {
        reversedMessage() {
            console.log('reversedMessage 执行了', this.data);
            return `${this.firstName}-${this.lastName}`;
        },
    },
    methods: {
        showMessage() {
            this.lastName = `${this.lastName}1`;
            console.log(this.data);
        },
    },
    create() {
        console.log('create-hello-world-vue');
    },
};
</script>
