"use strict";

const submissionBtn = document.getElementById("submission-btn");
const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");

const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];  //Declare all variables
let average = 0;
let sum = 0;
let smallestNumber = myNumbers[0];

function findSmallestNumber() {               //Step 1

  for (let x = 0; x < myNumbers.length; x++) {

    if (myNumbers[x] < smallestNumber) {
      smallestNumber = myNumbers[x];
    }

  }
  smallestNumberElement.innerText = smallestNumber;   
   
  }
 
let largestNumber = myNumbers[0]

function findLargestNumber() {                //Step 2

  for (let i = 0; i < myNumbers.length; i++) {

    if (myNumbers[i] > largestNumber) {
      largestNumber = myNumbers[i];
    } 
    largestNumberElement.innerText = largestNumber;
  }
  
}

function findAverage() {                      //Step 3
  sum = 0;                                    //This resets the variables for multiple clicks
  average = 0;
  for (let a = 0; a< myNumbers.length; a++) {
    sum = sum + myNumbers[a];
}
average = sum / myNumbers.length;
averageNumberElement.innerText = average;
}

function render() {                         //Don't forget this step :)
    findSmallestNumber();
    findLargestNumber();
    findAverage();
}
submissionBtn.addEventListener("click", function () {   
    render();
  
});