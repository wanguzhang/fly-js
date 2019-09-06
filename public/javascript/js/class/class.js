/**
 * @author: 张攀钦
 * @description: class可以看作只是一个语法糖,实现比 es5更简单。
 * class constructor 当不存在的时候自动加上一个空参构造
 * 而且基于 instanceof 判断类型更准确
 * 类的内部所有定义的方法，定义在 Class.prototype,并且不可枚举（non-enumerable）。
 */
// 1.基于 class
class A {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    // 定义在 prototype 的方法
    ['test']() {
        return this.age;
    }
}
const a = new A('马林达', 40);
console.log(a.getAge()); // 40
console.log(a.getName()); // 马林达
console.log(A === A.prototype.constructor); // true
console.log(a instanceof A); // true
// 类内定义的方法都是不可枚举的
console.log(Object.keys(A.prototype)); // []

// 2.上述可以理解为
const B = function _B(name, age) {
    this.name = name;
    this.age = age;
};
B.prototype = {
    constructor: B,
    getName() {
        return this.name;
    },
    getAge() {
        return this.age;
    },
};
const b = new B('马林达', 40);
console.log(b.getAge()); // 40
console.log(b.getName()); // 马林达
console.log(B === B.prototype.constructor); // true
console.log(b instanceof B); // true
// 与 class 不同
console.log(Object.keys(B.prototype)); // [ 'constructor', 'getName', 'getAge' ]
