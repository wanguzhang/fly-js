const FooParent = function _FooParent(age = 1) {
    this.age = { age };
};
FooParent.prototype.getAge = function _getAge() {
    return this.age;
};

const Foo = function _Foo(name = '又高又帅的全栈', age) {
    FooParent.call(this, age);
    this.name = name;
};

Foo.prototype.getName = function _getName() {
    return `obj.getName-${this.age}`;
};

Foo.prototype = new FooParent();
Foo.prototype.constructor = Foo;

const foo1 = new Foo('陈平安', 16.1);
const foo2 = new Foo('宁姚', 16.2);
console.log(foo1.age.age);// 16.1
console.log(foo2.age.age);// 16.2
foo1.age.age = 2;
console.log(foo1.age.age);// 2
console.log(foo2.age.age);// 16.2
