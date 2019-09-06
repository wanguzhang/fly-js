/* eslint-disable no-unused-vars */
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const str = `sleep for ${ms} ms`;
            console.log(str);
            resolve(`resolve-${str}`);
        }, ms);
    });
}

async function asyncFunction2() {
    console.time('asyncFunction2 total executing:');
    const promiseRace = await Promise.race([sleep(1000), sleep(2000), sleep(3000), sleep(4000), sleep(5000)]);
    console.timeEnd('asyncFunction2 total executing:');
    console.log(promiseRace); // [ 'sleep for 1000 ms','sleep for 2000 ms','sleep for 3000 ms','sleep for 4000 ms','sleep for 5000 ms' ]
    return 'asyncFunction2 done.'; // 这个可以不返回，这里只是做个标记，为了显示流程
}
asyncFunction2().then(data => console.log(data));
/**
 *
sleep for 1000 ms
asyncFunction2 total executing:: 1006.042ms
resolve-sleep for 1000 ms
asyncFunction2 done.
sleep for 2000 ms
sleep for 3000 ms
sleep for 4000 ms
sleep for 5000 ms
 */
