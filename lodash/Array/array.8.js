const _ = require('lodash');
// _.tail(array)
// 获取数组中除了第一个元素的剩余数组
const arr1 = [1, 2, 3];
console.log(_.tail(arr1));// [2,3]
console.log(arr1);// [1,2,3]


// _.take(array, [n=1])
// 获取从索引 0 开始的 N 个数组成的新数组;不改变原来数组
const arr2 = [1, 2, 3];
console.log(_.take(arr2, 2));// [1,2]
console.log(arr2);[1, 2, 3]

//_.takeRight(array, [n=1])
// 获取索引 array.length-n 到 array.length-1 之间的元素
console.log(_.takeRight([1, 2, 3, 4, 5, 6], 3));// [4,5,6]

// _.takeRightWhile(array, [predicate = _.identity])
// 从数组尾部开始提取数组，直到 predicate 返回假值。predicate 会传入三个参数：(value, index, array) 。
const arr3 = [{ name: 1 }, { name: 4 }, { name: 3 }, { name: 5 }, { name: 6 }];
console.log(_.takeRightWhile(arr3, item => {
    if (item.name) {
        return item.name > 3;
    }
    return false;
}));// [ { name: 5 }, { name: 6 } ]

// _.takeWhile(array, [predicate=_.identity])
// 从数组的开始提取数组，直到 predicate 返回假值。predicate 会传入三个参数：(value, index, array) 。
const arr4 = [{ name: 1 }, { name: 3 }, { name: 2 }, { name: 4 }];
console.log(_.takeWhile(arr4, item => {
    if (item.name) {
        return item.name <= 2;
    }
    return false;
}));// [ { name: 1 } ]
