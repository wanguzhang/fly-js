/**
 * @author: 张攀钦
 * 《JavaScript高级程序设计》中写道：“闭包是指有权访问另一个函数作用域中的变量的函数”
 * @description: 简单理解：闭包为函数。A 函数中包含 B 函数。执行 A函数，return B; B 为闭包。
 */
// 1.变量 C 引用 _C,运行 C();返回的对象访问 C 中的局部变量，导致 C 不会被内存回收。
const C = function _C() {
    // const a = { name: 'name' };
    const getA = function _getA() {
        return '11';
    };
    return { getA };
};
const ret = C();
console.log(ret.getA()); // { name: 'name' }
// // 自执行函数
// const retC = (function _C(obj2) {
//     const a = { name: 'name' };
//     const data = obj2;
//     const getA = function _getA() {
//         return a;
//     };
//     const setA = function _setA(obj) {
//         Object.assign(a, obj);
//     };
//     return { getA, setA, data };
// }({ age: 18 }));
// console.log(retC.data); // { age: 18 }
// console.log(retC.getA()); // { name: 'name' }
