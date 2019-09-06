const sleep = function _sleep(ms, data) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`休息了 ${ms} 秒`);
            resolve(data);
        }, ms);
    });
};
console.log('start');

const data = [
    '跟他説抱歉,我要去找个女孩',
    '忘记应该忘记的，面对未来一切可以出现的。',
    '孩子，生活不是靠书本和想当然来的，是靠心去体会的。',
    '总有人有不好的时候，但这也会让你回忆起从前不曾在意的美好。'
];
const asyncFunc = async function _async(data) {
    console.log('asyncFunc-start');
    const promises = [];
    for (let index = 0; index < data.length; index++) {
        promises.push(sleep(index, data[index]));
    }
    const ret = await Promise.all(promises);
    console.log('处理完在开始');
    console.log('asyncFunc-end');
    return ret;
};
const retPromise = asyncFunc(data);
retPromise.then(data => {
    console.log(data);
});
console.log('end');
