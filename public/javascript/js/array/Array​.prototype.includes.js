/**
 * @author: 张攀钦
 * @description: 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
 * @param {*} valueToFind：需要去判断的变量
 * @param {Number} 可选，fromIndex开始位置的索引，默认为0。
 * @returns {Boolean} bool 包含返回true。
 * const bool = Array.prototype.includes(valueToFind[, fromIndex]);
 */
// 1、
const arr = [1, 2, 3];
const ret1 = arr.includes(1);
console.log(ret1); // true
// 2、
const ret2 = arr.includes(1, 1);
console.log(ret2); // false
// 3、索引-数组长度可以得出负数索引
const ret3 = arr.includes(2, -2);
console.log(ret3); // true
// 4、索引-
const ret4 = arr.includes(1, -2);
console.log(ret4); // false
// 5、索引为负数，绝对值大于数组长度，整个数组搜索
const ret5 = arr.includes(1, -5);
console.log(ret5); // true
