<template>
    <div id="dynamic-component-demo" class="demo">
        <button
            v-for="tab in tabs"
            v-bind:key="tab"
            v-bind:class="['tab-button', { active: currentTab === tab }]"
            v-on:click="currentTab = data"
        >{{ tab }}</button>

        <component v-bind:is="currentTabComponent" class="tab"></component>
    </div>
</template>
<script>
import TabArchive from '@/components/dynamic/TabArchive.vue';
import TabHome from '@/components/dynamic/TabHome.vue';
import TabPost from '@/components/dynamic/TabPost.vue';

export default {
    components: { TabArchive, TabHome, TabPost },
    methods: {
        chanageCurrentTab(data) {
            console.log(data);
            this.currentTab = data;
        },
    },
    data() {
        return {
            currentTab: 'Home',
            tabs: ['Home', 'Post', 'Archive'],
        };
    },
    computed: {
        currentTabComponent() {
            return `tab-${this.currentTab.toLowerCase()}`;
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
