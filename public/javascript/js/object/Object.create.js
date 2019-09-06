/* eslint-disable no-proto */
/**
 * @Author: 张攀钦
 * 使用指定的原型对象和属性创建一个新对象。
 * const ret=Object.create(proto, [propertiesObject])
 * @description 以对象 proto 作为原型对象创建新的对象 ret.__proto__ 就是 proto
 * @param proto: 新创建对象的原型对象。
 * @param propertiesObject: 可选。定义添加到创建新对象 ret 上属性及属性描述（可枚举，默认值，是否可以修改）
 * @returns ret 一个新对象，带着指定的原型对象和属性
 */
// 1、简单需求
const prototype = { age: 'age', name: 'name' };
const newObject = Object.create(prototype, {
    sex: {
        value: 'sex',
        enumerable: true, // 是否可以被枚举
    },
    hobby: {
        value: 'hobby',
        enumerable: true, // 是否可以被枚举
    },
});
console.log(newObject); // { sex: 'sex', hobby: 'hobby' }
console.log(newObject.__proto__ === prototype); // true

const Parent = function aa(name) {
    this.name = name;
    this.getName = function _getName() {
        console.log('getName');
        return this.name;
    };
};
Parent.prototype.move = function _move() {
    console.log('move');
};

const Son = function son(age, name) {
    Parent.call(this, name);
    this.age = age;
    this.getAge = function _getAge() {
        return this.age;
    };
};
Son.prototype = Object.create(Parent.prototype);
console.log(Son.prototype === Parent.prototype); // false
console.log(Son.prototype.__proto__ === Parent.prototype); // true
debugger;
console.log(Son);
