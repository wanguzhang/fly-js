/* eslint-disable no-shadow */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable no-use-before-define */
/* eslint-disable block-scoped-var */
/* eslint-disable no-unused-vars */
/* eslint-disable vars-on-top */
/* eslint-disable prefer-const */
// 1.块级作用域
{
    const a = 1;
    let b = 2;
    // eslint-disable-next-line no-var
    var c = 3;
}
// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: a is not defined
console.log(c); // 3

// 2.不存在变量提升
console.log(foo); // 输出undefined
var foo = 2;
// console.log(bar); // 报错ReferenceError
let bar = 2;

// 3.暂时性死区(TDZ):在代码块内，使用let命令声明变量之前，该变量都是不可用的。
var d = 'd';
try {
    if (true) {
        // 下面复制报错：ReferenceError: d is not defined
        d = 'd'; // TDZ-begin
        console.log(d);

        let d = 'c'; // TDZ-end
        console.log(d); // c
    }
} catch (error) {
    console.log(error.message); // d is not defined
}

// 3-1,在同一个作用域，不允许声明同一个变量，不同块级可以
let e = '3';
if (true) {
    let e = 'e';
    // 定义 var 会报错
    // var e = 'var-e';
    console.log(e); // e
}
// 4.不建议使用：ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。
(function _execFunction() {
    let f;
    if (true) {
        f = function _f() {
            console.log('倒悬山');
            console.log('剑气长城');
        };
    }
    f();
}());
