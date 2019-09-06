const _ = require('lodash/array');

// const newArray= _.chunk(array, [size=0])
// 将 array 拆分成多个 size 长度的数组 array1,array2...，返回组成的新数组[array1,array2]。
const arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(_.chunk(arr1, 3));// [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]
console.log('arr1:', arr1);// [ 1, 2, 3, 4, 5, 6, 7 ]

// const newArray = _.compact(array)
// 创建一个移除了所有假值的数组。假值：false,null,0,'',undefined,NaN
const arr2 = [0, false, null, undefined, '', NaN, 1, 2, 3];
console.log(_.compact(arr2));// [ 1, 2, 3 ]
console.log('arr2:', arr2);// [ 0, false, null, undefined, '', NaN, 1, 2, 3 ]


// 创建一个用任何数组或值合并的新数组
const array = [1];
const other = _.concat(array, 2, [3], [[4]]);
console.log("other:", other); // [1, 2, 3, [4]]
console.log("array", array);// => [1]
// 扩展运算符
const other2 = [...array, 2, ...[3], ...[[4]]]
console.log("other2:", other2); // [1, 2, 3, [4]]
console.log("array", array);// => [1]

// _.difference(array, [values])
// 创建一个从数组 array 排除掉 values 包含的元素的新数组，不改变 array
const arr4 = [3, 2, 1];
console.log(_.difference(arr4, [2, 2, 1]));// [3]
console.log(arr4);// [ 3, 2, 1 ]

// _.differenceBy(array, [values], [function=_.identity])
// 将 array 中满足条件 function(array[index])===function(values) 的元素去掉，然后返回一个新数组，不会改变原数组 array
const arr5 = [3.1, 2.2, 1.3];
console.log(_.differenceBy(arr5, ['3.4', 2.5], Math.floor));// [ 1.3 ]
console.log('arr5:', arr5);// [ 3.1, 2.2, 1.3 ]

console.log(_.differenceBy([{ name: 1 }, { name: 2 }, { name: 3 }], [{ name: '3.4' }, { name: 2.5 }], (item) => {
    return Math.floor(item.name);
}));
//
