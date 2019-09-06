/**
 * @author: 张攀钦
 * Math.E，欧拉常数，也是自然对数的底数, 约等于 2.718.
 * Math.LN2，2的自然对数, 约等于0.693.
 * Math.LN10，10的自然对数, 约等于 2.303.
 * Math.LOG2E，以2为底E的对数, 约等于 1.443.
 * Math.LOG10E，以10为底E的对数, 约等于 0.434.
 * Math.PI，圆周率，一个圆的周长和直径之比，约等于 3.14159.
 * Math.SQRT1_2，1/2的平方根, 约等于 0.707.
 * Math.SQRT2，2的平方根,约等于 1.414.
 */
// 1.Math.abs(x),返回x的绝对值.会进行转换数字在去绝对值
console.log(Math.abs(-1)); // 1
console.log(Math.abs(1)); // 1
console.log(Math.abs(-0)); // 1
console.log(Math.abs(+0)); // 1
console.log(Math.abs('_Elsa')); // NaN
console.log(Math.abs('1')); // 1
// 2.Math.ceil(x)返回x向上取整后的值：大于等于x的最小整数
console.log(Math.ceil(-1.1)); // -1
console.log(Math.ceil(1.2)); // 2
console.log(Math.ceil('-1.1')); // -1
console.log(Math.ceil('_Elsa')); // Nan
console.log(Math.ceil(1)); // 1
// 3.Math.floor(x)向下取整：小于等于 x的最小整数
Math.floor(45.95); // 45
Math.floor(45.05); // 45
Math.floor(4); // 4
Math.floor(-45.05); // -46
Math.floor(-45.95); // -46
// 4.Math.max([x[,y[,…]]])返回0个到多个数值中最大值.
console.log(Math.max(1, 2, 3)); // 3
console.log(Math.max(1, 2, 3, '4')); // 4
console.log(Math.max(1, 2, 3, '4', 'asdfa')); // NaN
console.log(Math.max(1, 2, 3, '4', '4.5')); // 4.5
console.log(Math.max(1, 2, 3, '4', '4.5', '4.5')); // 4.5
// 5.Math.min([value1[,value2, ...]]) 返回最小值。
console.log(Math.min(1, 2, 3)); // 1
console.log(Math.min(1, 2, 3, '4')); // 1
console.log(Math.min(1, 2, 3, '4', 'asdfa')); // NaN
console.log(Math.min(1, 2, 3, '4', '4.5')); // 1
console.log(Math.min(1, 1, 2, 3, '4', '4.5', '4.5')); // 1
// 6.Math.random() 随机数在这个区间[0，1)
console.log(Math.random()); // 0.29555726609770505
//  7.Math.round(x) 返回四舍五入后的整数.
console.log(Math.round(-4.3)); // -4
console.log(Math.round(4.3)); // 4
console.log(Math.round('4.3')); // 4
console.log(Math.round('4.as3')); // NaN
