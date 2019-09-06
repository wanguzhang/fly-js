const _ = require('lodash');
// _.union([arrays])
// 获得 arrays 所有值经过 SameValueZero 等值比较的唯一值。按数组和数组索引的顺序筛选
console.log(_.union([1, 2, null, { name: 1 }], [{ name: 1 }, 3, 2, undefined], [10, { name: 1 }]));//[ 1, 2, null, { name: 1 }, { name: 1 }, 3, undefined, 10, { name: 1 } ]

// _.unionBy([arrays], [iteratee = _.identity])
// 这个方法类似 _.union，除了它接受一个 iteratee 调用每一个数组和值。iteratee 会传入一个参数：(value) 。
console.log(_.unionBy([2.1, 1.2], [4.3, 2.4], Math.floor));//[ 2.1, 1.2, 4.3 ]

// _.unionWith([arrays], [comparator])
// 这个方法类似 _.union， comparator 会传入2个参数：(arrVal, othVal)。
console.log(_.unionWith([{ name: 1 }, 2], [{ name: 3 }, 2], [3, { name: 4 }], (arrValue, otherValue) => {
    let tempArrValue, tempOtherValue;
    if (arrValue.name) {
        tempArrValue = arrValue;
    }
    if (otherValue.name) {
        tempOtherValue = otherValue.name;
    }
    return tempArrValue === tempOtherValue;
})); // [ { name: 1 }, 2, { name: 3 }, { name: 4 } ]

// _.uniq(array)
// 创建一个不重复的数组副本。使用了 SameValueZero 等值比较。只有首次出现的元素才会被保留。
console.log(_.uniq([1, 2, 2, 3, 3, { name: 1 }, { name: 1 }, null, undefined]));// [ 1, 2, 3, { name: 1 }, { name: 1 }, null, undefined ]


// _.uniqBy(array, [iteratee=_.identity])
// 这个方法类似 _.uniq，除了它接受一个 iteratee 调用每一个数组和值来计算唯一性。iteratee 会传入一个参数：(value) 。
console.log(_.uniqBy([2.1, 1.2, 2.3], Math.floor));// [ 2.1, 1.2 ]

// _.uniqWith(array, [comparator])
// 这个方法类似 _.uniq，除了它接受一个 comparator 来比较计算唯一性。 comparator 会传入2个参数：(arrVal, othVal)
console.log(_.uniqWith([1, { name: 2 }, 2, 3, { name: 3.1 }], (item, otherItem) => {
    let tempItem = item;
    let tempOtherItem = otherItem;
    if (item.name) {
        tempItem = item.name;
    }
    if (otherItem.name) {
        tempOtherItem = otherItem.name;
    }
    return Math.floor(tempItem) === Math.floor(tempOtherItem);
}));// [ 1, { name: 2 }, 3, { name: 3.1 } ]
