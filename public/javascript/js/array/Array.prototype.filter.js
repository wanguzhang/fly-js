/**
 * @author: 张攀钦
 * const arr = Array.prototype.filter(callback([item[,index[,array]]])[, thisArg])
 * @description: 一个数组内的所有元素是否都能通过某个指定函数的测试。返回true。
 * @param {Function} callback: 回调函数 callback([item[,index[,array]]])
 * @param {*} item:正在处理的元素。
 * @param {Number} index:正在处理的元素的索引。可选。
 * @param {Array} array:调用方法的数组实例。可选。
 * @param {Object} thisArg: 可选参数。当执行回调函数时用作 this 的值(参考对象)。
 * @returns {Array} arr: 返回符合断言的元素。
 */
// 1.正常参数,箭头函数绑定不了this
const arr1 = [2, 3, 6, 4, 9, 8];
const thisArg = { name: 'Thor' };
const ret1 = arr1.filter((item, index, arr) => {
    console.log('this:', this); // {}
    console.log(`操作元素：${item},操作元素的索引：${index},调用方法的数组：${arr}`);
    return item > 4;
}, thisArg);
console.log('操作值', ret1); // [ 6, 9, 8 ]
// 2.正常参数,正常函数绑定this
const ret2 = arr1.filter(function _every(item, index, arr) {
    console.log('this:', this); // { name: 'Thor' }
    console.log(`操作元素：${item},操作元素的索引：${index},调用方法的数组：${arr}`); // 操作元素：3,操作元素的索引：1,调用方法的数组：2,3
    return item > 4;
}, thisArg);
console.log('操作值', ret2); // [ 6, 9, 8 ]
