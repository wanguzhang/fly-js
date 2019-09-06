/**
 * @author: 张攀钦
 * const obj = Array.prototype.forEach(callback([item[,index[,array]]])[, thisArg])
 * @description: 对数组的每个元素执行一次提供的函数。
 * @param {Function} callback: 回调函数
 * @param {*} item:正在处理的元素。
 * @param {Number} index:正在处理的元素的索引。可选。
 * @param {Array} array:调用方法的数组实例。可选。
 * @param {Object} thisArg: 可选参数。当执行回调函数时用作 this 的值(参考对象)。
 * @returns {undefined} obj: undefined
 */
// 1.正常参数,箭头函数绑定不了this
const arr1 = [2, 3];
const thisArg = { name: 'Thor' };
arr1.forEach((item, index, arr) => {
    console.log('this:', this); // {}
    console.log(`操作元素：${item},操作元素的索引：${index},调用方法的数组：${arr}`);
}, thisArg);
// 2.正常参数,正常函数绑定this
const arr2 = [2, 3];
arr2.forEach(function _forEach(item, index, arr) {
    console.log('this:', this); // { name: 'Thor' }
    console.log(`操作元素：${item},操作元素的索引：${index},调用方法的数组：${arr}`); // 操作元素：3,操作元素的索引：1,调用方法的数组：2,3
}, thisArg);
