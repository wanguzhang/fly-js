module.exports = {
    presets: [[
        '@vue/app',
        // 解决运行报core-js错误的问题
        { useBuiltIns: 'entry' },
    ]],
};
