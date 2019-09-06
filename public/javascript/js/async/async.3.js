const async = async function _async() {
    const awaitRet = await Promise.resolve(1).then((data) => {
        console.log('resolve-then');
        return data;
    });
    console.log(awaitRet);
    console.log('await 后面代码');
};
console.log('start');
async();
console.log('end');

Promise.resolve()
    .then(async () => {
        await Promise.resolve(1).then((data) => {
            console.log('resolve-then');
            return data;
        });
    })
    .then(() => {
        console.log('await 后面代码');
    });
