const Foo = function _Foo(name) {
    this.name = name;
};
Foo.prototype.getAge = function _getAge() {
    return this.age;
};
Foo.age = 1;

Foo.getAge = function _staticGetAge() {
    return this.age;
};
console.log(Foo.getAge());
