// Question 1: Add two numbers ?

//You are provided with two numbers A and B. Your task is to add these two numbers. Note: You have to complete AddTwoNumbers function. No need to take any input. 

let a = 8;
let b = 23;
console.log(a + b); // Output: 31

// Question 2: Find if the conditions are obeyed or not ?

// You are given two number first as A and second as B and check if both conditions 
// (A<10<10 and A>B>) are satisfied or not with the help of operators. Note: You have to complete Is_Valid function. No need to take any input. 


let c = 10;
let d = 20;
console.log(c<11<d,c>12>d);

//Question 3: Check the conditions ? 

/* You are given two numbers A and B. You need to do the following checks: 
1.	if both are divisible by 10 console true. 
2.	if both are not divisible by 10 console false. 3. if one of them only is divisible by 10 console true. 
Use operator to do this. 
Note: You have to complete Check function. No need to take any input. 
 */

let e = 53;
let f = 23;
console.log(e%10==0&&f%10==0); // Output: false 

console.log(e%10==0||f%10==0); // Output: true 

//Question 4: Find the first digit of a 4 -digit number ?

/* You are provided a four digit number N only. Your task is to print out the first digit of that number. 
Note: You have to complete First_Digit function. No need to take any input. 
*/

let g = 12345678;
let output = Math.floor(g/10000000);
console.log(output);

//Question 5: Find the last digit of a 4 -digit number ?

/*You are provided a four digit number N only. Your task is to print out the last digit of that number. 
Note: You have to complete Last_Digit function. No need to take any input. 
 */

let h = 1234;
let result = h%10;
console.log(result); // Output: 4

//Question 6: Find the remainder ?

/* You are provided with two numbers A and B where A as divisor and B as dividend.Your task is find the remainder. 
Note: You have to complete Find_the_remainder function. No need to take any input. 
*/
 
let i = 10;
let j = 3;
console.log(i%j); // Output: 1

//Question 7: Multiply two numbers ?

/* You are provided with two numbers A and B. Your task is to multiply these two numbers. Note: You have to complete Multiply_two_number function. No need to take any input. */

let k = 5;
let l = 7;
console.log(k*l); // Output: 35

//Question 8: Marks Calculator ?

/*Shyam has got his marks in three subjects as A, B, and C (out of 100).Write a program to calculate his total marks and his average. 
Note: You have to complete Sum and Average functions. No need to take any input. 
 */

var maths = 85;
var science = 90;
var english = 78;
var total = maths + science + english;
var average = total / 3;
console.log("Total Marks: ", total); // Output: 253
console.log("Average Marks: ", average); // Output: Total Marks:  253 Average Marks
