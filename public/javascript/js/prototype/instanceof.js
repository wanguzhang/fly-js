const Foo = function _Foo(name = '又高又帅的全栈') {
    this.name = name;
    console.log('Foo 执行了');
};
Foo.prototype.getName = function _getName() {
    return this.name;
};
const FooParent = function _FooParent() { };
Object.setPrototypeOf(Foo.prototype, FooParent.prototype);
Foo.prototype.getName = function _getName() {
    return this.name;
};
const foo = new Foo();
console.log(foo);
console.log(foo instanceof Foo);
console.log(foo instanceof Object);
// FooParent.prototype 能否在 foo 的原型链中找到
console.log(foo instanceof FooParent);
console.log(typeof foo);
