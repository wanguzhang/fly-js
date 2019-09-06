/**
 * @Author: 张攀钦
 * const bool = Object.is(obj1,obj2),基本和===类似
 * @description 方法返回指定对象的原型对象 ret===obj.__proto__ 为 true
 * @param {*} obj1: 需要操作的对象。
 * @param {*} obj2: 需要操作的对象。
 * @returns {Boolean} bool: 两个参数是否相等
 */

// 两个值都是 null
// 两个值都是 true 或者都是 false
// 两个值是由相同个数的字符按照相同的顺序组成的字符串
// 两个值指向同一个对象
// 两个值都是数字并且
// 都是正零 +0
// 都是负零 -0
// 都是 NaN
// 都是除零和 NaN 外的其它同一个数字
// 1.比较 两个值都是相同的 undefined
console.log(Object.is(undefined, undefined)); // true
console.log(Object.is(null, null)); // true
console.log(Object.is(true, true)); // true
console.log(Object.is(false, false)); // true
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is('a', 'a')); // true
console.log(Object.is('a', 'a')); // true
// 2.比较值相同类型不同
console.log(Object.is('1', 1)); // false
console.log(Object.is(+0, -0)); // false
console.log(Object.is(0, -0)); // false
console.log(Object.is(0, +0)); // true
// 3. 比较对象
const obj = { age: 1 };
const obj2 = { age: 1 };
console.log(Object.is(obj, obj2)); // false
