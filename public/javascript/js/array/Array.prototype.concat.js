/**
 * @author: 张攀钦
 * const newArray=Array.prototype.concat(value1[, value2[, ...[, valueN]]])
 * @description: Array.prototype.concat 连接数组，返回一个新的数组。不会改变原来的数组。
 * @param {*} value:需要添加的元素
 * @returns {Array} newArray:连接之后新的数组
 */
// 1.
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
const ret = arr.concat(arr2);
console.log(arr); // [ 1, 2, 3 ]
console.log(arr2); // [ 4, 5, 6 ]
console.log(ret); // [ 1, 2, 3, 4, 5, 6 ]
// 2.建议用这个
const ret2 = [...arr, ...arr2];
console.log(arr); // [ 1, 2, 3 ]
console.log(arr2); // [ 4, 5, 6 ]
console.log(ret2); // [ 1, 2, 3, 4, 5, 6 ]
