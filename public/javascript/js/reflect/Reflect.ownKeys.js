/* eslint-disable no-proto */
/**
 * @author: 张攀钦
 * const arr = Reflect.ownKeys(target);
 * @param: {Object} target:目标对象
 * @param: {Array} ret:返回值
 * @description: 获取自身所有属性，包括不能枚举的属性,Symbol
 */
// 昆仑
const obj = {
    name: '萧千绝',
    [Symbol.for('萧千绝')]: '萧千绝',
};
const parent = { designation: '黑水滔滔，荡尽天下' };
obj.__proto__ = parent;
Object.defineProperty(obj, 'age', { value: 40, enumerable: false, configurable: false });
console.log(Reflect.ownKeys(obj));
