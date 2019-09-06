/* eslint-disable new-cap */
/* eslint-disable no-unused-expressions */
/* eslint-disable symbol-description */
/* eslint-disable no-proto */
/**
 * @Author: 张攀钦
 * const ret = Object.getPrototypeOf(obj)
 * @description 方法返回指定对象的原型对象 ret===obj.__proto__ 为 true
 * @param {Object} obj: 需要操作的对象。
 * @returns {Object} ret: 操作对象的原型对象
 */
// 1.Object.create()
const parent = { name: 'Hulk', age: 18 };
// Object.create(parent) 创建的是在返回对象__proto__上添加Parent
const obj = Object.create(parent);
obj.prototype = { height: 178, description: '完美身高，和我一样，哈哈!' };
console.log(obj.prototype === parent); // false
console.log(obj.__proto__ === parent); // false
const ret = Object.getPrototypeOf(obj);
console.log(ret); // { name: 'Hulk', age: 18 }
// 2.直接给对象复制__proto__
const obj2 = { weight: '58kg', description: '数据有问题吧,身材一般啊' };
const prototype2 = { [Symbol()]: '测试' };
obj2.prototype = prototype2;
const ret2 = Object.getPrototypeOf(obj2);
console.log(ret2); // {}
obj2.__proto__ = prototype2;
const ret3 = Object.getPrototypeOf(obj2);
console.log(ret3); // { [Symbol()]: '测试' }
console.log(ret3 === prototype2); // true
// 3.Function 获取
const getName = function _getName() {
    return 'Hulk';
};
const getAge = function _getAge() {
    return 18;
};
getAge.prototype = getName;
const ret4 = Object.getPrototypeOf(getAge);
console.log(ret4 === Object.__proto__); // true
const obj4 = new getAge();
const ret5 = Object.getPrototypeOf(obj4);
ret5 === obj4.__proto__;
console.log(ret5 === obj4.__proto__); // true
// 4. class
class A {}
class B extends A {}
const ret6 = Object.getPrototypeOf(B);
console.log(B.__proto__ === A); // true
console.log(B.__proto__ === ret6); // true
const b = new B();
const ret7 = Object.getPrototypeOf(b);
console.log(b.__proto__ === ret7); // true
