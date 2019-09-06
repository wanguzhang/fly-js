/**
 * @author: 张攀钦
 * const regexp=new RegExp(pattern [, flags])
 * @param {String} 正则表达式
 * @param {String} flags
 * flags 可以为下列组合
 * g：全局匹配;找到所有匹配，而不是在第一个匹配后停止
 * i：忽略大小写
 * y：粘性匹配; 匹配成功之后，会从剩下的字符串的开始做匹配，匹配不上就没有后续结果了。
 * regexp.lastIndex g，y模式生效，记录下次开始的匹配位置,当匹配失败会赋值为 0
 * @description: 匹配会最大限度的符合正则表达式需要匹配的结果
 */
// 0.正则表达式会尽可能多的匹配
const str = 'aaaa11aaaa11aaaa11';
const regexp = /a+/g;
console.log(regexp.exec(str)); // [ 'aaaa', index: 0, input: 'aaaa11aaaa11aaaa11' ]
console.log(regexp.exec(str)); // [ 'aaaa', index: 6, input: 'aaaa11aaaa11aaaa11' ]
console.log(regexp.exec(str)); // [ 'aaaa', index: 12, input: 'aaaa11aaaa11aaaa11' ]
// 0-1 不带 g
const str0 = 'abc11abbc11abbbc';
const reg0 = new RegExp('ab+c');
const ret01 = reg0.exec(str0);
const ret02 = reg0.exec(str0);
const ret03 = reg0.exec(str0);
console.log(ret01); // [ 'abc', index: 0, input: 'abc11abbc11abbbc' ]
console.log(ret02); // [ 'abc', index: 0, input: 'abc11abbc11abbbc' ]
console.log(ret03); // [ 'abc', index: 0, input: 'abc11abbc11abbbc' ]
// 1.g
const str1 = 'abc11abbc11abbbc';
const reg1 = new RegExp('ab+c', 'g');
const ret1 = reg1.exec(str1);
const ret2 = reg1.exec(str1);
const ret3 = reg1.exec(str1);
console.log(ret1); // [ 'abc', index: 0, input: 'abc11abbc11abbbc' ]
console.log(ret2); // [ 'abbc', index: 5, input: 'abc11abbc11abbbc' ]
console.log(ret3); // [ 'abbbc', index: 11, input: 'abc11abbc11abbbc' ]
// 2.i
const str3 = 'aaaa11aaaa11aaaa11';
const regexp3 = /aA+/i;
console.log(regexp3.exec(str3)); // [ 'aaaa', index: 0, input: 'aaaa11aaaa11aaaa11' ]
console.log(regexp3.exec(str3)); // [ 'aaaa', index: 6, input: 'aaaa11aaaa11aaaa11' ]
console.log(regexp3.exec(str3)); // [ 'aaaa', index: 12, input: 'aaaa11aaaa11aaaa11' ]
// 3.y
const str4 = 'aaaa11aaaa11aaaa11';
const regexp4 = /aa/y;
// 第一次运行 匹配 aaaa11aaaa11aaaa11，剩下11aaaa11aaaa11
console.log(regexp4.exec(str4)); // [ 'aa', index: 0, input: 'aaaa11aaaa11aaaa11' ]
// 第二次运行 匹配 11aaaa11aaaa11，没有匹配到结果，剩下
console.log(regexp4.exec(str4)); // [ 'aa', index: 2, input: 'aaaa11aaaa11aaaa11' ]
console.log(regexp4.exec(str4)); // null
// RegExp.prototype.test()用来查看正则表达式与指定的字符串是否匹配。返回 true 或 false。
const str5 = 'aaaa11aaaa11aaaa11';
const regexp5 = /aa/y;
console.log(regexp5.test(str5)); // true
console.log(regexp5.test(str5)); // true
// 匹配失败，lastIndex 设置为 0
console.log(regexp5.test(str5)); // false
// 匹配成功，lastIndex 设置为 2
console.log(regexp5.test(str5)); // true
