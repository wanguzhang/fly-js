/* eslint-disable new-cap */
/* eslint-disable no-param-reassign */
/**
 * @author: 张攀钦
 * const proxy =new Proxy(target,handler);
 * @param {Object} target:被代理的对象
 * @param {Object} handler:一个对象，其属性是当执行一个操作时定义代理的行为的函数。
 * @returns {Object} proxy: 代理对象
 * @description: 代理对象的行为。
 * handler.construct()，必须返回对象。
 * 该拦截器可以拦截以下操作:
 * 1、执行代理对象new proxy(...args)
 * 2、Reflect.construct()
 */
// 1.初试牛刀
const Person = function _Person(name) {
    this.name = name;
};
const handler = {
    /**
     * target:被代理对象的构造函数
     * argumentsList:调用时代理对象时，餐的参数
     * targetConstructor：代理对象
     */
    construct(targetConstructor, argumentsList, proxy) {
        console.log(argumentsList); // [ '乔峰', 10 ]
        console.log(targetConstructor === Person); // true
        console.log(proxy); // proxyPerson
        return new targetConstructor(...argumentsList);
    },
};
const proxyPerson = new Proxy(Person, handler);
const obj = new proxyPerson('乔峰', 10); // 执行构造函数，被拦截
console.log(obj.name);
const p = new Person('段誉'); // 执行构造函数没有被拦截
console.log(p.name);
