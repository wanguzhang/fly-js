/**
 * @author: 张攀钦
 * const arr = Array.prototype.map(callback([item[,index[,array]]])[, thisArg])
 * @description: 创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
 * @param {Function} callback: 回调函数 callback([item[,index[,array]]])
 * @param {*} item:正在处理的元素。
 * @param {Number} index:正在处理的元素的索引。可选。
 * @param {Array} array:调用方法的数组实例。可选。
 * @param {Object} thisArg: 可选参数。当执行回调函数时用作 this 的值(参考对象)。
 * @returns {Array} arr: 数组每个元素调用回调，返回原素组成的数组。
 */
// 1.正常参数,箭头函数绑定不了 thisArg
const arr1 = [2, 3, 4];
const thisArg = { name: 'Thor' };
const ret1 = arr1.map((item, index, arr) => {
    console.log('this:', this); // {}
    console.log(`操作元素：${item},操作元素的索引：${index},调用方法的数组：${arr}`);
    return item * 2;
}, thisArg);
console.log('操作值', ret1); // [ 4, 6, 8 ]
// 2.正常参数,正常函数绑定 thisArg
const ret2 = arr1.map(function _every(item, index, arr) {
    console.log('this:', this); // { name: 'Thor' }
    console.log(`操作元素：${item},操作元素的索引：${index},调用方法的数组：${arr}`); // 操作元素：3,操作元素的索引：1,调用方法的数组：2,3
    return item * 2;
}, thisArg);
console.log(ret2); // [ 4, 6, 8 ]
