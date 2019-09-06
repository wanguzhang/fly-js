<template>
    <div>
        <!-- :[myAttr] 测试动态绑定数据-->
        <span :title="message" :key="message">{{spanContent}}</span>
        <br />
        <button @click="updateMessag">更新 message</button>
        <br />
        <button @click="noUpdateMessag">不更新 message</button>
        <button @click="UpdateMessageBymoutedData">BymoutedData 更新 message</button>
        <br />
        <span>测试 moutedData:{{moutedData}}</span>
        <br />
        <button @click="showP">点击查看隐藏内容</button>
        <br />
        <p v-if="pVisible">我是被隐藏的内容</p>
        <button @click="pushP">添加 p 内容</button>
        <br />
        <button @click="pushP2">直接操作数据添加 p 内容</button>
        <br />
        <p v-for="item in forData" :key="item.key">{{item.name}}</p>
        <button @click="updateReverseMessage">更新reverseMessage</button>
        <div>反转 message:{{reverseMessage}}</div>
    </div>
</template>

<script>
const tempData = {
    message: '测试绑定数据',
    reverseMessage: '测试绑定数据',
    myAttr: 'testMyAttr',
    spanContent: '鼠标悬停几秒钟查看 title',
    pVisible: false,
    forData: [
        {
            key: 1,
            name: 1,
        },
        {
            key: 2,
            name: 2,
        },
    ],
};
export default {
    data() {
        return tempData;
    },
    methods: {
        updateReverseMessage() {
            this.reverseMessage = Math.random();
        },
        UpdateMessageBymoutedData() {
            console.log(this.moutedData);
            this.moutedData = Math.random();
        },
        noUpdateMessag() {
            console.log('noUpdateMessag 执行了');
            this.message = this.message;
        },
        updateMessag() {
            this.message = `message:${Math.random()}`;
        },
        showP() {
            this.pVisible = !this.pVisible;
        },
        pushP() {
            this.forData.push({ key: Math.random(), name: Math.random() });
        },
        pushP2() {
            console.log(this.forData === tempData.forData);
            // this.$data 就是 方法 data 返回的参数
            console.log(this.$data.forData === tempData.forData);
            tempData.forData.push({ key: Math.random(), name: Math.random() });
        },
    },
    computed: {
    // 计算属性直接更新
        moutedData: {
            get() {
                console.log('moutedData 执行了');
                return this.message;
            },
            set(newValue) {
                this.message = newValue;
            },
        },
    },
    watch: {
        reverseMessage(newValue, old) {
            console.log('reverseMessage-new:', newValue);
            console.log('reverseMessage-lod:', old);
        },
    },
    created() {
        console.log('Render 创建了');
    },
    beforeUpdate() {
        console.log('更新了');
    },
    updated() {
        console.log('已经更新了');
    },
};
</script>
