/* eslint-disable prefer-rest-params */
/**
 * @author: 张攀钦
 * @description: Array.from() 方法从一个类似数组或可迭代对象中创建一个新的数组实例。
 * @param arrayLike：想要转换成数组的伪数组对象或可迭代对象。字符串，数组，Set,Map
 * @param {Function} mapFn:如果指定了该参数，新数组中的每个元素会执行该回调函数。
 * @param {Object} thisArg:可选参数，执行回调函数 mapFn 时 this 对象。
 * 如果mapFn为箭头函数，箭头函数体内this不是 thisArg。
 * @returns {Array} array:一个新的数组实例
 * const array = Array.from(arrayLike[, mapFn[, thisArg]])
 */
// 1、Array.from 操作字符串
const arr = Array.from('又高又帅的全栈');
console.log(arr); // [ '又', '高', '又', '帅', '的', '全', '栈' ]

// 2、Array.from 操作Set,此操作也可以对数组进行去重
const obj = Array.from(new Set([1, 2, 1, 3]));
console.log(obj); // [ 1, 2, 3 ]

// 3、Array.from 操作Map
const map = new Map();
map.set('name', '张');
map.set('function', (data) => {
    console.log(data);
});
const fromMap = Array.from(map);
console.log(fromMap); // [ [ 'name', '张' ], [ 'function', [Function] ] ]

// 4、Array.form 操作 function 的 arguments
function f1() {
    return Array.from(arguments);
}
f1(1, 2, 3); // [ 1, 2, 3 ]

// 5、Array.from 全参
const arrFromAllArguments = Array.from(
    [1, 2, 3],
    // 此处如果是箭头函数，this绑定不到{num:2}
    function mapFn(x) {
        return x * this.num;
    },
    { num: 2 },
);
console.log(arrFromAllArguments); // [ 2, 4, 6 ]
