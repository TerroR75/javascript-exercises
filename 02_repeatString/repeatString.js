const repeatString = function (string, number) {
    let endResult = '';
    if (number > 0) {
        for (let i = 0; i < number; i++) {
            endResult += string;
        }
        return endResult;
    }
    else if (number < 0) {
        return 'ERROR';
    }
    else {
        return '';
    }

};

// Do not edit below this line
module.exports = repeatString;
