/**
 * @author: 张攀钦
 * Set.prototype.forEach(callback([currentValue[,currentKey[,set]]])[, thisArg])
 * @param {*} currentValue 操作当前元素
 * @param {*} currentKey 操作当前元素
 * @param {Set} set 调用方法的的实例
 * @param {*} thisArg 给回调函数绑定的 this,箭头函数会绑定不上
 * @description:根据集合中元素的插入顺序，依次执行提供的回调函数。
 */
const set = new Set(['蝙蝠侠之侠影之谜', '蝙蝠侠之黑暗骑士', '蝙蝠侠之黑暗骑士的崛起']);
set.forEach((key, val, set1) => {
    console.log(key);
    console.log(set1);
    console.log(val);
});
console.log(set);
