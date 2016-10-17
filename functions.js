var checkContainStr = function (arr) {
    var containStr = false;
    arr.forEach(function(value) {
        if(isNaN(value)) {
            containStr = true;
        }
    });
    return containStr;
};

// 1) function that accepts an array of numbers as 
// an argument and returns their average
exports.average = function (numArr) {
    if(checkContainStr(numArr) === false) {
        var sum = 0;
        numArr.forEach(function(value) {
            sum = sum + value;
        });

        return (sum / numArr.length); 
    } else {
        return 'Error: array contain string';
    }
          
};

// 2) function that accepts an array of numbers as 
// an argument and returns the largest number in the array
exports.largest = function (numArr) {  
    if(checkContainStr(numArr) === false) {  
        var largeNum = numArr[0];

        numArr.forEach(function(value) {
            if(largeNum < value) {
                largeNum = value;
            }
        });
        return largeNum;  
    } else {
        return 'Error: array contain string';
    }  
};

// 3) function that accepts an array of numbers and 
// returns true if it contains at least one even number, false otherwise
exports.atLeastOneEven = function (numArr) {
    if(checkContainStr(numArr) === false) {
        var bool = false;

        numArr.forEach(function(value) {
            if((value%2) === 0) {
                bool = true;
            }
        });
        return bool;
    } else {
        return 'Error: array contain string';
    }
};

// 4) function that accepts an array of numbers and 
// returns true if every number is even, false otherwise
exports.allEven = function (numArr) {
    if(checkContainStr(numArr) === false) {
        var evenNum = 0;

        numArr.forEach(function(value) {
            if((value%2) === 0) {
                evenNum++;
            }
        });

        return (evenNum === numArr.length)? true : false;
    } else {
        return 'Error: array contain string';
    }
};

// 5) function that accepts two arguments—an array of strings and a string—and
// returns true if the string is contained in the array, false otherwise.
exports.arrayContainOneElement = function (strArr, str) {
    return ((strArr.indexOf(str) > -1) ? true : false);
};

// 6)function that accepts two arguments—an array of strings and a string—and
// returns true if the string is contained at least 2 given string, false otherwise.
exports.arrayContainNElement = function (strArr, str, num) {
    var counter = 0;

    strArr.forEach(function(value) {
        if(value === str) {
            counter += 1;
        }
    });

    return (counter >= num) ? true : false;
};