/**
 * @author: 张攀钦
 * const string=Array.prototype.join([separator])
 * @description: Array.prototype.join 将元素链接成字符串，返回这个字符串。
 * @param {String} separator:指定字符串分隔元素，默认','
 * @returns {String} string:个所有数组元素连接的字符串。如果 arr.length 为0，则返回空字符串。
 */
// 1.链接数字
const arr1 = [1, 2, 3];
const str1 = arr1.join();
console.log(str1); // 1,2,3
// 2.链接字符串
const arr2 = ['L', 'o', 'k', 'i'];
const str2 = arr2.join('');
console.log(str2); // Loki
// 3.链接对象
const arr3 = [{ name: 'Loki' }, { name: 'Loki' }, { name: 'Loki' }];
const str3 = arr3.join();
console.log(str3); // [object Object],[object Object],[object Object]
