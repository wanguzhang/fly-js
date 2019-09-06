// 1.函数默认参数
const func = function _func(name = '默认') {
    console.log(name);
};
func(); // 默认
func('人工智能'); // 人工智能
// 2.函数参数结构赋值
const func2 = function _func2({ name = '哈利波特', age = 18 }) {
    console.log(`${name}-${age}`);
};
func2({ name: '哈利' }); // 哈利波特-18
func2({ name: 'will', age: '19' }); // will-19
// 3.尾调用优化（Tail Call），函数的最后一步调用另一个函数，尾调用可以避免爆栈。例子用的阮一峰 es6 入门
const Fibonacci = function _Fibonacci(n) {
    if (n <= 1) {
        return 1;
    }
    return _Fibonacci(n - 1) + _Fibonacci(n - 2);
};
// 进行尾递归调用优化的代码
const Fibonacci2 = function _Fibonacci2(n, ac1 = 1, ac2 = 1) {
    if (n <= 1) {
        return ac2;
    }

    return _Fibonacci2(n - 1, ac2, ac1 + ac2);
};
console.log(Fibonacci2(100)); // 573147844013817200000
// 超时，爆栈
console.log(Fibonacci(100));
