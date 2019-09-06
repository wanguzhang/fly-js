/* eslint-disable no-proto */
const Foo = function _Foo(name = '默认') {
    this.name = name;
    return 1;
};
const foo = new Foo();
console.log(foo.name);

const Foo1 = function _Foo1(name = '默认') {
    this.name = name;
    return { age: 1 };
};

const Foo2 = function _Foo2(name = '默认') {
    this.name = name;
};

Foo2.prototype.log = function _log() {
    console.log('测试继承 prototype');
};
const foo1 = new Foo1();
console.log(foo1.age);

function New(func, ...data) {
    const obj = {};
    obj.__proto__ = func.prototype;
    const result = func.apply(obj, data);
    if (result instanceof Object) {
        return result;
    }
    return obj;
}

const ret = New(Foo, '测试');
console.log(ret.name);// 测试

const ret1 = New(Foo1, '测试返回 obj');
console.log(ret1.age);// obj

const ret2 = New(Foo2, '测试正常构造');
console.log(ret2.name);// 测试正常构造
ret2.log();// 测试继承 prototype
