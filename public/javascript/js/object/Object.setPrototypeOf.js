/* eslint-disable no-proto */
/**
 * @Author: 张攀钦
 * const ret=Object.setPrototypeOf(obj, __proto__)
 * @description 设置对象的原型对象obj.__proto__ === __proto__ 为 true。ES6 正式推荐的设置原型对象的方法。
 * @param {Object} obj: 需要操作的对象。
 * @param {Object} __proto__: obj 的原型对象。
 * @returns {Object} ret ret===obj 为 true
 */
// 1.Object.create()
const parent = { name: 'Hulk', age: 18 };
const son = {};
const obj = Object.setPrototypeOf(son, parent);
obj.prototype = { height: 178, description: '完美身高，和我一样，哈哈!' };
console.log(son === obj); // true
console.log(son.prototype === parent); // false
console.log(son.prototype.__proto__ === parent); // false
console.log(son.__proto__ === parent); // true
const ret = Object.getPrototypeOf(obj);
console.log(ret); // { name: 'Hulk', age: 18 }
// 2.Function 设置原型
const getName = function _getName() {
    return 'Hulk';
};
const getAge = function _getAge() {
    return 18;
};
Object.setPrototypeOf(getAge, getName);
const ret4 = Object.getPrototypeOf(getAge);
console.log(getAge.__proto__ === getName); // true
console.log(getAge.__proto__ === ret4); // true
console.log(getName === ret4); // true
// 4. class
class A {}
class B {}
Object.setPrototypeOf(B, A);
const ret6 = Object.getPrototypeOf(B);
console.log(B.__proto__ === A); // true
console.log(B.__proto__ === ret6); // true
const b = new B();
const ret7 = Object.getPrototypeOf(b);
console.log(b.__proto__ === ret7); // true
