/**
 * @Author: 张攀钦
 * const obj1 = Object.preventExtensions(obj)
 * @description 阻止对象自身属性扩展，不能添加自身属性，可以修改和删除已存在属性
 * @param {Object} obj: 需要操作的对象。
 * @returns {Object} obj1: obj===obj1 为 true
 */
// 1.
const obj = { name: 'name' };
const ret = Object.preventExtensions(obj);
console.log(obj === ret); // ret
// 可以修改原来属性
obj.name = 1;
console.log(obj);
// 不能增加属性
obj.age = 1;
console.log(obj);
// 可以删除属性
delete obj.name;
console.log(obj); // {}
