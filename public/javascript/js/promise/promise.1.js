const demo1 = function _demo1(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) {
            resolve(num);
            return;
        }
        reject(num);
    });
};
demo1(3)
    .then(resolveData => {
        console.log('resolve-', resolveData);
    })
    .then(data => console.log('依然可以调用哦，只是 data undefined-', data))
    .catch(error => {
        console.log('catch-', error);
        return '我处理 rejected 了';
    })
    .then(data => console.log('catch 处理之后的 then-', data));
