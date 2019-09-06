/**
 * @author: 张攀钦
 * const arr=Array.prototype.slice([begin[,end]]),包含begin 对应元素，不包含 end 对应元素。
 * @description: 将数组从开始索引到结束索引浅拷贝，返回新的数组。
 * @param {Number} begin: 指定开始索引
 * @param {Number} end: 指定结束索引
 * @returns {Array} arr: 浅拷贝的新的数组
 */
// 1.正常参数
const arr1 = [2, 3, 4, 5, 6];
const ret1 = arr1.slice(2, 4);
console.log(ret1); // [ 4, 5 ]
// 2.非正常参数
const arr2 = [2, 3, 4, 5, 6];
const ret2 = arr2.slice(-4, -1);
console.log(ret2); // [ 3, 4, 5 ]
// 3.验证浅拷贝
const obj1 = { age: 'obj0' };
const obj2 = { name: 'obj2' };
const obj3 = { gender: 'obj2' };
const arr3 = [obj1, obj2, obj3];
const ret3 = arr3.slice(1, 2);
console.log(ret3); // [ { name: 'obj1' } ]
ret3[0].name = '修改';
console.log(ret3); // [ { name: '修改' } ]
console.log(obj2); // [ { name: '修改' } ]
