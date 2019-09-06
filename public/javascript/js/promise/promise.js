/* eslint-disable prefer-promise-reject-errors */
/**
 * @author: 张攀钦
 * @description:Promise 异步编程
 * 一个 Promise有以下几种状态: 状态一旦代表，便不能更改
 * pending: 初始状态，既不是成功，也不是失败状态。等待状态转变
 * fulfilled: 意味着操作成功完成。then 处理逻辑
 * rejected: 意味着操作失败。可以在 catch 处理逻辑
 * 每一个 then 都会返回一个新的 Promise 实例
 */
// 1. new Promise();
const func = function _func(movie) {
    return new Promise((resolve, reject) => {
        if (movie === '盗梦空间') {
            resolve('做梦，就要做大一点');
        } else {
            // 心灵捕手
            reject('成功的含义不在于要得到什么，而在于你从那个奋斗的起点走了多远。');
        }
    });
};

func('盗梦空间')
    .then((data) => {
        console.log(data); // 做梦，就要做大一点
    })
    .catch((error) => {
        console.log(error);
    });
func('心里捕手')
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error); // 成功的含义不在于要得到什么，而在于你从那个奋斗的起点走了多远。
    });
