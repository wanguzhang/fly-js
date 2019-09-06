/* eslint-disable no-proto */
/**
 * @author: 张攀钦
 * const ret = Reflect.has(target, propertyKey, value[, receiver])
 * @param: {Object} target:目标对象
 * @param: {String} propertyKey:操作的属性
 * @param: {Boolean} ret:返回值
 * @description: 判断是否有个属性，不能枚举的属性也可以判断,Symbol 也可以,原型上的属性也可以判断
 */
// 昆仑
const obj = {
    name: '萧千绝',
    [Symbol.for('萧千绝')]: '萧千绝',
};
const parent = { designation: '黑水滔滔，荡尽天下' };
obj.__proto__ = parent;
Object.defineProperty(obj, 'age', { value: 40, enumerable: false, configurable: false });
console.log(obj); // { name: '萧千绝' }
console.log(obj.designation); // 黑水滔滔，荡尽天下
// 判断自身属性，不能枚举的
console.log(Reflect.has(obj, 'age')); // true;
// 判断 Symbol 类型
console.log(Reflect.has(obj, Symbol.for('萧千绝'))); // true;
// 判断原型上的属性
console.log(Reflect.has(obj, 'designation')); // true;
