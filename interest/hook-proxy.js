const log = new Proxy(console.log, {
    apply (target, thisArgs, argsArray) {
        argsArray.push('测试数据');
        console.log(argsArray instanceof Array);
        return target.apply(thisArgs, argsArray);
    }
});
log(11);
