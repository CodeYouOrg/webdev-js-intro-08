// Prevent us from attempting to use variables
// that are not declared
"use strict"
const grades = [92, 85, 100, 71, 65]
let sum = 0;
let average = 0;
for (let i = 0; i < grades.length; i++) {
    console.log('Grade ' + (i+1) + ': ' + grades[i]); 
sum = sum + grades[i];
average = sum / grades.length;
}
console.log('Final Average: ' + average);

let sums = 0;
average = 0;
for (let grade of grades){
    sums += grade;
}
average = sums/ grades.length;
console.log(average);

grades.forEach(function(grades) {
    console.log(grades);
});
const numbers = [10, 20, 30 , 40]
for (let number of numbers) {
 number[number] = 0;     //output error

    console.log(number);
}   

numbers.forEach(function(numbers) {
    numbers[number] = 10;    //output error - this is immutable
    console.log(numbers);
});
