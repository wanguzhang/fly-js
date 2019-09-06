/* eslint-disable no-proto */
/**
 * @author: 张攀钦
 * const ret = Reflect.defineProperty(target, propertyKey, attributes)
 * @param: {Object} target:目标对象
 * @param: {String} propertyKey:操作的属性
 * @param: {Object} attributes:属性的描述符
 * @param: {Boolean} ret:操作成功
 * @description: 定义属性操作符
 */
// 昆仑
const gongYangYu = { name: '公羊羽' };
const ret = Reflect.defineProperty(gongYangYu, 'wife', { value: '花无媸', enumerable: true });
console.log(ret); // true
console.log(gongYangYu.wife); // 花无媸
console.log(gongYangYu); // { name: '公羊羽', wife: '花无媸' }
