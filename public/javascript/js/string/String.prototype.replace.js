/**
 * @author: 张攀钦
 * const ret = String.prototype.replace(regexp, newSubStr|function)
 * @description: 将字符串符合正则表达式的部分替换，返回新的字符串，不改变原来的字符串。
 * @param {RegExp} regexp:正则表达式
 * @param {String} newSubStr:匹配的结果替换成对应的字符串
 * @param {Function} function:匹配的结果执行回调函数
 * @returns {String} ret 字符串实例替换之后返回新的字符串
 */
// 1.返回新的字符串，不改变原来的字符串。
const str1 = 'Carol, the night';
const ret1 = str1.replace('Carol', 'Alisa');
console.log(str1); // Carol, the night
console.log(ret1); // Alisa, the night

// 2.匹配正则表达式，不带g，只替换第一个符合规则
const str2 = 'aaaa1saaaa1saaaa';
const ret2 = str2.replace(/aaaa/, 'Carol');
console.log(ret2); // Carol1saaaa1saaaa

// 3.匹配正则表达式,带g,替换全部符合规则。
const str3 = 'aaaa1saaaa1saaaa';
const ret3 = str3.replace(/aaaa/g, 'Carol');
console.log(ret3); // Carol1sCarol1sCarol

/**
 * 匹配的结果执行回调函数
 * String.prototype.replace(regexp, callback(match,p1[,p2,...]),offset,string)
 * @param {String} match:匹配的子串
 * @param {} pn 正则表达式，分组时,每个匹配到的结果
 * @param {Number} offset:匹配到的子字符串在原字符串中的索引
 * @param {String} string:操作方法的实例
 */
const str4 = 'aaaa1saaaa1saaaa';
const ret4 = str4.replace(/(aaaa)(1s)/g, (match, p1, p2, offset, string) => {
    console.log(match); // aaaa1s
    console.log(p1); // aaaa
    console.log(p2); // 1s
    console.log(offset); // 0
    console.log(string); // aaaa1saaaa1saaaa
    return `${match}M`;
});
console.log(ret4);
