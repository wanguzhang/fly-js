/**
 * @author: 张攀钦
 * const ret = Array.prototype.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue]
 * @description: 对数组中的每个元素执行callback函数(升序执行)，将其结果汇总为单个返回值。
 * @param {Function} callback: 回调函数 callback(accumulator, currentValue[, index[, array]])[, initialValue])
 * @param {*} accumulator:累加器
 * @param {*} currentValue:当前值，可选
 * @param {Number} index:当前索引，可选
 * @param {Array} array:调用方法的数组实例。可选。
 * @param {Number} initialValue:accumulator 初始化值。可选。
 * @returns {*} ret: 函数累计处理的结果 accumulator
 */
// 1.操作数字
const arr1 = [2, 3, 4];
const arg = 10;
const ret1 = arr1.reduce((acc, item, index, arr) => {
    // 第一次操作时 累加值:10,操作元素：2,操作元素的索引：0,调用方法的数组：2,3,4
    console.log(`累加值:${acc},操作元素：${item},操作元素的索引：${index},调用方法的数组：${arr}`);
    return acc + item;
}, arg);
console.log(ret1);
// 2.计算每个元素出现的次数
const arr2 = [2, 3, 4, 1, 2, 3, 3, 4, 4, 4];
const arg2 = {};
const ret2 = arr2.reduce((acc, item, index, arr) => {
    // 第一次操作时 累加值:10,操作元素：2,操作元素的索引：0,调用方法的数组：2,3,4
    console.log(`累加值:${acc},操作元素：${item},操作元素的索引：${index},调用方法的数组：${arr}`);
    if (item in acc) {
        acc[item] += 1;
    } else {
        acc[item] = 1;
    }
    return acc;
}, arg2);
console.log(ret2); // { '1': 1, '2': 2, '3': 3, '4': 4 }
// 3.按属性分类
const arr3 = [{ name: 'Alice', age: 21 }, { name: 'Max', age: 20 }, { name: 'Jane', age: 20 }];
function groupBy(objectArray, property) {
    return objectArray.reduce((acc, obj) => {
        const key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}
const ret3 = groupBy(arr3, 'age');
console.log(ret3);
// { '20': [ { name: 'Max', age: 20 }, { name: 'Jane', age: 20 } ],
// '21': [ { name: 'Alice', age: 21 } ] }
