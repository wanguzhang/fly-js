/**
 * @author: 张攀钦
 * @description: Array.prototype.pop()从数组中删除最后一个元素，并返回该元素的值。此方法改变数组长度。
 * @returns {*} item: 从数组删除的元素，数组为空时，返回 undefined
 * const item = Array.prototype.pop()
 */
const arr = [1, 2, 3, 4, 5];
const item = arr.pop();
console.log(item); // 5
console.log(arr); // [ 1, 2, 3, 4 ]
