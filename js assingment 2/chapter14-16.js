// 1.Declare an empty array using JS literal notation to store
// student names in future.

let studentName=[]

// 2. Declare an empty array using JS object notation to store
// student names in future.

let studentName1=[]


// 3. Declare and initialize a strings array.

let strings = ["apple", "banana", "orange", "grape"];
console.log(strings[0]); 
console.log(strings[1]); 
console.log(strings[2]); 
console.log(strings[3]); 

// 4. Declare and initialize a numbers array.


let number = [10, 20, 30, 40, 50];
console.log(number[0]); 
console.log(number[1]); 
console.log(number[2]); 
console.log(number[3]); 
console.log(number[4]); 


// 5. Declare and initialize a boolean array.


let boolean = [true, false];
console.log(boolean[0]); 
console.log(boolean[1]); 
console.log(boolean[2]); 
console.log(boolean[3]); 



// 6. Declare and initialize a mixed array.

let mixed = ["apple", 10, true,{studentName : 30}];
console.log(mixed[0]); 
console.log(mixed[1]); 
console.log(mixed[2]); 
console.log(mixed[3]); 


// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
console.log(qualifications)

// 8.Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

let studentName2=['kashan' , 'hammad' ,'farhan']
let studentScore=[500]
let marks = prompt('Enter marks: ');
if(marks >= 80) {
    alert('A One grade');
} else if(marks >= 70) {
    alert('A grade');
} else {
    alert('Fail');
}