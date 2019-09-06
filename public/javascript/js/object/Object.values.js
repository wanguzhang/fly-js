/**
 * @Author: 张攀钦
 * const arr = Object.values(obj)
 * @description 枚举一个实现迭代接口的 对象自身可以枚举的属性的值,不能获得Symbol
 * @param {Object} obj: 需要操作的对象。
 * @returns {*} arr: 迭代器 可以枚举属性的值
 */
// 1.字符串
const str = '23456';
console.log(Object.values(str)); // [ '2', '3', '4', '5', '6' ]
// 2.数组
const arr = [1, 2, 3];
console.log(Object.values(arr)); // [ '0', '1', '2' ]
// 3.对象
const parent = { name: 'IronMan', age: 18 };
const obj = Object.create(parent, {
    hobby: {
        value: 'I love you three thousand times',
        enumerable: false, // 属性不可枚举
    },
    test: {
        value: 'test',
        enumerable: true,
    },
});
// hobby 属性不能枚举
console.log(obj.age); // 'I love you three thousand times''
console.log(Object.values(obj)); // [ 'test' ]
