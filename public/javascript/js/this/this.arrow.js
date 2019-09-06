/**
 * @author: 张攀钦
 * @description: 箭头函数 this 的确认
 * 箭头函数中的 this  继承外层代码库中的函数
 */
global.name = 'global';
const obj = {
    name: 'obj',
    hi() {
        return () => {
            console.log(this.name);
        };
    },
    hiFunction() {
        return function _f() {
            console.log(this.name);
        };
    },
    say: () => {
        console.log(this.name);
    },
    sayFunction() {
        console.log(this.name);
    },
};
const ret = obj.hi();
ret(); // obj
const retFunction = obj.hiFunction();
retFunction(); // global
obj.say(); // undefined
const objFunction = obj.say;
objFunction(); // undefined
obj.sayFunction(); // obj
const { sayFunction } = obj;
sayFunction(); // global
