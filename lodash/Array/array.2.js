const _ = require('lodash/array');

// _.differenceWith(array, otherArray, function(arrayItem,otherArrayItem))
// 对array 和 otherArray 的元素执行 function,从 array 排除掉返回true 的元素,
// 返回剩下的元素，不改变原来数组
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];

_.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);// => [{ 'x': 2, 'y': 1 }]

console.log(_.differenceWith(objects, [1, 3], function (item1, item2) {
    return item1.x === item2;
})); // => [{ 'x': 2, 'y': 1 }]
console.log('objects:', objects);// [ { x: 1, y: 2 }, { x: 2, y: 1 } ]

// _.drop(array, [n=1])
// 裁剪数组中的前 n 个数组，返回剩余的部分。不改变原来数组
const arr = [1, 2, 3];
console.log(_.drop(arr));
console.log("arr:", arr); // [ 1, 2, 3 ]

// 返回裁剪的元素 startIndex,count 改变原来数组
console.log(arr.splice(1, 2));// [ 2, 3 ]
console.log('arr-splice', arr);// [1]


// 返回裁剪的元素 ，Array.prototype.slice 从 startIndex,endIndex 不改变原来数组
console.log(arr.slice(0, 2));// [ 1, 2 ]
console.log("arr-slice:", arr); // [3]


console.log(_.drop([1, 2, 3], 2));// [3]
console.log(_.drop([1, 2, 3], 5)); //[]
console.log(_.drop([1, 2, 3], 0)); //[ 1, 2, 3 ]


// _.dropRight(array, [n=1])
// 从右边裁剪数组中 n 个元素，返回剩余的部分。
const arr3 = [1, 2, 3]
console.log(_.dropRight(arr3, 2));// [ 1 ]
console.log('arr3:', arr3);// [ 1, 2, 3 ]

// _dropRightWhile(array,function(arrayItem,arrayIndex,array));
// 从最大索引开始，执行 function,当 function 返回false时，结束迭代，裁剪掉 function 返回true 的元素，返回剩下的元素，不改变数组。
const users = [
    { 'user': 'barney', 'active': true, age: 1 },
    { 'user': 'fred', 'active': false, age: 2 },
    { 'user': 'pebbles', 'active': false, age: 3 },
    { 'user': 'tom', 'active': false, age: 4 },
];

console.log(_.dropRightWhile(users, (user, index, arr) => {
    console.log('user:', user);
    console.log('index:', index);
    console.log('arr:', arr);
    return user.age >= 3;
}));
console.log("users", users);

// _.dropWhile(array,function(arrayItem,arrayIndex,array));
// 从索引 0 开始，执行 function,当 function 返回false时，结束迭代，裁剪掉 function 返回true 的元素，返回剩下的元素，不改变数组。
const arr4 = [
    { 'user': 'barney', 'active': true, age: 1 },
    { 'user': 'fred', 'active': false, age: 2 },
    { 'user': 'pebbles', 'active': false, age: 3 },
    { 'user': 'tom', 'active': false, age: 4 },
];

console.log(_.dropWhile(arr4, (user, index, arr) => {
    console.log('user:', user);
    console.log('index:', index);
    console.log('arr:', arr);
    return user.age <= 2;
}));
console.log(arr4);


