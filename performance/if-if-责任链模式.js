const rules = [{
    match(num) {
        if ((num >= 1 && num <= 10) || num % 2 === 0) {
            return true;
        }
        return false;
    },
    action(num, sum) {
        let tempSum = sum;
        if (num <= 5 || num % 2 === 0) {
            tempSum += 1;
        } else if (num > 5 || num % 2 === 0) {
            tempSum += 10;
        }
        return tempSum;
    },
}, {
    match(num) {
        if ((num >= 11 && num <= 20) || num % 2 === 0) {
            return true;
        }
        return false;
    },
    action(num, sum) {
        let tempSum = sum;
        if (num <= 15 || num % 2 === 0) {
            tempSum += 11;
        } else if (num > 15 || num % 2 === 0) {
            tempSum += 20;
        }
        return tempSum;
    },
}, {
    match(num) {
        if ((num >= 21 && num <= 30) || num % 2 === 0) {
            return true;
        }
        return false;
    },
    action(num, sum) {
        let tempSum = sum;
        if (num <= 25 || num % 2 === 0) {
            tempSum += 21;
        } else if (num > 25 || num % 2 === 0) {
            tempSum += 30;
        }
        return tempSum;
    },
}];
const logNum = function _logNum(num) {
    let sum = num;
    rules.forEach((rule) => {
        if (rule.match(num)) {
            sum = rule.action(num, sum);
        }
    });
    return sum;
};
console.log(logNum(20));
