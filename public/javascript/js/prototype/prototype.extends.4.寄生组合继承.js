/* eslint-disable no-param-reassign */
/* eslint-disable no-proto */
/**
 * @author: 张攀钦
 * @description: 基于构造函数和原型链实现继承。
 */
// 1.通过构造函数和原型链组合继承，调用父类两次构造函数，为减少内存消耗，可利用空的中间对象做桥接。
const MyExtends = function _MyExtends(Son, Parent) {
    const F = function _F() {};
    const f = new F();
    f.__proto__ = Parent.prototype;
    Son.prototype = f;
    Son.prototype.constructor = Son;
};
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
MyExtends(B, C);
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
MyExtends(A, B);
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
