// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
// let character = "number";
//  if (A === 65) {

//  alert("Uppercase");
//  }
//  else if (Z === 90) {
//  alert("Uppercase");
//  }
//  if (a===97){
//  alert("lower case");
// }
// else if (z === 122) {
// alert("lower case");
// }
//  else {
//  alert("correct");
// }

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

let num1 =(1)
let num2=(2) 
    if (num1 > num2) {
        console.log(`${num1} is larger than ${num2}.`);
    } else if (num1 < num2) {
        console.log(`${num2} is larger than ${num1}.`);
    } else {
        console.log("Both integers are equal.");
    }

//    3. Write a program that takes input a number from user &
//     state whether the number is positive, negative or zero.

let num=(0)

    if (-1 > 0) {
        console.log(`${-1} is positive.`);
    } else if (-1 < 0) {
        console.log(`${-1} is negative.`);
    } else {
        console.log("The number is zero.");
    }

//     4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise
//     findVowel("e");


 let Vowel = function(letter){
    let vowels = ["a", "e", "i", "o", "u"];  
 if (e === Vowel) {
 alert("true!");
 }
 else {
 alert("false");
 }
 }


//  5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.



let correctPassword = "my Password";
let userPassword = prompt("Please enter your password:");
if (!userPassword) {
    alert("Please enter your password");
} else if (userPassword === correctPassword) {
    alert("Correct! entered matches the original password.");
} else {
    alert("Incorrect password");
}

// This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
// Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

var time = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):"));
if (time >= 0 && time < 1200) {
    alert("Good morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!");
} else if (time >= 1700 && time < 2000) {
    alert("Good evening!");
} else if (time >= 2000 && time < 2400) {
    alert("Good night!");
} else {
    alert("Invalid time input.");
}
