/* eslint-disable no-restricted-syntax */
/**
 * 这个 api 在 node 环境下运行报错，浏览器可以
 * @author: 张攀钦
 * const iterator = Array.prototype.values()
 * @description: 返回一个包含数组中所有值键的Array Iterator对象。
 * @returns {Iterator} iterator: 新的迭代器对象
 */
// 1.正常参数
const arr1 = [4, 2, 4, 43];
const obj = arr1.values();
for (const value of obj) {
    console.log(value); // expected output: 4，2，43，2
}
