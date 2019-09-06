/* eslint-disable no-array-constructor */
/**
 * @author: 张攀钦
 * @description: Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
 * @param {*} elementN:任意个参数，将按顺序成为返回数组中的元素。
 * @returns {Array} array:新的数组实例。
 * const array=Array.of(element0[, element1[, ...[, elementN]]]);
 */
// 1.
const arr = Array.of(7);
console.log(arr); // [7]
// 2.
const arr1 = Array.of(1, 2, 3);
console.log(arr1); // [1, 2, 3]
// 3.
const arr2 = Array(7);
console.log(arr2); // [ , , , , , , ]
// 4.
const arr3 = Array(1, 2, 3);
console.log(arr3); // [1, 2, 3]
// 5.
const obj = [1, 2, 3, 4];
const arr4 = Array.of(obj);
console.log(arr4); // [ [ 1, 2, 3, 4 ] ]
// 6.
const arr5 = Array.of(...obj);
console.log(arr5); // [ 1, 2, 3, 4 ]
