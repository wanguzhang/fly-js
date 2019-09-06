/**
 * @author: 张攀钦
 * const func=Function.prototype.call(thisArg,[, arg1[, arg2[, ...]]])
 * @description:创建一个新的函数，在调用时设置this关键字为提供的值。
 * @param {Object} thisArg 函数运行时绑定的this对象
 * @param {*} arg1 给函数传的参数
 * @returns {Function} func 返回一个原函数的拷贝，并拥有指定的this值和初始参数。
 */
// 不是箭头函数
const game = '塞尔达之荒野之息';
global.name = '林克';
const playGame = function _playGame(gameName) {
    console.log(`${this.name} 玩 ${gameName}`);
};
playGame(game); // 林克 玩 塞尔达之荒野之息
const exec1 = playGame.bind({ name: '张攀钦' }, game);
exec1(); // 张攀钦 玩 塞尔达之荒野之息
// 箭头函数,绑定不了 this
const sleep = () => {
    console.log(this); // {}
    console.log(`${this.name} 睡觉`);
};
sleep(); // undefined 睡觉
const exec2 = sleep.bind({ name: '林克' });
exec2(); // undefined 睡觉
