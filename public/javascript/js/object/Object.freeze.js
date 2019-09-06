/* eslint-disable no-proto */
/**
 * @Author: 张攀钦
 * const ret1 = Object.freeze(obj)
 * @description 冻结一个对象,浅冻结，obj 属性是对象 ret 的话，对象ret 里面的属性可以操作。
 * obj 中不能添加、修改和删除属性；属性描述符也不能修改。因为是浅冻结，所以原型对象的属性可以修改。
 * @param {Object} obj: 需要冻结的对象。
 * @returns {Object} ret1 操作的对象。obj===ret1  为 true
 */
// 1.
const parent = { name: 'IronMan', age: 18, testObj: { test: 'test' } };
const obj2 = Object.create(parent);
obj2.data = { hobby: '看电影' };
obj2.gender = '男';
// 冻结obj2 之前操作,可以修改原型属性
console.log('name 属性', obj2.name); // IronMan
obj2.__proto__.name = '钢铁侠';
console.log('name 属性', obj2.name); // 钢铁侠
obj2.__proto__.name = 'IronMan';
console.log('name 属性', obj2.name); // IronMan
// 冻结对象
const ret = Object.freeze(obj2);
console.log(ret === obj2); // true
console.log('冻结之后的obj2', obj2); // { data: { hobby: '看电影' }, gender: '男'}
// 验证是否可以修改其原型，得出结论，可以增加、删除、更新原型对象中的属性
console.log('name 属性', obj2.name); // IronMan
obj2.__proto__.name = '钢铁侠';
console.log('name 属性', obj2.name); // 钢铁侠
console.log('name 属性', obj2.__proto__.name); // 钢铁侠
delete obj2.__proto__;
console.log('delete obj2.__proto__', obj2.__proto__); // { name: '钢铁侠', age: 18, testObj: { test: 'test' } }
obj2.__proto__.add = 'add';
console.log('obj2.__proto__.add 添加属性', obj2.__proto__.add); // add

// 修改自身基本数据类型,冻结之后不能添加属性
obj2.hobby = '看电影,复仇者联盟 4';
console.log(obj2); // { data: { hobby: '看电影' }, gender: '男' }
// 冻结之后不能删除属性
delete obj2.data;
console.log(obj2); // { data: { hobby: '看电影' }, gender: '男' }
// 冻结之后不能修改属性
obj2.gender = 'nan';
console.log(obj2); // { data: { hobby: '看电影' }, gender: '男' }
// 修改自身对象
obj2.data.hobby = '看电影,黑客帝国';
console.log(obj2); // { data: { hobby: '看电影,黑客帝国' }, gender: '男'}

// 深冻结实现
Object.deepFreeze = function deepFreeze(obj) {
    // 取回定义在obj上的属性名
    const propNames = Object.getOwnPropertyNames(obj);

    // 在冻结自身之前冻结属性
    propNames.forEach((name) => {
        const prop = obj[name];
        // 如果prop是个对象，冻结它
        if (typeof prop === 'object' && prop !== null) {
            deepFreeze(prop);
        }
    });

    // 冻结自身(no-op if already frozen)
    return Object.freeze(obj);
};

console.log('深冻结之前', obj2); // { data: { hobby: '看电影,黑客帝国' }, gender: '男' }
Object.deepFreeze(obj2);
obj2.data.hobby = '看电影,阿甘正传';
// 深冻结成功
console.log(obj2); // { data: { hobby: '看电影,黑客帝国' }, gender: '男'}
