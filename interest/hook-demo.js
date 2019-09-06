function withHookBefore (originalFn, hookFn) {
    return function () {
        // 将传入的参数转换为数组
        const args = Array.from(arguments);
        if (hookFn.apply(this, args) === false) {
            return
        }
        return originalFn.apply(this, args)
    }
}
console.warn = withHookBefore(console.warn, (arg0, ...data) => {
    const temp = [arg0, ...data];
    console.log('arrow-arg0', arg0);
    console.log('arrow-data', data);
    console.log('arrow-allData', temp);
});
console.warn(11, 22, 33, [2, { name: 1 }]);
