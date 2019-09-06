const _ = require('lodash');
// _.flatten(array),向上一级展平数组.不改变原来数组
const arr1 = [1, [2, [3, [4]], 5]];
console.log(_.flatten(arr1));
console.log(arr1);

console.log(arr1.flat());
console.log(arr1);


// _.flattenDeep(array)
// 递归展平 数组.
console.log(_.flattenDeep(arr1)); //[ 1, 2, 3, 4, 5 ]
console.log(arr1.flat(Infinity)); //[ 1, 2, 3, 4, 5 ]


// _.flattenDepth(array, [depth = 1])
// 根据 depth 递归展平数组的层级
console.log(_.flattenDepth(arr1, 2)); // [ 1, 2, 3, [ 4 ], 5 ]
console.log(arr1.flat(2));// [ 1, 2, 3, [ 4 ], 5 ]

// _.fromPairs(array)
// 将二维数组转变为键值对
console.log(_.fromPairs([['fred', 30], ['barney', 40]]));

// _.head(array) 获取数组首个元素
const arr4 = [1, 2, 3];
console.log(_.head(arr4)); // 1
console.log(arr4); // [ 1, 2, 3 ]
// 移除数组中第一个元素，改变原来数组
const retFirst = arr4.shift();
console.log(retFirst);// 1
console.log(arr4);// [ 2, 3 ]

// _.indexOf 和 Array.prototype.indexOf 差不多
const arr5 = [1, 2, 1, 2];
console.log(_.indexOf(arr5, 2));// 1
console.log(arr5.indexOf(2));// 1

// _.initial(array) 获取除了最后一个元素之外的所有元素，不会改变远数组
const arr6 = [1, 2, 3];
console.log(_.initial(arr6));// [ 1, 2 ]
console.log(arr6);// [ 1, 2, 3 ]




