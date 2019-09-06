/* eslint-disable no-restricted-syntax */
/**
 * @author: 张攀钦
 * const iterator = Array.prototype.keys()
 * @description: 返回一个包含数组中每个索引键的Array Iterator对象。
 * @returns {Iterator} iterator: 新的迭代器对象
 */
// 1.正常参数,箭头函数绑定不了this
const arr1 = [4, 2, 4, 43];
const obj = arr1.keys();
for (const index of obj) {
    console.log(index); // expected output: 0,1,2,3
}
