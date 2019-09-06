const _ = require('lodash');
const arr = [1, 2, 3];
const arr1 = [2, 3, 4];
const arr2 = [2, 3, 6];
console.log(_.intersection(arr, arr1, arr2));
console.log(arr);
console.log(arr1);
console.log(arr2);
