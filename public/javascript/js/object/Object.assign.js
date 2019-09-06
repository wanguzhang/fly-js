/**
 * @Author: 张攀钦
 * const obj=Object.assign(target, ...sources)
 * @description 用于将所有可枚举属性的值，从一个或多个源对象复制到目标对象。
 * 源对象属性会覆盖目标对象相同属性，它将返回目标对象。
 * @param target 目标对象
 * @param sources 源对象
 * @returns obj 目标对象 obj===target true
 */
// 1. 复制对象
const obj = { a: 1 };
const target1 = { a: 2, b: 2 };
const copy = Object.assign(target1, obj);
console.log(copy === target1); // true
console.log(copy); // { a: 1, b: 2 }

// 1.2 复制对象之扩展运算符...
const target2 = { ...target1, ...obj };
console.log(target2); // { a: 1, b: 2 }
// 2、继承属性和不可枚举属性是不能拷贝的
const prototype = Object.create(
    { extend: 22 },
    {
        bar: {
            value: 'bar', // bar 是个不可枚举属性
        },
        baz: {
            value: 'baz',
            enumerable: true, // baz 是个自身可枚举属性
        },
    },
);
// prototype {baz: "baz", bar: "bar"} extend 是prototype原型对象上的属性
const target3 = { a: 3 };
Object.assign(target3, prototype);
console.log(target3); // { a: 3, baz: 'baz' }

// 3、基于class 复制
class Parent {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}
class Son extends Parent {
    constructor(age, name) {
        super(name);
        this.age = age;
    }

    getAge() {
        return this.age;
    }
}
const son = new Son('age', 'name');
const ret = Object.assign({ gender: '男' }, son);
console.log(ret); // { gender: '男', name: 'name', age: 'age' }

// 4、拷贝 Symbol 类型的属性
const o1 = { a: 1 };
const o2 = { [Symbol('foo')]: 2 };
const retObj = Object.assign({}, o1, o2);
console.log(retObj); // { a: 1, [Symbol(foo)]: 2 }
