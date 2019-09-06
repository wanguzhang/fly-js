/**
 * @author: 张攀钦
 * const str = String.prototype.substring(indexStart[, indexEnd])
 * @description: 返回一个字符串在开始索引到结束索引之间的一个子集
 * @param {Number} indexStart:开始索引
 * @param {Number} indexEnd:结束索引
 * @returns {String} str:截取之后返回新的字符串
 */
// 1. 正常传参
const str = 'abcdefg';
const ret = str.substring(1);
console.log(ret); // bcdefg
const ret1 = str.substring(2, 5);
console.log(ret1); // cde
// 2. 传负数(索引-字符串长度)等于负索引 -3 对应e,-1对应g,但不包含结束索引
const ret3 = str.substring(-3, -1);
console.log(ret3); // ''空字符串
