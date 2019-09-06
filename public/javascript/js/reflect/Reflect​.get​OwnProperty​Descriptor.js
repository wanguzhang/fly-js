/* eslint-disable no-proto */
/**
 * @author: 张攀钦
 * const arr = Reflect.getOwnPropertyDescriptor(target, propertyKey)
 * @param: {Object} target:目标对象
 * @param: {*} propertyKey:目标对象的属性
 * @param: {Object} ret:返回值
 * @description: 获取自身属性的属性描述符。Symbol和不能枚举的都可以获取
 */
// 昆仑
const obj = {
    name: '萧千绝',
    [Symbol.for('萧千绝')]: '萧千绝',
};
const parent = { designation: '黑水滔滔，荡尽天下' };
obj.__proto__ = parent;
Object.defineProperty(obj, 'age', { value: 40, enumerable: false, configurable: false });
console.log(Reflect.getOwnPropertyDescriptor(obj, 'name')); // { value: '萧千绝',  writable: true,  enumerable: true,  configurable: true }
console.log(Reflect.getOwnPropertyDescriptor(obj, Symbol.for('萧千绝'))); // { value: '萧千绝',  writable: true,  enumerable: true,  configurable: true }
console.log(Reflect.getOwnPropertyDescriptor(obj, 'age')); // { value: 40,  writable: false,  enumerable: false,  configurable: false }
