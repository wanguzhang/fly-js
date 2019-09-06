/* eslint-disable eqeqeq */
/* eslint-disable no-new-wrappers */
/**
 * @author: 张攀钦
 * @description: 字符串基本用法
 */
// 1.
const str1 = 'Fury';
console.log(typeof str1); // string
console.log(str1 instanceof String);
// 2.构造函数
const str2 = new String('Fury');
console.log(typeof str2); // object
// 3.String.prototype.charAt
const str3 = 'Fury';
const ret3 = str3.charAt(3);
console.log(ret3); // y
const ret4 = str3.charAt(10);
console.log(ret4); // ''
// 4.字符串比较逻辑判断
// 空字串逻辑判断时，按 false 判断，不为空字符串，按 true 判断
console.log('' == false); // true
console.log('' === false); // false
console.log('a' == true); // true
/**
 * 5.
 * const str = String.prototype.fromCharCode(num1, ..., numN)
 * @description: 由指定的UTF-16代码单元序列创建的字符串。
 * @param {Number} num 一系列UTF-16代码单元的数字。范围介于0到65535
 * @returns {String} str 一个长度为N的字符串，由N个指定的UTF-16代码单元组成.
 */
console.log(String.fromCharCode(65, 66, 67)); // ABC
console.log(String.fromCharCode(0x2014)); // -
console.log(String.fromCharCode(0x12014)); // -
/**
 * @author: 张攀钦
 * const num = String.prototype.charCodeAt(index)
 * @param {Number} index:字符串索引一个大于等于 0，小于字符串长度的整数。如果不是一个数值，则默认为 0。
 * @returns {Number} num:表示给定索引处（String中index索引处）字符的 UTF-16 代码单元值的数字；如果索引超出范围，则返回 NaN。
 * @description:
 */
const str4 = 'ABC';
console.log(str4.charCodeAt(0)); // 65
console.log(str4.charCodeAt(4)); // NaN

/**
 * @author: 张攀钦
 * const str = String.prototype.concat(string2, string3[, ..., stringN])
 * @param {String}  stringN:和源字符串链接的多个字符串
 * @returns {String} str:链接之后返回的新字符串,原字符串不变
 * @description:将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。
 */
const name = '古拉斯·约瑟夫·弗瑞：';
const name1 = 'Nicholas ';
const name2 = 'Joseph ';
const name3 = 'Fury ';
const ret5 = name.concat(name1, name2, name3);
console.log(name); // 古拉斯·约瑟夫·弗瑞：
console.log(name1); // Nicholas
console.log(name2); // Joseph
console.log(name3); // Fury
console.log(ret5); // 古拉斯·约瑟夫·弗瑞：Nicholas Joseph Fury

/**
 * @author: 张攀钦
 * const bool = String.prototype.includes(searchString[, fromIndex=0])
 * @param {String} searchString:要在此字符串中搜索的字符串。
 * @param {Number} fromIndex:从某个索引位置开始,
 * @description: 用于判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false。
 */
console.log('Blue Whale'.includes('lu')); // true
console.log('Blue Whale'.includes('lu', 2)); // false

/**
 * @author: 张攀钦
 * const bool = String.prototype.endsWith(searchString[, length=str.length])
 * @param {String} searchString:要在此字符串中搜索的字符串。
 * @param {Number} length:字符串的长度，相当于将字符串截取length 长度
 * @description: 用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 true 或 false。
 */
const str11 = 'i love you three thousand times';
console.log(str11.endsWith('times')); // true
console.log(str11.endsWith('i', 1)); // true
/**
 * @author: 张攀钦
 * const index=String.prototype.indexOf(searchValue[, fromIndex])
 * @description:字符串第一次出现searchValue的索引，从fromIndex开始搜索,未找到，则返回-1。
 * @param {String} searchValue:一个字符串表示被查找的值。
 * @param {Number} fromIndex: 开始查询的索引
 * @returns {Number} index:指定值的第一次出现的索引; 如果没有找到 -1。
 */
const str12 = 'i love you three thousand times';
console.log(str12.indexOf('l')); // 2
console.log(str12.indexOf('l', 3)); // -1
console.log(str12.indexOf('l', 1 - str12.length)); // 2
/**
 * @author: 张攀钦
 * const index=String.prototype.lastIndexOf(searchValue[, endIndex=str.length-1])
 * @description:字符串第一次出现searchValue的索引，将 str的按strLength改变
 * @param {String} searchValue:一个字符串表示被查找的值。
 * @param {Number} endIndex: 字符串截止到索引处
 * @returns {Number} index:指定值的第一次出现的索引; 如果没有找到 -1。
 */
const str13 = 'i love you three thousand times';
console.log('str13字符串长度为：', str13.length); // 31
console.log(str13.lastIndexOf('times')); // 26
console.log(str13.lastIndexOf('s')); // 30
// 实际查找'i love '
console.log(str13.lastIndexOf('ve ', 6)); // 4
// 实际查找'i love'
console.log(str13.lastIndexOf('ve', 5)); // 4
// 开始
console.log(str13.lastIndexOf('i', 1 - str13.length)); // 0
console.log(str13.lastIndexOf('i', -1)); // 0
/**
 * @author: 张攀钦
 * const str = String.prototype.toLowerCase() 字符串转小写返回，不影响原来字符串
 * const str = String.prototype.toUpperCase() 字符串转大写返回，不影响原来字符串
 * @description:
 */
const str14 = 'abcDGE张';
const ret14 = str14.toLowerCase();
console.log(ret14); // abcdge张
const ret15 = str14.toUpperCase();
console.log(ret15); // ABCDGE张
