/**
 * @author: 张攀钦
 * 本文按照刘小夕的博客[嗨，你真的懂this吗？](https://juejin.im/post/5c96d0c751882511c832ff7b)进行验证。
 * @description: 函数 this 指向其实在执行上下调用别的执行上下文压栈的时候确认的。这个时候this 指向了调用上下文
 */
// 1.默认绑定，指向全局函数。
const f1 = function _f1() {
    if (this === global) {
        console.log('this 指向 全局对象');
    } else {
        console.log(this);
    }
};
// 全局上下文 调用函数 f1 ,所以 this 指向 global
f1();
// 2.隐式绑定
const f2 = function _f2() {
    if (this === global) {
        console.log('this 指向 全局对象');
    } else {
        console.log(this);
    }
};
const obj = { age: 10, f: f2 };
// 在 obj 的执行上下文中运行函数
obj.f(); // { age: 10, f: [Function: _f2] }
const f3 = obj.f;
// 全局执行上下文执行函数f3，this 指向 global
f3(); // this 指向 全局对象
// 3. 显示绑定 Function.prototype.call,Function.prototype.apply,Function.prototype.bind
// 4. new，初始化对象，将 this 绑定到对象上
