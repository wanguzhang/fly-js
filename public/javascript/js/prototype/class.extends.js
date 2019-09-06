/* eslint-disable func-names */
class A {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}
class B extends A {
    constructor(name, func) {
        super(name);
        this.func = func;
    }

    getFunc() {
        return this.func;
    }
}
class C extends B {
    constructor(name, func, age) {
        super(name, func);
        this.age = age;
    }

    getAge() {
        return this.age;
    }
}
const c = new C('天不生我李淳罡，剑道万古长如夜', () => '剑神-李淳罡', 50);
console.log(c.getAge());
console.log(c.getName());
const f1 = c.getFunc();
console.log(f1());
