/* eslint-disable no-restricted-syntax */
/**
 * @author: 张攀钦
 * new Map([iterable])
 * @param {Iterable} iterable 可以是一个数组或者其他 iterable 对象
 * @description:Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。
 */
// 1. iterable为二维数组[[key,value],[key,value]]
const arr = [['name', 'batman'], ['age', '27']];
const map = new Map(arr);
console.log(map.get('name')); // batman
console.log(map.get('age')); // 27

// 2.
const map1 = new Map();
map1.set('name', '神奇女侠');
map1.set('gender', '美女');
console.log(map1.get('name')); // 神奇女侠
console.log(map1.get('gender')); // 美女

// 3.Map.prototype.clear()移除Map对象的所有键/值对 。
map1.clear();
console.log(map1.get('name')); // undefined
console.log(map1.get('gender')); // undefined

// 4.Map.prototype.delete(key)
// 如果 Map 对象中存在该元素，则移除它并返回 true；否则如果该元素不存在则返回 false
const arr2 = [['name', '海王'], ['age', '27']];
const map4 = new Map(arr2);
console.log(map4.get('name')); // 海王
// 存在删除返回 true
console.log(map4.delete('name')); // true
console.log(map4.get('name')); // undefined
// 不存在删除，false
console.log(map4.delete('name')); // false

// 5.Map.prototype.has(key)返回一个布尔值，表示Map实例是否包含键对应的值。
const arr5 = [['name', '超人'], ['age', '27']];
const map5 = new Map(arr5);
console.log(map5.has('name')); // true
map5.delete('name');
console.log(map5.has('name')); // false
// 6.Map.prototype.keys()
// 返回一个新的 Iterator对象， 它按插入顺序包含了Map对象中每个元素的键 。
const arr6 = [['name', '超人'], ['age', '27']];
const map6 = new Map(arr6);
const iterator = map6.keys();
for (const item of iterator) {
    console.log(item); // name age;
}
// 7.Map.prototype.values()返回一个新的Iterator对象，它按插入顺序包含了Map对象中每个元素的值 。
const arr7 = [['name', '超人'], ['age', '27']];
const map7 = new Map(arr7);
const iterator7 = map7.values();
for (const item of iterator7) {
    console.log(item); // 超人 27
}
// 8.Map.prototype.entries()返回一个新的 Iterator 对象，它按插入顺序包含了Map对象中每个元素的 [key, value] 数组。
const arr8 = [['name', '超人'], ['age', '27']];
const map8 = new Map(arr8);
const iterator8 = map8.entries();
for (const [key, value] of iterator8) {
    console.log(key); // name age
    console.log(value); // 超人 27
}
