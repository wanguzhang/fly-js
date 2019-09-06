/* eslint-disable no-proto */
/* eslint-disable new-cap */
/* eslint-disable no-param-reassign */
/**
 * @author: 张攀钦
 * const proxy =new Proxy(target,handler);
 * @param {Object} target:被代理的对象
 * @param {Object} handler:一个对象，其属性是当执行一个操作时定义代理的行为的函数。
 * @returns {Object} proxy: 代理对象
 * @description: 代理对象的行为。
 * handler.setPrototypeOf()，必须返回Boolean。
 * 该拦截器可以拦截以下操作:
 * 1、Object.handler.setPrototypeOf()
 * 2、Reflect.handler.setPrototypeOf()
 * 3、访问对象的__proto__
 */
// 1.初试牛刀
const person = { name: '无崖子', age: 30 };
const handler = {
    /**
     * @param target:被代理对象
     * @param prototype:被代理对象的原型
     */
    setPrototypeOf(target, prototype) {
        console.log(target === person); // true
        return Object.setPrototypeOf(target, prototype);
    },
};

const proxy = new Proxy(person, handler);
console.log(Object.setPrototypeOf(proxy, { name: '无崖子的师傅' })); // { name: '无崖子的师傅' }
console.log(Reflect.setPrototypeOf(proxy, { name: '无崖子的师傅' })); // { name: '无崖子的师傅' }
console.log((proxy.__proto__ = { name: '无崖子的师傅' })); // { name: '无崖子的师傅' }
