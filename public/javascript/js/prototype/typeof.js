/* eslint-disable no-new-wrappers */
// 判断 Undefined
const undefinedData = undefined;
console.log(typeof undefinedData);// undefined

// 判断 null
const nullData = null;
console.log(typeof nullData);// object

const symbol = Symbol.for('testSymbol');
console.log(typeof symbol);// symbol
console.log('symbol instanceof Symbol:', symbol instanceof Symbol);// false

// 判断 String 字符串
const str = '1';
console.log(typeof str);// string
console.log('str instanceof String', str instanceof String);// false

const strObj = new String('222');// string
console.log('strObj instanceof String', strObj instanceof String);// true

// 判断 Number 数字
const num = 1;
console.log(typeof num);// number
console.log('num instanceof Number:', num instanceof Number);// false

const numObj = new Number(1);
console.log(typeof numObj);// number
console.log('numObj instanceof Number:', numObj instanceof Number);// true

// 判断 Object
const obj = {};
console.log(typeof obj);// object
console.log('obj instanceof Object:', obj instanceof Object);// true

// 判断 Function
const func = function _func() {

};
console.log(typeof func);// function
console.log('func instanceof Function:', func instanceof Function);

// 判断 Array
const arr = [1, 2];
console.log(typeof arr);// object
console.log('arr instanceof Array:', arr instanceof Array);// ture
// 判断 Date
const date = new Date();
console.log(typeof date);// object
console.log('date instanceof Date:', date instanceof Date);// true

// 判断 Map
const map = new Map();
console.log(typeof map);
console.log('map instanceof Map:', map instanceof Map);// true

// 判断 Set
const set = new Set();
console.log(typeof set);// object
console.log('set instanceof Set:', set instanceof Set);// true
