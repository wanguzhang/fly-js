/**
 * 目前唯一追的一部小数，《剑来》
 * @author: 张攀钦
 * @description: class 静态方法和静态属性,实例访问不到静态方法和属性
 * ES6 明确规定，Class 内部只有静态方法，没有静态属性
 * 调用静态方法时，this 指向 class类
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

    static staticGetName() {
        return this.staticName;
    }
}
A.staticName = '陈平安';
A.staticAge = 18;
A.staticGetAge = function _getAge() {
    return this.staticAge;
};
console.log(A.staticName);
console.log(A.staticAge);
console.log(A.staticGetAge());
console.log(A.staticGetName());
// 2.基于 Function
const B = function _B() {};
B.staticName = '齐静春';
B.staticAge = 30;
B.staticGetAge = function _staticGetAge() {
    return this.staticAge;
};
B.staticGetName = function _staticGetName() {
    return this.staticName;
};
console.log(B.staticAge);
console.log(B.staticName);
console.log(B.staticGetAge());
console.log(B.staticGetName());
