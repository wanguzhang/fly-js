/**
 * @author: 张攀钦
 * const index = Array.prototype.indexOf(searchElement[, fromIndex = 0])
 * @description: 返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
 * @param {*} searchElement: 查找元素
 * @param {Number} fromIndex: 开始索引
 * @returns {Number} index: 返回给定元素的索引
 */
// 1.正常参数
const arr1 = [2, 3, 4, 5, 6];
const index1 = arr1.indexOf(3);
console.log(index1); // 1
const index2 = arr1.indexOf(3, 2);
console.log(index2); // -1
