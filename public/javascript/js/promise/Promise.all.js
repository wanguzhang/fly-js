/**
 * @author: 张攀钦
 * const promiPromise.all(iterable);
 * @description: 方法返回Promise 实例，或包含所有 resolve(data),有一个状态是 reject ,将会将返回的实例的状态转变为 reject
 */
const sleep = function _sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};
const sleep1 = sleep(1000).then(() => {
    console.log('休息一秒');
    return '跟他説抱歉,我要去找个女孩';
});
const sleep2 = sleep(2000).then(() => {
    console.log('休息两秒');
    return '忘记应该忘记的，面对未来一切可以出现的。';
});
const sleep3 = sleep(3000).then(() => {
    console.log('休息三秒');
    return '孩子，生活不是靠书本和想当然来的，是靠心去体会的。';
});
const sleep4 = sleep(4000).then(() => {
    console.log('休息四秒');
    return '总有人有不好的时候，但这也会让你回忆起从前不曾在意的美好。';
});
const sleep5 = sleep(5000).then(() => {
    console.log('休息五秒');
    throw new Error('模拟测试失败情况');
});
// 返回 最先执行的 promise，sleep2先执行,所以会将 sleep2 返回。因为事件已经在队列中了，所以其余的 promise 也会执行
// const ret = Promise.all([sleep1, sleep2, sleep3, sleep4]);
// ret.then((data) => {
//     // 所有 promise resolve(data) data 组成的数组
//     console.log(data);
// }).catch((error) => {
//     console.log(error.message);
// });
// 休息一秒;
// 休息两秒;
// 休息三秒;
// 休息四秒
// [('跟他説抱歉,我要去找个女孩', '忘记应该忘记的，面对未来一切可以出现的。', '孩子，生活不是靠书本和想当然来的，是靠心去体会的。', '总有人有不好的时候，但这也会让你回忆起从前不曾在意的美好。')];
const ret2 = Promise.all([sleep1, sleep2, sleep3, sleep4, sleep5]);
ret2.then((data) => {
    // 所有 promise resolve(data) data 组成的数组
    console.log(data);
}).catch((error) => {
    console.log(error.message); // 执行这个
});
// 休息一秒;
// 休息两秒;
// 休息三秒;
// 休息四秒;
// 休息五秒;
// 模拟测试失败情况;
