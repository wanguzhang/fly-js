const _ = require('lodash');

// _.sortedIndex(array, value):valueIndex
// 使用二进制的方式检索来决定 value 应该插入在数组中位置。它的 index 应该尽可能的小以保证数组的排序。
const arr1 = ['2aaa', 0, 30, 40, 50];
console.log(_.sortedIndex(arr1, 40));// 3
console.log(arr1);// ['2aaa', 0, 30, 40,50];
console.log(_.sortedIndex(arr1, '3aaa'));// 1

// _.sortedIndexBy(array, value, [iteratee=_.identity])
// iteratee 遍历 value,arrayItem 处理,然后使用二进制的方式检索value 的索引
console.log(_.sortedIndexBy([{ name: 1 }, { name: 2 }, { name: 4 }, { name: 5 }], 4, (value) => {
    if (value instanceof Object && value.name) {
        return value.name;
    }
    return value;
}));// 2

// _.sortedIndexOf(array, value),没有排序返回-1
console.log(_.sortedIndexOf([1, 3, 2, 5, 4], 2));// -1
console.log(_.sortedIndexOf([1, 2, 2, 3, 4, 5], 2));// 1


//操作一个排序数组,查找索引能放到的最大索引
const arr3 = ['2aaa', 0, 30, 40, 40, 50];
console.log(_.sortedLastIndex(arr3, 40));// 5
console.log(_.sortedLastIndexBy([{ name: 1 }, { name: 2 }, { name: 4 }, { name: 5 }], 4, (value) => {
    if (value instanceof Object && value.name) {
        return value.name;
    }
    return value;
}));// 3
console.log(_.sortedLastIndexOf([1, 2, 2, 3, 4, 5], 2));// 2

// _.sortedUniq(array),操作排序的数组，并去重。如果不排序，返回原数组
const arr4 = [1, 1, 2];
console.log(_.sortedUniq());
console.log(_.sortedUniq([1, 3, 1, 2]));

// _.sortedUniqBy(array, [iteratee]),操作排序数组去重，对数组每个元素，先执行iteratee
_.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);// [1.1,2.3]
