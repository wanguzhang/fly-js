/**
 * @author: 张攀钦
 * const index = String.prototype.search(regexp)
 * @description: 搜寻是否匹配正则表达式，匹配到返回索引，匹配不到返回-1;
 * @param {RegExp} regexp:正则表达式
 * @returns {Number} index：匹配到返回索引，匹配不到返回-1;
 */
// 1.
const str1 = 'aaaa1aaaa1aaaa';
const index1 = str1.search(/1aa/g);
console.log(index1); // 4
const index2 = str1.search('ax');
console.log(index2); // -1
