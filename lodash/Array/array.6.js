const _ = require('lodash');

// _.last(array)
// 获取数组的最后一个元素,不改变原数组
const arr = [1, 2, 3];
console.log(_.last(arr));// 3
console.log(arr);// [1,2,3]

// 从原数组中移除最后一个元素，改变原数组
console.log(arr.pop());// 3
console.log(arr);// [1,2]

// _.lastIndexOf(array, value, [fromIndex=array.length-1])
const arr3 = [1, 2, 3, 4, 3, 5];
console.log(_.lastIndexOf(arr3, 3));// 4

// lastIndexOf(searchElement: T, fromIndex=array.length-1?: number): number;
console.log(arr3.lastIndexOf(3));// 4


// 翻转数组 _.reverse(array);,改变原来数组
const arr4 = [1, 2, 3, 4];
console.log(_.reverse(arr4));// [ 4, 3, 2, 1 ]
console.log(arr4);// [ 4, 3, 2, 1 ]

const arr5 = [2, 4, 6];
console.log(arr5.reverse());// [6,4,2]
console.log(arr5);// [6,4,2]

// _.pull(array, [values])
// 移除所有经过 SameValueZero (可以简单理解===，但不是) 等值比较为 true 的元素 ,改变原来数组,返回操作的数组
const arr6 = [1, 2, 3, 1, 2, 3, { name: 1 }]
console.log(_.pull(arr6, 2, 3, { name: 1 }));// [1, 1, { name: 1 }]
console.log(arr6);// [1, 1, { name: 1 }]

// _.pullAll(array, otherArray)
// 移除两个数组中 SameValueZero (可以简单理解===，但不是) 等值比较为 true 的元素，不同于 _.difference，这个方法会改变数组。
console.log(_.pullAll([1, 2, 3, 1, 2, 3, { name: 1 }], [{ name: 1 }, 2, 3]));// [ 1, 1, { name: 1 } ]

// _.pullAllBy(array, otherArray, [iteratee=_.identity])
// array 和 otherArray 经过iteratee 处理，移除 SameValueZero 相等的元素
const arr7 = [1, 2, 3, 2, 3, { name: 1 }, undefined]
console.log(_.pullAllBy(arr7, [2, 3, { name: 1 }, undefined], item => JSON.stringify(item)));// [1]

// _.pullAt(array, [indexes])
// 移除给出索引的元素，返回被移除元素组成的数组，改变原数组
const arr8 = [5, 10, 15, 20];
const ret = _.pullAt(arr8, 1, 3);
console.log(arr8);// => [5, 15]
console.log(ret);// => [10, 20]

// _.remove(array, [predicate=_.identity])：newArray 改变原数组
// 移除经过 predicate 处理为真值的元素，并返回被移除的元素。predicate 会传入3个参数：(value, index, array)
const arr9 = [1, 2, 3, 4];
const ret9 = _.remove(arr9, item => item % 2 === 0);
console.log(arr9);//[ 1, 3 ]
console.log(ret9);//[ 2, 4 ]

// _.slice(array, [start=0], [end=array.length]):newArray
// 创建一个选择索引范围数组。不改变原来数组
const arr10 = [1, 3, 2, 4, 5, 6];
console.log(_.slice(arr10, 2, 5));// [ 2, 4, 5 ]
console.log(arr10);// [1, 3, 2, 4, 5, 6]

// 和 _.slice 功能类似
console.log(arr10.slice(2, 5));// [ 2, 4, 5 ]
console.log(arr10);// [ 1, 3, 2, 4, 5, 6 ]
