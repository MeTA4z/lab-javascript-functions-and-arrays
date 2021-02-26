//Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest.

function maxOfTwoNumbers (y, z) {
    return Math.max(y, z)
    // "if" statements must be built out as below for standard definition

    // if (x > y) {
    //     return x
    // }
    // if (y > x) {
    //     return y
    // }
    // if (x === y) {
    //     return y
    // }
}

//Declare a function named findLongestWord that takes as an argument an array of words and returns the longest one. If there are 2 with the same length, it should return the first occurrence.

// You can use the following array to test your solution:

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord (wordsArr) {
    if (wordsArr.length == 0){
    return null
    }
    let result = ''
    for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i].length > result.length){
        result = wordsArr[i]
        console.log(result)
    }
    }
    
}