/**
 * @author: 张攀钦
 * @description: Date 对象则基于 Unix Time Stamp，即自1970年1月1日（UTC）起经过的毫秒数。
 */
// 1. new Date(); 获取系统当前时间
const now = new Date();
console.log(now); // 2019-05-31T14:33:47.439Z
// 2.new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
// monthIndex 从 0 开始
const thatData = new Date(2019, 2, 14, 19, 30);
console.log(thatData); // Thu Mar 14 2019 19:30:00 GMT+0800 (中国标准时间)
console.log(thatData.toUTCString()); // Thu Mar 14 2019 19:30:00 GMT+0800 (中国标准时间)
// 3. const milliseconds = Date.UTC(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
const milliseconds = Date.UTC(2019, 2, 14, 19, 30);
console.log(milliseconds); // 1552591800000
// 4.new Date(milliseconds);1970-1-1经过毫秒之后的时间
const thatDay = new Date(milliseconds);
console.log(thatDay); // 2019-03-14T19:30:00.000Z
