/**
 * @author: 张攀钦
 * const proxy =new Proxy(target,handler);
 * @param {Object} target:被代理的对象
 * @param {Object} handler:一个对象，其属性是当执行一个操作时定义代理的行为的函数。
 * @returns {Object} proxy: 代理对象
 * @description: 代理对象的行为。
 * handler.get()拦截对象的设置属性操作。
 * 1、访问属性: proxy[foo]和 proxy.bar
 * 2、Object.create(proxy)[foo]
 * Reflect.get()
 *
 * handler.set()拦截对象的读取属性操作。
 * 1、指定属性值: proxy[foo] = bar 和 proxy.foo = bar
 * 2、指定继承者的属性值: Object.create(proxy)[foo] = bar
 * Reflect.set()
 */
const obj = {
    name: 1,
    arr: [],
    obj: {},
};

const handler = {
    /**
     * @description: 拦截代理的获取值的操作
     * @author: 张攀钦
     * @date: 2019-06-28 17:20:05 星期五
     * @param: {Object} target : 被代理的对象
     * @param: {String} name : 代理对象操作的属性
     * @param: {Object} proxy : 代理对象
     * @return: {Boolean}
     */
    get(target, name, proxy) {
        // eslint-disable-next-line no-use-before-define
        console.log('get拦截-proxy 为new Proxy 返回的实例对象', proxy === ret); // true
        console.log(`get拦截了${name}`);
        return target[name];
    },
    /**
     * @description: 拦截代理的赋值操作
     * @author: 张攀钦
     * @date: 2019-06-28 17:20:05 星期五
     * @param: {Object} target : 被代理的对象
     * @param: {String} name : 代理对象操作的属性
     * @param: {*} value : 代理对象赋值
     * @param: {Object} proxy : 代理对象
     * @return: {Boolean}
     */
    set(target, name, value, proxy) {
        const tempTarget = target;
        // eslint-disable-next-line no-use-before-define
        console.log('set拦截 proxy 为new Proxy 返回的实例对象', proxy === ret); // true
        console.log(`set拦截了${name}-value-${value}`);
        tempTarget[name] = value;
    },
};
const ret = new Proxy(obj, handler);
ret.name = 'name';
console.log(obj);
