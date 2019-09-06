/* eslint-disable func-names */
/* eslint-disable no-proto */
/**
 * [JS 的 new 到底是干什么的？](https://juejin.im/post/584e1ac50ce463005c618ca2)
 * [JS原型链与继承别再被问倒了](https://juejin.im/post/58f94c9bb123db411953691b)
 * [从prototype与__proto__窥探JS继承之源](https://juejin.im/post/58f9d0290ce46300611ada65)
 * @author: 张攀钦
 * @description:
 * 每个对象（包括函数）都会有__proto__属性,es6也将其加入到规范中来了。
 * __proto__ 是对象的内部属性, 它指向构造器的原型, 对象依赖它进行原型链查询，instanceof 也是依赖它来判断是否继承关系.
 * 对象 obj 属性查找的规则，先从obj中查找，找不到就去obj的原型（obj.__proto__）中找，找不到，再去obj原型的原型(obj.__proto__)找。。。。直到找到 或者null，原型链因此形成.
 * const A =function _A(){}
 * const a=new A();
 * new 关键字提到什么作用呢？
 * 1、创建一个空对象 const temp={};
 * 2、对对象赋值，temp.__proto__=A.prototype;
 * 3、A.call(temp);将 A 中的 this 替换为 temp ,然后将 temp 返回赋值给啊a;
 */
// 《雪中悍刀行》
// 1.对象 __proto_ 属性
const A = { wife: { name: '洛阳' } };
const B = { faShu: '真武法身' };
const C = { name: '徐凤年' };
// Object.setPrototypeOf(xuFengNian, qianShi); 推荐这种写法
B.__proto__ = A;
C.__proto__ = B;
// 先从自身对象 obj 找，找不到去obj的原型（obj.__proto__）中找,还找不到去原型的原型找（obj.__proto__.__proto__）
console.log(C.wife); // { name: '洛阳' }
console.log(C.faShu); // 真武法身
console.log(C.name); // 徐凤年
// 2.验证 new 关键字的作用
const D = function _D(name) {
    this.name = name;
    this.play = function _play() {
        console.log(1211);
    };
};
D.prototype = {
    constructor: D,
    getName() {
        return this.name;
    },
};
// 执行构造函数返回实例
const d = new D('洪洗象');
// a.__proto__=A.prototype;
console.log(d.__proto__ === D.prototype); // true
// 将 this 指向 obj
console.log(d.getName()); // 洪洗象
d.play(); // 验证 this 指向 obj
