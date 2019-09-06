/* eslint-disable no-restricted-syntax */
/**
 * @author: 张攀钦
 * const set = new Set([iterable]);
 * @description:Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
 */
// 1.
const movie = { movie: '聚焦' };
const set1 = new Set([1, 1, movie, movie, 2, 3]);
console.log(set1); // Set { 1, { movie: '聚焦' }, 2, 3 }
// 多少个元素
console.log(set1.size); // 4
// 添加元素
set1.add('黑客帝国');
console.log(set1); // { 1, { movie: '聚焦' }, 2, 3, '黑客帝国' }
// 删除元素
set1.delete(1);
console.log(set1); // Set { { movie: '聚焦' }, 2, 3, '黑客帝国' }
// 判断是否包含某个元素,包含返回 true
console.log(set1.has(2)); // true
console.log(set1.has(21)); // false
// Set.prototype.entries() 返回一个新的迭代器对象，
const it = set1.entries();
for (const [key, value] of it) {
    // key 和 value 一样，为 set 中的元素
    console.log(key);
    console.log(value);
}
// Set.prototype.keys()和Set.prototype.values() 行为一样
const values = set1.values();
for (const value of values) {
    console.log(value);
    /**
     * { movie: '聚焦' }
     * 2
     * 3
     * 黑客帝国
     */
}
