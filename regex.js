//Some sample Regular expressions to have a play with
const readline = require("readline-sync")

const validWholeNumberRegEx = /^[0-9]+$/;
const validPositiveWholeDecimalNumber = /^(?:\d+|\d*\.\d+)$/;
const validAlphabeticString = /^[A-Za-z-]+$/;

// Use the test method to check whether something matches the rules. 
// console.log(validWholeNumberRegEx.test(456))

// Create three functions which check user input for three pieces of data.
// 1. Their name; 2. Their age; 3. Their height. 

function checkFirstName(){
    let input = readline.question("What is your name?: ")
    if (validAlphabeticString.test(input) === true){
    return `${input} is a valid name`
} else {
     return "This is invalid."
}

}
console.log(checkFirstName())


function checkAge(){
    let ageInput = readline.question("What is your age?: ")
    if (validWholeNumberRegEx.test(ageInput) === true){
    return `${ageInput} is a valid age range`
} else {
     return "This is an invalid answer."
}

}
console.log(checkAge())

function checkHeight(){
    let heightInput = readline.question("What is your height?: ")
    if (validPositiveWholeDecimalNumber.test(heightInput) === true){
    return `${heightInput} is a valid height range`
} else {
     return "This is an invalid answer."
}

}
console.log(checkHeight())

// // Other regex methods do exist such as match() (which looks for matching
// // characters) and replace() (which replaces characters), but test is 
// // probably the most commonly used and the one you should use here.