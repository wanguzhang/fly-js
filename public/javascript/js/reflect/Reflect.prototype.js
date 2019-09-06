/* eslint-disable no-proto */
/**
 * @author: 张攀钦
 * const obj=Reflect.getPrototypeOf(target)// 获取 target 的原型,不存在返回 null
 * const bool=Reflect.setPrototypeOf(target,proto)// 设置 target 的原型,设置陈工返回 true
 * @description:
 */
const obj = {
    name: '萧千绝',
    [Symbol.for('萧千绝')]: '萧千绝',
};
const parent = { designation: '黑水滔滔，荡尽天下' };
obj.__proto__ = parent;
console.log(Reflect.getPrototypeOf(obj)); // { designation: '黑水滔滔，荡尽天下' }
console.log(Reflect.setPrototypeOf(obj, { age: 30 })); // true
console.log(obj.__proto__); // { age: 30 }
