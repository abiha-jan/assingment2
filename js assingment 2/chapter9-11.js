// 4.Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

// let remainingFuel = prompt('in litres: ');
// if(remainingFuel <= 0.25) {
//     alert('Please refill the fuel in your car');}


// 6.. Write a program to take input the marks obtained in three
//     subjects & total marks. Compute & show the resulting
//     percentage on your page. Take percentage & compute
//     grade as per following table:

// let marks = prompt('Enter marks: ');
// if(marks >= 80) {
//     alert('A One grade');
// } else if(marks >= 70) {
//     alert('A grade');
// } else {
//     alert('Fail');
// }

function calculate() {
   let a= parseInt (document.getElementsByid('bookone').value);
   let b= parseInt (document.getElementsByid('booktwo').value);
   let c= parseInt (document.getElementsByid('bookthree').value);
   let d= parseInt (document.getElementsByid('bookfour').value);
   let e= parseInt (document.getElementsByid('bookfive').value);
if(a>100|| b>100|| c>100|| d>100|| e>100){
    alert("Please enter correct marks")
}
else{
    let obtain=a + b + c + d + e 
    document.getElementById("obtain").innerHTML=obtain;
    let per=obtain/500*100;
    document.getElementById("percentage").innerHTML=percentag;
    if(a>40 && b>40 && c>40 && d>100 && e>40){
    document.getElementById("remarks").innerHTML="Pass";
}
else{
    document.getElementById("obtain").innerHTML="Fail";

}
if(obtain>=90){
    document.getElementById("grade").textContent="A";

}

else if(obtain>=80){
    document.getElementById("grade").textContent="B";

}

else if(obtain>=70){
    document.getElementById("grade").textContent="C";

}

else if(obtain>=60){
    document.getElementById("grade").textContent="D";

}

else if(obtain>=50){
    document.getElementById("grade").textContent="Parmut";

}

else{
    document.getElementById("grade").textContent="F";

}

return false
}
    
}

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

let secretNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
if (userGuess === secretNumber) {
        alert("Correct answer");
    } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
        alert("Close enough to the correct answer");
    } else {
        alert("wrong guess.secret number  " + secretNumber);
    }
    //8. Write a program to check whether the given number is
    // divisible by 3. Show the message to the user if the number
    // is divisible by 3.

    let divisible = prompt('Number ');
    if(divisible <= 3*2) {
        alert('Divisible by 3');}



        //9. Write a program that checks whether the given input is an
        // even number or an odd number.
        
        let number = 5;
        if (number % 2 == 0) {
          alert(number + " is even.");
        } else {
          alert(number + " is odd.");
        }

//     10.    Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

let temperature=("temperature")
    if ("temperature"> 40){
         alert("It is too hot outside.")
         }
         if ("temperature" > 30){
         alert("The Weather today is Normal.")
         }
         if ("temperature" > 20){
            alert("Today’s Weather is cool.")
        }
         if("temperature" > 10){
           alert("OMG! Today’s weather is so Cool.") 
        }

        //10. Write a program to create a calculator for +,-,*, / & %
        // using if statements. Take the following input:
        // a. First number
        // b. Second number
        // c. Operation (+, -, *, /, %)
        // Compute & show the calculated result to user.
        const display =document .getElementById("display")

        function appendToDisplay(input){
            display.value+=input;
        
        }
        function clearDisplay(){
            display.value = '' ;
        
        }
        function calculate(){
           try{
            display.value=eval(display.value);
        }
        catch(error){
            display.valve='Error';
        }
        
        }