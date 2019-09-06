/**
 * @Author: 张攀钦
 * const bool = Object.isFrozen(obj)
 * @description 对象是否被冻结,Object.freeze(obj)一定是冻结了对象
 * @param {Object} obj1: 需要操作的对象。
 * @returns {Boolean} bool: 对象是否被冻结。
 */
// 1、Object.isFrozen
const obj = { age: 1 };
Object.freeze(obj);
console.log(Object.isFrozen(obj)); // true
// 一个冻结对象也是一个密封对象.
console.log(Object.isSealed(obj)); // true
// 当然,更是一个不可扩展的对象.
console.log(Object.isExtensible(obj)); // false
// 2.
const obj2 = { release: 'the kraken!' };
Object.defineProperty(obj2, 'release', { writable: false });
console.log(Object.isFrozen(obj2)); // false
// 一个冻结对象也是一个密封对象.
console.log(Object.isSealed(obj2)); // false
// 当然,更是一个不可扩展的对象.
console.log(Object.isExtensible(obj2)); // true
// 3.
const obj3 = { release: 'the kraken!' };
Object.defineProperty(obj3, 'release', { configurable: false });
console.log(Object.isFrozen(obj3)); // false
// 一个冻结对象也是一个密封对象.
console.log(Object.isSealed(obj3)); // false
// 当然,更是一个不可扩展的对象.
console.log(Object.isExtensible(obj3)); // true
