/* eslint-disable no-proto */
/**
 * @author: 张攀钦
 * const ret = Reflect.set(target, propertyKey, value[, receiver])
 * @param: {Object} target:目标对象
 * @param: {String} propertyKey:操作的属性
 * @param: {*} value:设置属性的值
 * @param: {Object} receiver:如果遇到 setter，receiver为绑定 getter的 this
 * @param: {Boolean} ret:返回值
 * @description: 就像在一个对象上设置一个属性。
 */
// 昆仑
const jiuRu = {
    name: '九如',
    apprentice1: '花生',
    set apprentice(apprentice1) {
        this.apprentice1 = `${apprentice1}--${this.age}`;
    },
};
Reflect.set(jiuRu, 'name', '九如大师');
console.log(jiuRu); // { name: '九如大师', apprentice1: '花生', apprentice: [Setter] }
const thisArg = { age: 18 };
Reflect.set(jiuRu, 'apprentice', '花生', thisArg);
console.log(jiuRu); // { name: '九如大师', apprentice1: '花生', apprentice: [Setter] }
console.log(thisArg); // { age: 18, apprentice1: '花生--18' }
