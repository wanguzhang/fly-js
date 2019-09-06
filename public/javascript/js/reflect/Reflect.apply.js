/**
 * @author: 张攀钦
 * const ret=Reflect.apply(target, thisArg argumentsList)
 * @param: {Object} target:目标函数
 * @param: {Object} thisArg:函数绑定的 this 的对象
 * @param: {Array} argumentsList:参数列表
 * @returns: {*} ret:执行 target函数的返回值
 * @description: 通过指定的参数列表发起对目标(target)函数的调用。
 */
// 昆仑
global.age = 19;
const liangXiao = function _liangXiao(name, ...data) {
    console.log(name); // 梁萧
    console.log(data); // [ '花晓霜', '柳莺莺' ]
    console.log(this.age); // 18
    return name;
};
console.time('reflect:');
const name = Reflect.apply(liangXiao, { age: 18 }, ['梁萧', '花晓霜', '柳莺莺']);
console.log(name); // 梁萧
console.timeEnd('reflect:'); // reflect:: 3.972ms
// 证明有性能损耗
console.time('liangXiao:');
const name1 = liangXiao('梁萧');
console.log(name1); // 梁萧
console.timeEnd('liangXiao:'); // 0.172ms
