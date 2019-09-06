/**
 * @Author: 张攀钦
 * const ret = Object.defineProperties(obj, props)
 * const ret = Object.defineProperty(obj, prop, descriptor) // 新增属性或者修改已有属性描述，并返回该对象 obj
 * @description 在一个对象上新增新的属性或修改现有属性及属性描述，并返回该对象 obj
 * @param obj: 需要操作的对象。
 * @param props: 属性描述
 * @returns ret 一个新对象，带着指定的原型对象和属性
 */
// 1、简单需求
const prototype = { age: 'age', name: 'name' };
const newObject = Object.defineProperties(prototype, {
    sex: {
        value: 'sex', // 属性的值，默认 undefined
        enumerable: true, // 是否可以被枚举
        configurable: true, // 默认 false。为 true 表示 sex 属性可以删除以及可以改变属性描述符
        writable: true, // 默认 false。为 true 表示 value 能被赋值运算符改变
    },
    hobby: {
        value: 'hobby',
        enumerable: false, // 是否可以被枚举
        configurable: false, // 默认 false。为 true 表示 hobby 属性可以删除以及可以改变属性描述符
        writable: false, // 默认 false。为 true 表示 value 能被赋值运算符改变
    },
    test: {
        value: 'test',
        configurable: true,
    },
});
// hobby 属性描述符 enumerable 为 false,表示对象该属性不能枚举，但是可以取到值
console.log(newObject); // { age: 'age', name: 'name', sex: 'sex' }
console.log(newObject.hobby); // hobby
// hobby 属性描述符 configurable 为 true,表示对象 hobby 属性不能修改
newObject.hobby = 'hobby修改';
console.log(newObject.hobby); // hobby
// configurable: true,表示属性可以删除
delete newObject.hobby;
delete newObject.sex;
console.log(newObject.hobby); // hobby
console.log(newObject.sex); // undefined
// test 不能被修改
prototype.test = '11';
console.log(prototype.test);
Object.defineProperties(prototype, {
    test: {
        value: 'test11',
        enumerable: true,
        configurable: true,
        writable: true,
    },
});
console.log(prototype); // { age: 'age', name: 'name', test: 'test11' }
// test 不能被修改
prototype.test = '11';
console.log(prototype.test); // 11
