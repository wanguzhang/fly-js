<template>
    <div id="dynamic-component-demo" class="demo">
        <button
            v-for="tab1 in tabs1"
            v-bind:key="tab1"
            v-bind:class="['tab-button', { active: currentTab1 === tab1 }]"
            @click="chanageCurrentTab1(tab1)"
        >{{ tab1 }}</button>
        <component v-bind:is="currentTabComponent1" :jsonData1="jsonData1" class="tab"></component>
        <button
            v-for="tab2 in tabs2"
            v-bind:key="tab2"
            v-bind:class="['tab-button', { active: currentTab2 === tab2 }]"
            @click="chanageCurrentTab2(tab2)"
        >{{ tab2 }}</button>
        <component v-bind:is="currentTabComponent2" :jsonData2="jsonData2" class="tab"></component>
    </div>
</template>
<script>
import TabArchive from '@/components/dynamic/TabArchive.vue';
import TabHome from '@/components/dynamic/TabHome.vue';
import TabPost1 from '@/components/dynamic/TabPost.vue';
import TabPost2 from '@/components/dynamic/TabPost2.vue';

export default {
    components: {
        TabArchive,
        TabHome,
        TabPost1,
        TabPost2,
    },
    methods: {
        chanageCurrentTab1(data) {
            this.jsonData1.id = Math.random();
            console.log(data);
            this.currentTab1 = data;
        },
        chanageCurrentTab2(data) {
            this.jsonData2.id = Math.random();
            console.log(data);
            this.currentTab2 = data;
        },
    },
    data() {
        return {
            jsonData1: {},
            jsonData2: {},
            currentTab1: 'Home',
            currentTab2: 'Archive',
            tabs1: ['Home', 'Post1'],
            tabs2: ['Archive', 'Post2'],
        };
    },
    computed: {
        currentTabComponent1() {
            return `tab-${this.currentTab1.toLowerCase()}`;
        },
        currentTabComponent2() {
            return `tab-${this.currentTab2.toLowerCase()}`;
        },
    },
};
</script>
<style>
.tab-button {
    padding: 6px 10px;
    border: 1px solid #ccc;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
    margin-right: -1px;
    margin-bottom: -1px;
    background: #f0f0f0;
    cursor: pointer;
}

.tab-button:hover {
    background: #e0e0e0;
}

.tab-button.active {
    background: #e0e0e0;
}

.tab {
    padding: 10px;
    border: 1px solid #ccc;
}
</style>
