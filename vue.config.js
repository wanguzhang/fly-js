// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    configureWebpack: {
        // 配置 vscode debug
        devtool: 'source-map',
    },
    pluginOptions: {
        lintStyleOnBuild: true,
        stylelint: {
            fix: true,
        },
    },
    chainWebpack: (config) => {
        // 设置 public 目录别名
        config.resolve.alias.set('#', resolve('public'));
        // 设置 src 目录别名
        config.resolve.alias.set('@', resolve('src'));
        // 解决 vue-layer 使用时报错问题
        config.resolve.alias.set('vue$', 'vue/dist/vue.js');
    },
};
