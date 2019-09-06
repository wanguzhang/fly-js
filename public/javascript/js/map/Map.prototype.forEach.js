/**
 * @author: 张攀钦
 * Map.prototype.forEach(callback(value[,key[,map]])[, thisArg])
 * @description: 方法将会以插入顺序对 Map 对象中的每一个键值对执行一次参数中提供的回调函数。
 * @param {*} value:值
 * @param {*} key:键
 * @param {Map} map:调用方法的对象
 * @param {Object} thisArg:callback 执行时的 this，箭头函数绑定不了 this
 */
const arr = [['movie-1', '肖申克的救赎'], ['movie-2', '阿甘正传']];
const movie = new Map(arr);
movie.forEach((value, key, map) => {
    console.log(value);
    console.log(key);
    console.log(map);
});
