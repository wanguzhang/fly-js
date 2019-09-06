/**
 * @author: 张攀钦
 * const promise = Promise.race(iterable);
 * @description:  方法返回一个 promise，
 * 一旦迭代器中的最先改变状态，就返回那个 promise
 */
const sleep = function _sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};
const sleep2 = sleep(2000).then(() => {
    console.log('休息两秒');
    return '你可以了解世间万物，但追根溯源的唯一途径便是亲身尝试。';
});
const sleep3 = sleep(3000).then(() => {
    console.log('休息三秒');
    return '人终究是一个孤独的个体，纵使你已经拥有了他人的怀抱，这其中，也许人与人之间唯一不同的，只是你把孤独藏在哪里。';
});
const sleep4 = sleep(4000).then(() => {
    console.log('休息四秒');
    return '躲避和不信任，是因为曾经被应该爱我的人遗弃。';
});
// 返回 最先执行的 promise，sleep2先执行,所以会将 sleep2 返回。因为事件已经在队列中了，所以其余的 promise 也会执行
const ret = Promise.race([sleep2, sleep3, sleep4]);
ret.then((data) => {
    console.log(data); // 你可以了解世间万物，但追根溯源的唯一途径便是亲身尝试。
}).catch((error) => {
    console.log(error.message);
});
// 带过运行的结果
// 休息两秒
// 你可以了解世间万物，但追根溯源的唯一途径便是亲身尝试。
// 休息三秒
// 休息四秒
