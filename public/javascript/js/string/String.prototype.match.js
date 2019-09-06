/**
 * @author: 张攀钦
 * const ret = String.prototype.match(regexp)
 * @param {RegExp} regexp:正则表达式
 * @returns {Array} ret 匹配到的结果，一个Array，其内容取决于global（g）标志的存在与否，如果未找到匹配则为null。
 * groups: 一个捕获组数组 或 undefined（如果没有定义命名捕获组）。
 * index: 匹配的结果的开始位置
 * input: 搜索的字符串.
 * @description:
 */
// 1. 正则表达式带g,匹配成功之后，从剩余的字符串匹配。尽可能的匹配符合最多的规则。
const str1 = 'aaaa1aaaa1aaaa';
const ret1 = str1.match(/aa/g);
console.log(ret1); // ['aa', 'aa', 'aa', 'aa', 'aa', 'aa'];
// 尽可能匹配多的规则
const ret2 = str1.match(/aa*/g);
console.log(ret2); // [ 'aaaa', 'aaaa', 'aaaa' ]

// 2.正则表达式不带g,尽可能多的匹配第一个，然后返回数据
const str3 = 'aaaa1aaaa1aaaa';
const ret3 = str3.match(/aa/);
console.log(ret3); // [ 'aa', index: 0, input: 'aaaa1aaaa1aaaa', groups: undefined ]
console.log(ret3[0]); // aa
// 匹配的结果的开始位置
console.log(ret3.index); // 0
// 搜索的字符串.
console.log(ret3.input); // aaaa1aaaa1aaaa
// 一个捕获组数组 或 undefined（如果没有定义命名捕获组）。
console.log(ret3.groups); // undefined

const ret4 = str3.match(/aa*/);
console.log(ret4); // [ 'aaaa', index: 0, input: 'aaaa1aaaa1aaaa', groups: undefined ]

// 3.操作字符串
const ret5 = str3.match('aaa');
console.log(ret5); // [ 'aaa', index: 0, input: 'aaaa1aaaa1aaaa', groups: undefined ]
