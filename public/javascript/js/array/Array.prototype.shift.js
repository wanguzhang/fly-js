/**
 * @author: 张攀钦
 * @description: Array.prototype.shift 从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
 * @returns: {*} item：数组中的第一个元素，如果数组为空则返回undefined 。
 * const item = Array.prototype.shift();
 */
// 1、shift
const arr = [1, 3, 2, 5, 4];
const ret = arr.shift();
console.log(arr); // [ 3, 2, 5, 4 ]
console.log(ret); // 1
