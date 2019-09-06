/**
 * @author: 张攀钦
 * const ret = String.prototype.slice(beginIndex[, endIndex])
 * @description: 截取字符串返回新的字符串，不改变原来的字符串
 * @param {Number} beginIndex:开始索引
 * @param {Number} endIndex:结束索引，不包括技术索引。默认str.length
 * @returns {String} ret：截取之后返回新的字符串。
 */
// 1. 正常传参
const str = 'abcdefg';
const ret = str.slice(1);
console.log(ret); // bcdefg
const ret1 = str.slice(2, 5);
console.log(ret1); // cde
// 2. 传负数(索引-字符串长度)等于负索引 -3 对应e,-1对应g,但不包含结束索引
const ret3 = str.slice(-3, -1);
console.log(ret3); // ef
