/**
 * @Author: 张攀钦
 * const arr = Object.getOwnPropertySymbols(obj)
 * @description 返回一个对象自身的 Symbol 属性
 * @param {Object} obj: 需要冻结的对象。
 * @returns {Array} arr: Symbol 属性的数组。
 */
const Natasha = Symbol('Natasha');
const beauty = Symbol('beauty');
const age = Symbol('age');
const parent = { [age]: 18, height: 170 };
console.log(parent); // { height: 170, [Symbol(age)]: 18 }
const obj = Object.create(parent);
obj[Natasha] = 'Natasha';
obj[beauty] = 'beauty';
obj.gender = '女';
console.log(obj); // { gender: '女',  [Symbol(Natasha)]: 'Natasha',  [Symbol(beauty)]: 'beauty' }
const arr = Object.getOwnPropertySymbols(obj);
// 只返回自身 Symbol 属性
console.log(arr); // [ Symbol(Natasha), Symbol(beauty) ]
