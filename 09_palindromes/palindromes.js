const palindromes = function (string) {
    let transformedString = '';
    let reversedString = '';

    // Transforming string to lower case and without whitespaces
    for (let i = 0; i < string.length; i++) {
        if (string[i] != ' ' && string[i] != '!' && string[i] != '?' && string[i] != '.' && string[i] != ',') {
            transformedString += string[i].toLowerCase();
        }
    }

    // Reversing string
    for (let i = transformedString.length - 1; i >= 0; i--) {
        reversedString += transformedString[i];
    }

    // console.log('Transformed: ', transformedString);
    // console.log('Reversed: ', reversedString);

    // Checking palindrome
    for (let i = 0; i < transformedString.length; i++) {
        // console.log('i:  ', transformedString[i]);
        // console.log('rev i: ', reversedString[i]);
        if (transformedString[i] != reversedString[i]) {
            return false;
        }
    }
    return true;






    // SIMPLE SOLUTION
    processedString = string.toLowerCase().replace(/[^a-z]/g, "");
    return (
        processedString
            .split("")
            .reverse()
            .join("") == processedString
    );
};

// Do not edit below this line
module.exports = palindromes;
