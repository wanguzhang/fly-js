const _ = require('lodash');
// _.zip([arrays])
// 创建一个打包所有元素后的数组。第一个元素包含所有提供数组的第一个元素，第二个包含所有提供数组的第二个元素，以此类推。
const arr1 = ['name', 'age', 'sex'];
const arr2 = ['姓名', '年龄'];
console.log(_.zip(arr1, arr2));// [ [ 'name', '姓名' ], [ 'age', '年龄' ], [ 'sex', undefined ] ]
console.log(arr1);// [ 'name', 'age', 'sex' ]
console.log(arr2);// [ '姓名', '年龄' ]

// _.unzip(zipped);
// 解压打包好的数组
console.log(_.unzip([['name', '姓名'], ['age', '年龄'], ['sex', undefined]]));// [ [ 'name', 'age', 'sex' ], [ '姓名', '年龄', undefined ] ]

// _.zipObject([props = []], [values = []])
// 这个方法类似 _.fromPairs，除了它接受2个数组，一个作为属性名，一个作为属性值。
console.log(_.zipObject(['a', 'b', 'c'], [1, 2]));// { a: 1, b: 2, c: undefined }

// _.zipWith([arrays])
// 这个方法类似 _.zip， 除了它接受一个 iteratee 决定如何重组值。 iteratee 会调用每一组元素。
console.log(_.zipWith([1, 2], [10, 20], [100, 200], function (a, b, c) {
    return a + b + c;
}));//[111,222]
// _.without(array, [values]):newArray 不改变原数组
// 创建一个移除了所有提供的 values 的数组。使用了 SameValueZero 等值比较。
const arr3 = [1, 2, 3, 1, 2, 3];
console.log(_.without(arr3, 1, 2));// [ 1, 2, 3, 1, 2, 3 ]
console.log(arr3);// [ 1, 2, 3, 1, 2, 3 ]


// _.xor([arrays])
// 创建一个包含了所有唯一值的数组。使用了 symmetric difference 等值比较。
console.log(_.xor([2, 1, { name: 1 }], [4, 2, { name: 1 }]));// [ 1, { name: 1 }, 4, { name: 1 } ]

// _.xorBy([arrays], [iteratee = _.identity])
// 这个方法类似 _.xor，除了它接受一个 iteratee 调用每一个数组和值。iteratee 会传入一个参数：(value) 。
console.log(_.xorBy([2.1, 1.2], [4.3, 2.4], Math.floor));

// _.xorWith([arrays], [comparator])
// 这个方法类似 _.xor，除了它接受一个 comparator 调用每一个数组元素的值。 comparator 会传入2个参数：(arrVal, othVal) 。

console.log(_.xorWith([{ name: 1 }, 3], [1, 3, 2], (arrValue, otherValue) => {
    let tempArrValue = arrValue;
    let tempOtherValue = otherValue
    if (arrValue.name) {
        tempArrValue = arrValue.name;
    }
    if (otherValue.name) {
        tempOtherValue = otherValue.name;
    }
    return tempArrValue === tempOtherValue;
}));// [2]
