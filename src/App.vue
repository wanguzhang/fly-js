<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="scss">
#app {
    font-family:
        "Helvetica Neue",
        Helvetica,
        "PingFang SC",
        "Hiragino Sans GB",
        "Microsoft YaHei",
        "微软雅黑",
        Arial,
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
// 修改 NProgress的颜色
#nprogress .bar {
    background: red !important; //自定义颜色
}
</style>
