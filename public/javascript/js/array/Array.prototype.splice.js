/* eslint-disable eqeqeq */
/**
 * @author: 张攀钦
 * @description: Array.prototype.splice 删除数组中的元素或删除数组中的元素，并将删除位置的元素替换提供的元素。
 * 并以数组形式返回被修改的内容。此方法会改变原数组。
 * @param: {Number} start 用来指定修改位置索引+1。start大于数组长度，不操作。负数从倒数第几开始。
 * @param: {Number} deleteCount 可选，删除几个元素。不传，默认删除start开始后所有。
 * @param: {*} item1,item2 可选，要添加进数组的元素,从start 位置开始。如果不指定，则 splice() 将只删除数组元素。
 * @returns: {Array} arr 由被删除的元素组成的一个数组。没有删除返回[]
 * const arr = Array.prototype.splice(start[, deleteCount[, item1[, item2[, ...]]]]);
 */
// 1、只传一个参数start
const arr = [1, 2, 3, 4, 5];
const retArr = arr.splice(1);
console.log(arr === retArr);
console.log(arr); // [ 1 ]
console.log(retArr); // [ 2, 3, 4, 5 ]
// 1-1、传负数start
const arrA = [1, 2, 3, 4];
const retArrA = arrA.splice(-1);
console.log(arrA); // [ 1, 2, 3 ]
console.log(retArrA); // [ 4 ]
// 2、 传入参数start大于数组长度，不改变原来数组
const arr1 = [1, 2, 3];
const retArr1 = arr1.splice(4);
console.log(arr1); // [ 1, 2, 3 ]
console.log(retArr1); // []
// 3、正常传入start，deleteCount
const arr2 = [1, 2, 3, 4, 5];
const retArr2 = arr2.splice(2, 2);
console.log(arr2); // [ 1, 2, 5 ]
console.log(retArr2); // [ 3, 4 ]
// 3、正常传入start,deleteCount大于start后元素数量
const arr3 = [1, 2, 3, 4, 5];
const retArr3 = arr3.splice(2, 10);
console.log(arr3); // [ 1, 2 ]
console.log(retArr3); // [ 3, 4, 5 ]
// 4、参数全部传入，添加的元素多余删除的元素
const arr4 = [1, 2, 3, 4];
const retArr4 = arr4.splice(2, 5, ...[5, 6, 7, 8]);
// const retArr4 = arr4.splice(2, 5, 5, 6, 7, 8);
console.log(arr4); // [ 1, 2, 5, 6, 7, 8 ]
console.log(retArr4); // [ 3, 4 ]
