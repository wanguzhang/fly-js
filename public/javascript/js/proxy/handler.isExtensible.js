/* eslint-disable new-cap */
/* eslint-disable no-param-reassign */
/**
 * @author: 张攀钦
 * const proxy =new Proxy(target,handler);
 * @param {Object} target:被代理的对象
 * @param {Object} handler:一个对象，其属性是当执行一个操作时定义代理的行为的函数。
 * @returns {Object} proxy: 代理对象
 * @description: 代理对象的行为。
 * handler.isExtensible()，必须返回Boolean 。
 * 该拦截器可以拦截以下操作:
 * 1、Object.isExtensible()
 * 2、Reflect.isExtensible()
 */
// 1.初试牛刀
const person = { name: '无崖子', age: 30 };
const handler = {
    /**
     * target:被代理对象
     * prop:修改的属性名称
     */
    isExtensible(target) {
        console.log(target === person); // true
        return Object.isExtensible(target);
    },
};
const proxy = new Proxy(person, handler);
console.log(Object.isExtensible(proxy)); // true
console.log(Reflect.isExtensible(proxy)); // true
