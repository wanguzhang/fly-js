/* eslint-disable no-proto */
/**
 * @author: 张攀钦
 * @description: 基于原型链实现继承。
 */
// 1.通过原型链实现继承
const A = function _A() {};
A.play = function _play() {
    console.log('A.paly');
};
const B = function _B() {};
B.study = function _study() {
    console.log('B.study');
};
const C = function _C() {};
C.sleep = function _sleep() {
    console.log('C.sleep');
};
B.__proto__ = C;
A.__proto__ = B;
A.study(); // B.study
A.sleep(); // C.sleep
// 2.基于原型链也可以继承，但存在问题，原型obj的属性 data 指向引用类型，基于 obj 为原型的子类将会共享 data，一个子类修改，其余也将受到影响。
B.names = ['徐晓', '吴素', '徐脂虎', '徐渭熊', '徐凤年', '徐龙象'];
const D = function _D() {};
D.__proto__ = B;
console.log(A.names); // [ '徐晓', '吴素', '徐脂虎', '徐渭熊', '徐凤年', '徐龙象' ]
console.log(D.names); // [ '徐晓', '吴素', '徐脂虎', '徐渭熊', '徐凤年', '徐龙象' ]
A.names.push('姜泥');
D.names.push('南宫仆射');
console.log(A.names); // [ '徐晓', '吴素', '徐脂虎', '徐渭熊', '徐凤年', '徐龙象', '姜泥', '南宫仆射' ]
console.log(D.names); // [ '徐晓', '吴素', '徐脂虎', '徐渭熊', '徐凤年', '徐龙象', '姜泥', '南宫仆射' ]
