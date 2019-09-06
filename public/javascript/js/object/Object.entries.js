/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/**
 * @Author: 张攀钦
 * const arr = Object.entries(obj)
 * @description 返回一个给定对象自身可枚举属性的键值对数组，
 * 其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环也枚举原型链中的属性）。
 * @param {Object} obj: 需要操作的对象。
 * @returns {Array} arr
 */
// 1.
const obj = { name: 'name', age: 11 };
const arr = Object.entries(obj);
console.log(arr); // [ [ 'name', 'name' ], [ 'age', 11 ] ]
for (const [key, value] of arr) {
    console.log('key', key);
    console.log('value', value);
}
// 2. 枚举对象自身可以枚举的属性
const parent = { name: 'IronMan', age: 18 };
const obj2 = Object.create(parent, {
    hobby: {
        value: 'I love you three thousand times',
        enumerable: false, // 属性不可枚举
    },
    test: {
        value: 'test',
        enumerable: true,
    },
});
console.log('从 prototype 集成 name 和 age 属性', obj2.name); // IronMan
console.log('从 prototype 集成 name 和 age 属性', obj2.age); // 18
console.log('不可枚举属性，hobby', obj2.hobby); // I love you three thousand times
// 只能遍历对象自身可枚举的属性
const arr2 = Object.entries(obj2);
for (const [key, value] of arr2) {
    console.log('key,value=>', `${key},${value}`); // key,value test,test
}
// forin // 遍历自身和原型上可枚举的属性
for (const key in obj2) {
    // 属性 key--值 value test--test
    // 属性 key--值 value name--IronMan
    // 属性 key--值 value age--18
    console.log('属性 key--值 value', `${key}--${obj2[key]}`);
}
