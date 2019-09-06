/* eslint-disable no-proto */
/**
 * @author: 张攀钦
 * @description: 基于构造函数和原型链实现继承。
 */
// 1.通过原型链和构造函数实现继承,A 继承 B ,B 继承 C
const C = function _C(roles = ['徐晓', '吴素', '徐脂虎', '徐渭熊', '徐凤年', '徐龙象']) {
    this.roles = roles;
    this.c = function _c() {
        return '自身 c';
    };
};
C.prototype.getRoles = function _getRoles() {
    return `${this.roles}-C.getRoles`;
};
const B = function _B(obj, roles) {
    C.call(this, roles);
    this.obj = obj;
    this.b = function _b() {
        return '自身 b';
    };
};
// B.prototype = new C();=>B.prototype.__proto__=C.prototype;是什么情况呢？
// B.prototype = new C(); 会将 C 自身的属性和方法和 C.原型的方法都加到原型链中。标识 B 可以继承 C 自身的方法和 C 的原型上的方法。
// B.prototype.__proto__=C.prototype; 会将 C 原型上的方法加到原型链中，不能继承 C 自身的方法
B.prototype.__proto__ = C.prototype;
B.prototype.constructor = B;
B.prototype.study = function _study() {
    return `${this.name}-B.study`;
};
const A = function _A(name, obj, roles) {
    B.call(this, obj, roles);
    this.name = name;
    this.play = function _play() {
        return `${this.name}-A.paly`;
    };
    this.b = function _bb() {
        return `${this.name}-A重写b方法`;
    };
};
// A.prototype = new B();=>A.prototype.__proto__=B.prototype;是什么情况呢？
A.prototype.__proto__ = B.prototype;
A.prototype.constructor = A;
A.prototype.getName = function _getName() {
    return this.name;
};
const a1 = new A('红薯', { age: 18 }, ['徐凤年']);
const a2 = new A('青鸟', { age: 18 }, ['吴素']);
console.log(a1.play()); // 红薯-A.paly
console.log(a2.play()); // 青鸟-A.paly
console.log(a1.getName()); // 红薯
console.log(a2.getName()); // 青鸟
console.log(a1.study()); // 红薯-B.study
console.log(a2.study()); // 青鸟-B.study
console.log(a1.getRoles()); // 徐凤年-C.getRoles
console.log(a2.getRoles()); // 吴素-C.getRoles
console.log(a2 instanceof B); // true
console.log(a1 instanceof B); // true
console.log(a1 instanceof C); // true
console.log(a1 instanceof C); // true
console.log(a1.b()); // 红薯-A重写b方法
console.log(a1.c()); // 自身 c
console.log(a2.b()); // 青鸟-A重写b方法
console.log(a2.c()); // 自身 c
