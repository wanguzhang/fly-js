/**
 * @Author: 张攀钦
 * const arr = Object.getOwnPropertyNames(obj)
 * @description 返回对象自身属性名称的数组。不可枚举和可以枚举的都会返回了。
 * @param {Object} obj: 需要操作的对象。
 * @returns {Array} arr 对象自身全部属性。
 */
const parent = { name: 'Captain America', age: 100 };
const obj = Object.create(parent, {
    hobby: {
        value: '我错过了一个约会!',
        enumerable: false, // false,属性不可枚举
    },
});
obj.gender = '男';
console.log('从原型对象parent 获得 name 属性:', obj.name); // Captain America
console.log(obj); // { gender: '男' }
const arr = Object.getOwnPropertyNames(obj);
console.log(arr); // [ 'hobby', 'gender' ]
