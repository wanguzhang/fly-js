/* eslint-disable new-cap */
/* eslint-disable no-param-reassign */
/**
 * @author: 张攀钦
 * const proxy =new Proxy(target,handler);
 * @param {Object} target:被代理的对象
 * @param {Object} handler:一个对象，其属性是当执行一个操作时定义代理的行为的函数。
 * @returns {Object} proxy: 代理对象
 * @description: 代理对象的行为。
 * handler.ownKeys()，必须返回Boolean 。
 * 该拦截器可以拦截以下操作:
 * 1、Object.getOwnPropertyNames()
 * 2、Object.getOwnPropertySymbols()
 * 3、Object.keys()
 * 4、Reflect.ownKeys()
 */
// 1.初试牛刀
const person = { name: '无崖子', age: 30 };
const handler = {
    /**
     * @param target:被代理对象
     * @param prop:修改的属性名称
     * @returns {Array}
     */
    ownKeys(target) {
        console.log(target === person); // true
        return Object.keys(target);
    },
};
const proxy = new Proxy(person, handler);
console.log(Object.keys(proxy)); // true[ 'name', 'age' ]
console.log(Object.getOwnPropertyNames(proxy)); // [ 'name', 'age' ]
console.log(Object.getOwnPropertySymbols(proxy)); // []
console.log(Reflect.ownKeys(proxy)); // [ 'name', 'age' ]
