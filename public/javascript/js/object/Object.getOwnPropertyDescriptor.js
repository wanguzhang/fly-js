/**
 * @Author: 张攀钦
 * const ret=Object.getOwnPropertyDescriptor(obj, prop)
 * @description 返回指定对象上属性对应的属性描述符。不能返回原型对象上的。
 * @param {Object} obj: 需要操作的对象。
 * @param {String} prop: 对象自身属性。
 * @returns {Object} ret 对象属性操作符对象
 */
const parent = { age: 18 };
const obj = Object.create(parent);
obj.name = 'Thanos';

// 1.获取对象自身属性操作符
const ret = Object.getOwnPropertyDescriptor(obj, 'name');
console.log('对象自身属性操作符', ret); // { value: 'Thanos',  writable: true,  enumerable: true,  configurable: true }

// 2.获取原型对象上的属性，不能获得
const ret2 = Object.getOwnPropertyDescriptor(obj, 'age');
console.log('原型对象自身属性操作符', ret2); // undefined
