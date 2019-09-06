/**
 * @author: 张攀钦
 * @description:async函数返回一个 Promise 对象，可以使用then方法添加回调函数。
 * 当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。
 */
// 1.等待 await 后面执行完再执行后面的语句。
const awaitFunc = function _awaitFunc() {
    return Promise.resolve('awaitFunc').then((data) => {
        console.log(data);
        return 'awaitFunc-then-return-data';
    });
};
const async = async function _async() {
    // 等待 await 执行完之后，再将后续的代码放入微任务队列
    await awaitFunc().then((data) => {
        console.log(data);
    });
    console.log('awaitFunc 执行完在打印');
};
async();
/**
 * awaitFunc
 * awaitFunc-then-return-data
 * awaitFunc 执行完在打印
 */
const noAwaitFunc = function _noAwaitFunc() {
    return Promise.resolve('noAwaitFunc').then((data) => {
        console.log(data);
        return 'noAwaitFunc-then-return-data';
    });
};
const noAsync = function _noAsync() {
    noAwaitFunc().then((data) => {
        console.log(data);
    });
    console.log('noAwaitFunc 执行完在打印');
};
noAsync();
/**
 * noAwaitFunc 执行完在打印
 * noAwaitFunc
 * noAwaitFunc-then-return-data
 */
