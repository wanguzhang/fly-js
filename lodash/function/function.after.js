const _ = require('lodash');
// const newFunc=_.after(n, func)
// 调用 newFunc 等于 n 开始，每调用一次，执行一次 func
const newFunc = _.after(3, () => {
    console.log('调用了两次');
});

newFunc();
newFunc();
newFunc();
newFunc();

// const newFunc=_.before(n, func)
// 调用一次 newFunc,触发一次 func。当调用的次数小于 n ，才会触发 func。

const newBeforeFunc = _.before(4, () => {
    console.log('触发三次之后不触发了');
});
newBeforeFunc();
newBeforeFunc();
newBeforeFunc();
newBeforeFunc();
newBeforeFunc();
newBeforeFunc();
_.throttle
