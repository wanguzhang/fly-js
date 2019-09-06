/* eslint-disable no-proto */
/**
 * 目前唯一追的一部小数，《剑来》
 * @author: 张攀钦
 * @description: 通过 extends 实现集成
 * 子类构造函数必须通过 super 调用父类构造函数
 * 子类可以集成父类的静态属性和静态方法
 * class A{}
 * class B extends A{}
 * B.__proto__===A 为 true,集成了父类的静态属性和方法
 * B.prototype.__proto__ === A.prototype 为 true，子类实例集成父类的普通方法，B 的原型的原型是 A的原型，定义在 A 上的普通方法既是A原型上的方法，因此 B集成了 A的普通方法。
 * ES6 规定，在子类普通方法中通过super调用父类的方法时，方法内部的this指向当前的子类实例。
 */
// 1.基于 class
class A {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    static staticGetName() {
        return this.staticName;
    }
}
A.staticName = '阿良';
class B extends A {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}
console.log(B.__proto__ === A); // true
console.log(Object.getPrototypeOf(B) === A); // true
console.log(B.prototype.__proto__ === A.prototype); // true
console.log(B.staticGetName());
console.log(B.staticName);
