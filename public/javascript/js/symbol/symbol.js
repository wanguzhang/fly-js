/* eslint-disable eqeqeq */
/**
 * @author: 张攀钦
 * Symbol es6 新的基本数据类型
 */
// 1.Symbol() 全局唯一的值，每次运行都是唯一的值
const symbol1 = Symbol('搏击俱乐部');
const symbol10 = Symbol('搏击俱乐部');
const symbol2 = Symbol('杀人回忆');
console.log(symbol1 === symbol10); // false
console.log(symbol1 == symbol10); // false
console.log(typeof symbol2); // symbol
// 2.Symbol.for();全局寻找，找不到不新建
const king1 = Symbol.for('国王的演讲');
const king2 = Symbol.for('国王的演讲');
console.log(king1 === king2); // true
// 3.Sym.keyFor(symbol);返回某个 Symbol 的描述
console.log(Symbol.keyFor(king1)); // 国王的演讲
