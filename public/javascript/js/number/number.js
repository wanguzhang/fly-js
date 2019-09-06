// 1.Number.isNaN()确定传递的值是否是 NaN。
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(1)); // false
console.log(Number.isNaN('NaN')); // false
// 2.Number.isFinite()确定传递的值类型是“number”，且是有穷的（finite），才返回 true。
// 正无穷大
console.log(Number.isFinite(Infinity)); // false
// Nan
console.log(Number.isFinite(NaN)); // false
// 负无穷大
console.log(Number.isFinite(-Infinity)); // false
console.log(Number.isFinite(0)); // true
console.log(Number.isFinite(2e64)); // true
console.log(Number.isFinite('0')); // false

// 3.Number.isInteger()确定传递的值类型是“number”，且是整数。
Number.isInteger(0); // true
Number.isInteger(1); // true
Number.isInteger(-100000); // true

Number.isInteger(0.1); // false
Number.isInteger(Math.PI); // false

Number.isInteger(Infinity); // false
Number.isInteger(-Infinity); // false
Number.isInteger('10'); // false
Number.isInteger(true); // false
Number.isInteger(false); // false
Number.isInteger([1]); // false

// 4.const ret=Number.parseInt(string[, radix]) 将字符串以制定进制转换成整数,不能转换返回 NaN
// radix为指定基数，即字符串以多少进制的数字表示
const strObj = '0110';
console.log(Number.parseInt(strObj, 2)); // 6
console.log(Number.parseInt(strObj, 10)); // 110
console.log(Number.parseInt('asdfas', 10)); // NaN
