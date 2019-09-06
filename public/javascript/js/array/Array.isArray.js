/* eslint-disable no-array-constructor */
/**
 * @author: 张攀钦
 * @description: Array.isArray() 用于确定传递的值是否是一个Array。
 * @param {*} obj: 需要检测的变量
 * @returns {Boolean} bool：如果 obj 是Array,bool 为true。
 * const bool=Array.isArray(obj)
 */
// 下面的函数调用都返回 true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(Array.prototype);
