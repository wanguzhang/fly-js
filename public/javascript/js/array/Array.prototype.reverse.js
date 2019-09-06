/**
 * @author: 张攀钦
 * @description: Array.prototype.reverse 方法将数组中元素的位置颠倒,并返回该数组。该方法会改变原数组。
 * @returns: {Array} arr：调用原来方法的数组实例。
 * const arr = Array.prototype.reverse();
 */
// 1、reverse
const arr = [1, 3, 2, 5, 4];
const ret = arr.reverse();
console.log(arr); // [ 4, 5, 2, 3, 1 ]
console.log(ret); // [ 4, 5, 2, 3, 1 ]
console.log(ret === arr); // true
