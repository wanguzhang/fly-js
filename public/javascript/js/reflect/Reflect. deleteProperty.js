/* eslint-disable no-proto */
/**
 * @author: 张攀钦
 * const ret = Reflect.deleteProperty(target, propertyKey)
 * @param: {Object} target:目标对象
 * @param: {String} propertyKey:操作的属性
 * @param: {Boolean} ret:操作成功
 * @description: 用于删除属性,与 delete operator 类似
 */
// 昆仑
const gongYangYu = { name: '公羊羽' };
// 定义 wife 属性，不能删除
const ret = Reflect.defineProperty(gongYangYu, 'wife', { value: '花无媸', enumerable: true, configurable: false });
console.log(ret); // true
console.log(gongYangYu.wife); // 花无媸
console.log(gongYangYu); // { name: '公羊羽', wife: '花无媸' }
delete gongYangYu.wife;
console.log(gongYangYu); // { name: '公羊羽', wife: '花无媸' }
const ret2 = Reflect.deleteProperty(gongYangYu, 'wife');
console.log(ret2); // false
console.log(gongYangYu); // { name: '公羊羽', wife: '花无媸' }
const ret3 = Reflect.deleteProperty(gongYangYu, 'name');
console.log(ret3); // true
console.log(gongYangYu); // { wife: '花无媸' }
