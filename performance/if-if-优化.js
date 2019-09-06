/* eslint-disable no-param-reassign */
const condition1 = function _condition1(num) {
    if (num >= 1 && num <= 10) {
        if (num <= 5) {
            num += 1;
        } else if (num > 5) {
            num += 10;
        }
    }
};
const condition2 = function _condition2(num) {
    if (num >= 11 && num <= 20) {
        if (num <= 15) {
            num += 11;
        } else if (num > 15) {
            num += 20;
        }
    }
};
const condition3 = function _condition3(num) {
    if (num >= 21 && num <= 30) {
        if (num <= 25) {
            num += 21;
        } else if (num > 25) {
            num += 30;
        }
    }
};
const logNum = function _logNum(num) {
    condition1(num);
    condition2(num);
    condition3(num);
};
logNum(20);
