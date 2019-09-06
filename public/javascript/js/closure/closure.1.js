/**
 * 在栈中查看执行上下文
 * 执行上下文{
 * 作用域链：[[scope]],在函数创建的时候已经确定。先从自身作用域找，找不到去父作用域找。
 * 变量对象：用于存储被定义在上下文中的 变量(variables) 和 函数声明(function declarations) 。
 * thisArg:执行代码的时候，确认 this 的指针
 * }
 * 函数调用，变量对象（VO）编程（AO）
 */
const A = function _A(data) {
    const a1 = 'a';
    const b1 = 'a-b1';
    // const c1 = 'a-c1';
    const b = function _b() {
        // const b1 = 'b';
        // const c1 = 'b-c1';
        const c = function _c() {
            const c1 = 'c';
            const d = function _d() {
                const d1 = `${data}-${a1}-${b1}-${c1}`;
                return {
                    a1,
                    b1,
                    c1,
                    d1,
                };
            };
            return d;
        };
        return c();
    };
    return b();
};
// 返回的函数中[[scope]] 定义了需要的变量的值。
const a = A('A');
console.log(a());
