/* eslint-disable no-proto */
/**
 * @author: 张攀钦
 * const ret = Reflect.get(target, propertyKey[, receiver])
 * @param: {Object} target:目标对象
 * @param: {String} propertyKey:操作的属性
 * @param: {Object} receiver:如果遇到 getter，此值将提供给目标调用。
 * @param: {*} ret:返回值
 * @description: 获取属性的值,如果绑定的属性有 getter 方法调用 getter,receiver为绑定 getter的 this
 */
// 昆仑
console.log(Reflect.get(['九如', '花生'], 1)); // 花生
const jiuRu = {
    name: '九如',
    apprentice1: '花生',
    get apprentice() {
        return `${this.name}的徒弟是：${this.apprentice1}`;
    },
};
console.log(Reflect.get(jiuRu, 'apprentice')); // 九如的徒弟是：花生
console.log(Reflect.get(jiuRu, 'apprentice', { name: '梁萧', apprentice1: '风怜' })); // 梁萧的徒弟是：风怜
