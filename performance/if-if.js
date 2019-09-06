const logNum = function _logNum(num) {
    let sum = num;
    if ((num >= 1 && num <= 10) || num % 2 === 0) {
        if (num <= 5 || num % 2 === 0) {
            sum += 1;
        } else if (num > 5 || num % 2 === 0) {
            sum += 10;
        }
    }
    if ((num >= 11 && num <= 20) || num % 2 === 0) {
        if (num <= 15 || num % 2 === 0) {
            sum += 11;
        } else if (num > 15 || num % 2 === 0) {
            sum += 20;
        }
    }
    if ((num >= 21 && num <= 30) || num % 2 === 0) {
        if (num <= 25 || num % 2 === 0) {
            sum += 21;
        } else if (num > 25 || num % 2 === 0) {
            sum += 30;
        }
    }
    return sum;
};
console.log(logNum(20));
