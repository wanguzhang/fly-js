/**
 * @author: 张攀钦
 * @description: Array.prototype.unshift 在数组开头添加一个或多个元素。返回数组长度
 * @param: {*} item：添加到数组中的一个或多个元素
 * @returns: {Number} length 数组的长度
 * const length = Array.prototype.unshift(element1, ..., elementN);
 */
// 1.unshift
const arr = [3, 4, 5];
const ret = arr.unshift(1, 2);
console.log(arr); // [ 1, 2, 3, 4, 5 ]
console.log(ret); // 5
// 2.添加多个元素
const arr1 = [4, 5, 6];
const ret1 = arr1.unshift(...[1, 2, 3]);
console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]
console.log(ret1); // 6
