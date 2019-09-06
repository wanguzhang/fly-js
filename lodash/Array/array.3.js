const _ = require('lodash/array');

// _.fill(array, value, [startIndex=0], [endIndex=array.length])
// 将指定值填充数组，从 startIndex 到 endIndex,但不包括 endIndex 本身。改变原数组，返回原来数组。

const arr1 = [1, 2, 3, 4, 5, 6];
console.log(_.fill(arr1, '陈平安'));// [ '陈平安', '陈平安', '陈平安', '陈平安', '陈平安', '陈平安' ]
console.log(arr1);// [ '陈平安', '陈平安', '陈平安', '陈平安', '陈平安', '陈平安' ]

/**
 * 将指定值填充数组，从 startIndex 到 endIndex,但不包括 endIndex 本身。改变原数组，返回原来数组。
 * fill(value: T, start?: number, end?: number): this;
 */
const arr2 = [1, 2, 3, 4];
console.log(arr2.fill('宁姚', 2, 10));// [ '宁姚', '宁姚', '宁姚', '宁姚' ]
console.log(arr2);// [ '宁姚', '宁姚', '宁姚', '宁姚' ]

// 返回裁剪的元素，并将指定元素替换一次裁剪的元素
const arr3 = [1, 2, 3, 4];
console.log(arr3.splice(1, 2, "陈平安&宁姚"));// [ 2, 3 ]
console.log(arr3);// [ 1, '陈平安&宁姚', 4 ]

// _.findIndex(array, [predicate=_.identity])
// 从索引 0 开始，返回第一个满足条件的数据的索引.没有查到返回 -1
const users = [
    { 'user': 'barney', 'active': false, age: 1 },
    { 'user': 'fred', 'active': false, age: 2 },
    { 'user': 'pebbles', 'active': true, age: 3 }
];
console.log(_.findIndex(users, (item) => {
    return item.age === 3;
}));// 2

// 比数组对象的方法更强大
console.log(_.findIndex(users, { age: 3 }));// 2

// users.findIndex
console.log(users.findIndex((item, index, arr) => {
    return item.age === 3;
}));// 2

const arr4 = [1, 2, 3, 4, 3, 5];
console.log(arr4.lastIndexOf(3));// 4
console.log(_.findLastIndex(arr4, item => item === 3));// 4



