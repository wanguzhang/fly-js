/* eslint-disable new-cap */
/* eslint-disable no-param-reassign */
/**
 * @author: 张攀钦
 * const proxy =new Proxy(target,handler);
 * @param {Object} target:被代理的对象
 * @param {Object} handler:一个对象，其属性是当执行一个操作时定义代理的行为的函数。
 * @returns {Object} proxy: 代理对象
 * @description: 代理对象的行为。
 * handler.apply()，返回任意值。
 * 该拦截器可以拦截以下操作:
 * 1、proxy(...args)
 * 2、Function.prototype.apply() 和 Function.prototype.call()
 * 3、Reflect.apply()
 */
// 1.初试牛刀
const person = {
    name: '无崖子',
    // rest 参数
    getName() {
        return this.name;
    },
};
const handler = {
    /**
     * target:被代理对象
     * thisArg:调用时的上下文对象。
     * argumentsList:被调用时的参数数组。
     */
    apply(target, thisArg, argumentsList) {
        console.log(target === person.getName); // true
        console.log(thisArg); // undefined
        console.log(argumentsList); // [ 1, 2, 3 ]
        return target.bind(person, argumentsList)();
    },
};
const proxy = new Proxy(person.getName, handler);
console.log(proxy(1, 2, 3)); // 无崖子
// 2.绑定函数的上下文
const liangXiao = {
    name: '梁萧',
    // rest 参数
    getName() {
        return this.name;
    },
};
const handler2 = {
    /**
     * target:被代理对象
     * thisArg:调用时的上下文对象。
     * argumentsList:被调用时的参数数组。
     */
    apply(target, thisArg, argumentsList) {
        console.log(target === liangXiao.getName); // true
        console.log(thisArg); // { name: '梁萧', getName: [Function: getName] }
        console.log(argumentsList); // [ 1, 2, 3 ]
        return target.apply(thisArg, argumentsList);
    },
};
const proxy2 = new Proxy(liangXiao.getName, handler2);
console.log(proxy2.call(liangXiao, 1, 2, 3)); // 梁萧
console.log(proxy2.apply(liangXiao, [1, 2, 3])); // 梁萧
