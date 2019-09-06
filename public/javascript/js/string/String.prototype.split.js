/**
 * @author: 张攀钦
 * const arr = String.prototype.split([separator[, limit]])
 * @description: 截取字符串返回新的字符串，不改变原来的字符串
 * @param {Number} separator:一个字符串或正则表达式
 * @param {Number} limit:一个整数，限定返回的分割片段数量
 * @returns {Array} arr:分割之后返回结果
 */
// 1. 正常传参
const str = 'a12b12c12d12e12f12g';
const ret = str.split(/12/);
console.log(ret); // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]
const ret1 = str.split(/12/, 3);
console.log(ret1); // [ 'a', 'b', 'c' ]
