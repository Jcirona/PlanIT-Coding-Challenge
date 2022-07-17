// Challenge 1
function fibonacci(n) {
    if (n < 2) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}


console.log(fibonacci(9))


// Challenge 2
function getCount(string) {
    const charCount = {};
    const lowerCaseString = string.toLowerCase();

    for (let char of lowerCaseString) {
        charCount[char] = charCount[char] + 1 || 1
    }

    let maxCount = 0
    let maxChar = null
    for (let key in charCount) {
        if(charCount[key] > maxCount) {
            maxCount = charCount[key]
            maxChar = key
        }
    }
    return maxChar  
}

console.log(getCount('jElLyfish'))