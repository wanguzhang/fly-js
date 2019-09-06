// 1-10 11 -20 21-30
const rules = {
    X(num) {
        if (num <= 5) {
            console.log('1 <= num && num <= 5:', num);
        } else if (num > 5) {
            console.log('num > 5 && num <= 10:', num);
        }
    },
    Y(num) {
        if (num <= 15) {
            console.log('11 <= num && num <= 15:', num);
        } else if (num > 15) {
            console.log('15 < num && num <= 20:', num);
        }
    },
    Z(num) {
        if (num <= 25) {
            console.log('21 <= num && num <= 25:', num);
        } else if (num > 25) {
            console.log('25 < num && num <= 30:', num);
        }
    },
};
const strategy = function _strategy(num) {
    if (num >= 1 && num <= 10) {
        return 'X';
    }
    if (num >= 11 && num <= 20) {
        return 'Y';
    }
    return 'Z';
};
const logNum = function _logNum(num) {
    const action = strategy(num);
    const rule = rules[action];
    if (rule) {
        rule(num);
    }
};
logNum(20);
