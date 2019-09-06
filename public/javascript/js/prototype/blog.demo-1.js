/* eslint-disable no-proto */
const proto = {
    age: 1,
    getName() {
        return this.name;
    },
    getAge() {
        return this.age;
    },
};

const Foo = function _Foo() { };

Foo.__proto__ = proto;

const Foo2 = function _Foo2() { };
Foo2.__proto__ = proto;

console.log(Foo.age);
console.log(Foo2.age);

Foo.age = 2;

console.log(Foo.age);
console.log(Foo2.age);
