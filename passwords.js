//Boilerplate
const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

});

// Welcome the user to the password validator tool
console.log("Welcome to the password validator tool!")

// Prompt the user for a password to validate
reader.question("Enter a password (10 character minimum): ", function (answer) 

// Check if the user’s password meets the following constraint:

// At least 10 characters long
if (answer.length >= 10) {
    if (checkSpecChar === true && checkNums === true) {
        console.log("Great Password!");
    } else if  (checkNums === true) {
        console.log("Good Password, lets check the number requirements.");
    }
    } else {
     console.log("You almost have it,Lets try using a number or special character.")
}
 
// If the user’s password fails the constraint, show a failure message to the user
console.log(password )