/* eslint-disable new-cap */
/* eslint-disable no-param-reassign */
/**
 * @author: 张攀钦
 * const proxy =new Proxy(target,handler);
 * @param {Object} target:被代理的对象
 * @param {Object} handler:一个对象，其属性是当执行一个操作时定义代理的行为的函数。
 * @returns {Object} proxy: 代理对象
 * @description: 代理对象的行为。
 * handler.defineProperty()，必须返回Boolean,标识操作是否成功。
 * 该拦截器可以拦截以下操作:
 * 1、Reflect.defineProperty()
 * 2、Object.defineProperty()
 */
// 1.初试牛刀
const person = { name: '无崖子' };
const handler = {
    /**
     * target:被代理对象
     * prop:修改的属性名称
     * descriptor:属性描述符
     */
    defineProperty(target, prop, descriptor) {
        console.log(target === person); // true
        return Object.defineProperty(target, prop, descriptor);
    },
};
const descriptor = { configurable: true, enumerable: true, value: '无崖子变身' };
const proxy = new Proxy(person, handler);
Object.defineProperty(proxy, 'name', descriptor);
console.log(proxy);
