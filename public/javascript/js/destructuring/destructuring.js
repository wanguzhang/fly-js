/**
 * @author: 张攀钦
 * @description:ES6 允许按照一定模式，从数组和对象中提取值，
 * 对变量进行赋值，这被称为解构（Destructuring）。
 */
// 1.数组结构赋值
const [a, b, c, d, e = 6] = [1, 2, 3];
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // undefined
console.log(e); // 6
// 2.对象的结构赋值
// 林飞，不知你在大唐找到了甘柠真了吗
const { bar, foo } = { foo: '林飞', bar: '甘柠真' };
console.log(bar);
console.log(foo);
// 3.字符串结构
const [a1, b1, c1, d1] = 'abcd';
console.log(a1); // a
console.log(b1); // b
console.log(c1); // c
console.log(d1); // d
const arr = [...'abcd'];
console.log(arr); // [ 'a', 'b', 'c', 'd' ]
// 4.函数参数赋值
const func = function _func({ x, y }) {
    console.log(`x:${x}`); // x:1
    console.log(`y:${y}`); // y:2
    return x + y;
};
console.log(func({ x: 1, y: 2 })); // 3
