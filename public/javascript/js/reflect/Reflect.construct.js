/* eslint-disable no-proto */
/**
 * @author: 张攀钦
 * const ret=Reflect.construct(target, argumentsList[, function])
 * @param: {Object} target:目标函数
 * @param: {Array} argumentsList:参数列表
 * @param: {Function} function:function.prototype为 ret 的原型
 * @description: 相当于运行 new target(...args).
 * ret.__proto__===prototype.prototype
 */
// 昆仑
global.age = 19;
const liangXiao = function _liangXiao(name, ...data) {
    console.log(data); // [ '花晓霜', '柳莺莺' ]
    this.name = name;
};
const proto = function _proto_() {};
proto.prototype = {
    construct: proto,
    getName() {
        return this.name;
    },
};
// 当年高中看完《昆仑》，久久无法释怀。蓦然回首，早已沧海桑田啊，无喜无悲。
const ret = Reflect.construct(liangXiao, ['梁萧', '花晓霜', '柳莺莺'], proto);
console.log(ret);
console.log(ret.__proto__ === proto.prototype); // true
console.log(ret.getName()); // 梁萧
const prototype = Object.getPrototypeOf(ret);
console.log(prototype === proto.prototype); // true
