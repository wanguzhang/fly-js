const _ = require('lodash');
// _.intersection(array,arrays...)
// 返回所有数组都会包含(满足===条件)的元素
console.log(_.intersection([2, 1, { name: 1 }], [4, 2, { name: 1 }], [1, 2, { name: 1 }]));// [2]
const obj = { name: 1 };
console.log(_.intersection([2, 1, obj], [4, 2, obj], [1, 2, obj]));// [2]


// _.intersectionBy([arrays], function(item))
// 每个数组先经过 function 处理，在严格相等
console.log(_.intersectionBy([2, 1, { name: 1 }], [4, 2, { name: 1 }], [1, 2, { name: 1 }], JSON.stringify));// [2, { name: 1 }]

// _.intersectionWith,返回共同的元素
console.log(_.intersectionWith([2, 1, { name: 1 }], [4, 2, { name: 1 }], [1, 2, { name: 1 }], (item1, item2) => {
    console.log(item1);
    console.log(item2);
    return _.isEqual(item1, item2);
}));// [2, { name: 1 }]

// _.join(array, [separator=','])
// 将数组中的所有元素转换为由 separator 分隔的字符串。
const arr4 = [1, 2, 3];
console.log(arr4.join('$#'));// 1$#2$#3
console.log(_.join(arr4, '$#'));// 1$#2$#3


