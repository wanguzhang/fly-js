/* eslint-disable no-unused-vars */
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`sleep for ${ms} ms`);
        }, ms);
    });
}
// 1.错误用法
async function asyncFunction() {
    console.time('asyncFunction total executing:');
    const sleep1 = await sleep(1000);
    console.log(`sleep1: ${sleep1}`);
    const sleep2 = await sleep(2000);
    console.log(`sleep2: ${sleep2}`);
    const sleep3 = await sleep(3000);
    console.log(`sleep3: ${sleep3}`);
    const sleep4 = await sleep(4000);
    console.log(`sleep4: ${sleep4}`);
    const sleep5 = await sleep(5000);
    console.log(`sleep5: ${sleep5}`);
    console.timeEnd('asyncFunction total executing:');
    return 'asyncFunction done.'; // 这个可以不返回，这里只是做个标记，为了显示流程
}
// 2.推荐用法用法
async function asyncFunction2() {
    console.time('asyncFunction2 total executing:');
    const promiseAll = await Promise.all([sleep(1000), sleep(2000), sleep(3000), sleep(4000), sleep(5000)]);
    console.timeEnd('asyncFunction2 total executing:');
    console.log(promiseAll); // [ 'sleep for 1000 ms','sleep for 2000 ms','sleep for 3000 ms','sleep for 4000 ms','sleep for 5000 ms' ]
    return 'asyncFunction2 done.'; // 这个可以不返回，这里只是做个标记，为了显示流程
}
// asyncFunction total executing:: 15023.078ms,全部阻塞运行
// asyncFunction().then(data => console.log(data));
// asyncFunction2 total executing:: 5004.143ms
// asyncFunction2();
