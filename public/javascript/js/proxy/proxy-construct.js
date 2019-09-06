/* eslint-disable new-cap */
/**
 * @author: 张攀钦
 * const proxy =new Proxy(target,handler);
 * @param {Object} target:被代理的对象
 * @param {Object} handler:一个对象，其属性是当执行一个操作时定义代理的行为的函数。
 * @returns {Object} proxy: 代理对象
 */
// 1.初试牛刀
const handler = {
    /**
     * @description: // 拦截构造函数
     * @author: 张攀钦
     * @date: 2019-06-28 17:30:19 星期五
     * @param: {Object} target : 被代理对象 login
     * @param: {Object} argumentsList : 对代理对象进行 new 传入的参数
     * @param: {Object} proxy : 代理对象 ret
     * @return: {Object}  :
     */
    construct(target, argumentsList) {
        // console.log(target === login); // true
        console.log(argumentsList); // [1,2,3]
        // console.log(proxy === ret); // true
        return new target(...argumentsList);
    },
};
const login = function _login() { };
const ret = new Proxy(login, handler);
console.log(ret);

// new ret(1, 2, 3);
