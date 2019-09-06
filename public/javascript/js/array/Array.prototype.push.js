/**
 * @author: 张攀钦
 * @description: Array.prototype.push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。
 * @param {*} elementN: 添加到数组的元素
 * @returns {Number} length: 数组的新的长度
 * const length = Array.prototype.push(element1, ..., elementN);
 */
// 1、push 一个元素
const arr = [1, 2, 3];
const length = arr.push(6);
console.log(length); // 4
console.log(arr); // [ 1, 2, 3, 6 ]
// 2、push 多个元素
const arr1 = [1, 2, 3];
const length1 = arr1.push(5, 7);
console.log(length1); // 5
// 3、push(...arr)
const arr2 = [1, 2, 3];
const arr3 = [1, 4, 7];
const length2 = arr2.push(...arr3);
console.log(arr2); // [ 1, 2, 3, 1, 4, 7 ]
console.log(length2); // 6
