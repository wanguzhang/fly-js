// 1-10 11 -20 21-30
const logNum = function _logNum(num) {
    if (num >= 1 && num <= 10) {
        if (num <= 5) {
            console.log('1 <= num && num <= 5:', num);
        } else if (num > 5) {
            console.log('num > 5 && num <= 10:', num);
        }
    } else if (num >= 11 && num <= 20) {
        if (num <= 15) {
            console.log('11 <= num && num <= 15:', num);
        } else if (num > 15) {
            console.log('15 < num && num <= 20:', num);
        }
    } else if (num >= 21 && num <= 30) {
        if (num <= 25) {
            console.log('21 <= num && num <= 25:', num);
        } else if (num > 25) {
            console.log('25 < num && num <= 30:', num);
        }
    }
};
logNum(20);
