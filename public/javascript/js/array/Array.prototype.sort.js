/* eslint-disable eqeqeq */
/**
 * @author: 张攀钦
 * @description: Array.prototype.sort 对数组元素进行排序，默认根据字符串的Unicode码点升序排列。
 * @param: {Function} compareFunction 用来指定按某种顺序进行排列的函数。
 * compareFunction(firstEl,secondEl) firstEl:第一个用于比较的元素。secondEl 第二个用于比较的元素。
 * @returns: {*} arr 调用方法数组的实例。
 * const arr = Array.prototype.sort([compareFunction]);
 */
// 1、sort(),默认根据字符串的Unicode码点升序排列
const arr = ['b', 1, 'c', 3, 2, 'a', 5, 4];
const ret = arr.sort();
console.log(arr); // [ 1, 2, 3, 4, 5, 'a', 'b', 'c' ]
console.log(ret); // [ 1, 2, 3, 4, 5, 'a', 'b', 'c' ]
console.log(ret === arr); // true
// 2.sort((a,b)=>a-b),返回值0，位置不动，返回值小于0，a排在b前面，索引小于b的索引，大于0 ，则相反。
const arr2 = [{ name: 'c' }, { name: '2' }, { name: 'a' }, { name: '2' }, { name: '3' }, { name: 'b' }];
arr2.sort((a, b) => {
    const A = a.name.toUpperCase();
    const B = b.name.toUpperCase();
    if (A < B) {
        return -1;
    }
    if (A > B) {
        return 1;
    }
    return 0;
});
console.log(arr2); // [ { name: '2' },  { name: '2' },  { name: '3' },  { name: 'a' },  { name: 'b' },  { name: 'c' } ]
// 3、字符串和数字排序,元素转换字符串，按ASCII码 排序
const arr3 = ['1', 'b', 1, 'c', 3, 2, 'a', 5, '张'];
arr3.sort();
console.log(arr3); // [ 1, '1', 2, 3, 5, 'a', 'b', 'c', '张' ]
