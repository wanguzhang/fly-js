/* eslint-disable new-cap */
/* eslint-disable no-param-reassign */
/**
 * @author: 张攀钦
 * const proxy =new Proxy(target,handler);
 * @param {Object} target:被代理的对象
 * @param {Object} handler:一个对象，其属性是当执行一个操作时定义代理的行为的函数。
 * @returns {Object} proxy: 代理对象
 * @description: 代理对象的行为。
 * handler.preventExtensions()，必须返回Boolean 。
 * 该拦截器可以拦截以下操作:
 * 1、Object.preventExtensions()
 * 2、Reflect.preventExtensions()
 */
// 1.初试牛刀
const person = { name: '无崖子', age: 30 };
const handler = {
    /**
     * target:被代理对象
     * prop:修改的属性名称
     */
    preventExtensions(target) {
        console.log(target === person); // true
        Object.preventExtensions(target);
        return true;
    },
};
const proxy = new Proxy(person, handler);
console.log(Object.preventExtensions(proxy)); // true
console.log(Reflect.preventExtensions(proxy)); // true
