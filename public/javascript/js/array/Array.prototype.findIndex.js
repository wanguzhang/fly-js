/**
 * @author: 张攀钦
 * const index = Array.prototype.findIndex(callback([item[,index[,array]]])[, thisArg])
 * @description: 返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
 * @param {Function} callback: 回调函数 callback([item[,index[,array]]])
 * @param {*} item:正在处理的元素。
 * @param {Number} index:正在处理的元素的索引。可选。
 * @param {Array} array:调用方法的数组实例。可选。
 * @param {Object} thisArg: 可选参数。当执行回调函数时用作 this 的值(参考对象)。
 * @returns {Number} index: 满足条件的第一个元素的索引。
 */
// 1.正常参数,箭头函数绑定不了this
const arr1 = [4, 2, 4, 43, 4];
const thisArg = { name: 'Thor' };
const ret1 = arr1.findIndex((item, index, arr) => {
    console.log('this:', this); // {}
    console.log(`操作元素：${item},操作元素的索引：${index},调用方法的数组：${arr}`);
    return item > 2;
}, thisArg);
console.log('操作值', ret1); // 0
// 2.正常参数,正常函数绑定this
const ret2 = arr1.findIndex(function _every(item, index, arr) {
    console.log('this:', this); // { name: 'Thor' }
    console.log(`操作元素：${item},操作元素的索引：${index},调用方法的数组：${arr}`); // 操作元素：3,操作元素的索引：1,调用方法的数组：2,3
    return item > 2;
}, thisArg);
console.log(ret2); // 0
