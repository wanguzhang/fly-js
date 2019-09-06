/**
 * @author: 张攀钦
 * Function.prototype.call(thisArg,[, arg1[, arg2[, ...]]])
 * @description:调用一个具有给定this值的函数
 * @param {Object} thisArg 函数运行时绑定的this对象
 * @param {*} arg1 给函数传的参数
 */
// 不是箭头函数
const game = '塞尔达之荒野之息';
global.name = '林克';
const playGame = function _playGame(gameName) {
    console.log(`${this.name} 玩 ${gameName}`);
};
playGame(game); // 林克 玩 塞尔达之荒野之息
playGame.call({ name: '张攀钦' }, game); // 张攀钦 玩 塞尔达之荒野之息
// 箭头函数,绑定不了 this
const sleep = () => {
    console.log(this); // {}
    console.log(`${this.name} 睡觉`);
};
sleep(); // undefined 睡觉
sleep.call({ name: '林克' }); // undefined 睡觉
