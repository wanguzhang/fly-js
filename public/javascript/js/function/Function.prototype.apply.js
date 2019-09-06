/**
 * @author: 张攀钦
 * Function.prototype.apply(thisArg, [argsArray])
 * @description:调用一个具有给定this值的函数，以及作为一个数组（或类似数组对象）提供的参数。
 * @param {Object} thisArg 函数运行时绑定的this对象
 * @param {Array} argsArray 给函数传的参数
 */
// 不是箭头函数
const game = '塞尔达之荒野之息';
global.name = '林克';
const playGame = function _playGame(gameName) {
    console.log(`${this.name} 玩 ${gameName}`);
};
playGame(game); // 林克 玩 塞尔达之荒野之息
playGame.apply({ name: '张攀钦' }, [game]); // 张攀钦 玩 塞尔达之荒野之息
// 箭头函数,绑定不了 this
const sleep = () => {
    console.log(this); // {}
    console.log(`${this.name} 睡觉`);
};
sleep(); // undefined 睡觉
sleep.apply({ name: '林克' }); // undefined 睡觉
