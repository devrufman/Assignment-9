/*
question 1
1. Create a variable with your best meal as a string.
2. Use string concatenation or template literals to combine it with your name (e.g., "John loves ${best_meal}").
3. Print the final message.*/

let best_meal = "bread and beans"
let myWants = `Rufai loves ${best_meal}`
console.log(`Ans 1: ${myWants}`)

/*
question 2
1. Create a variable with today_day and assign it a value (e.g., 23).
2. Use a comparison operator to check if the today_day is greater than 30.
3. Store the result of the comparison in a variable and print it.*/

let today_day = "15";
let checkToday = today_day > 30;
console.log(`Ans 2: ${checkToday}`);

/*
question 3
1. Create a variable count and assign it an initial value of 0.
2. Add 10 to the count variable.
3. Multiply 20 by the count variable.
4. Print the final value of count.*/

let count = "0";
count += 10;
count *= 20;
console.log(`Ans 3: ${count}`);

/*
question 4
1. Create a variable without assigning any value (leave it undefined).
2. Print the variable to see the output.
3. Now, assign null to the same variable and print it again.*/

let arTogrol;
console.log(`Ans 4a: ${arTogrol}`);
arTogrol = null;
console.log(`Ans 4b: ${arTogrol}`);

/*
question 7
1. Write a function called add_three_num that takes three numbers as arguments.
2. The function should return the addition of the three numbers.
3. Call the function with three numbers and print the returned value.*/

/* 
question 5 the function actually added the three numbers together
after declaring the functions then declaring for returns before
printing the answer
*/
function add_three_num(num1, num2, num3) { //declaring the function.
return num1 + num2 + num3 // declaring the returns  
}
console.log(`Ans 7&5: ${add_three_num(5, 10, 20)}`); //printing the results

/*
question 6
1. Declare a function named greet that takes a person's name and time of day as an argument.
2. Inside the function, print a message like: "Good [day], [name]".
3. Call the function and pass any name and time of day to it.
*/
function greet(name, timeOfDay) {
console.log(`Ans 6: Good ${timeOfDay} ${name}`);  
}
greet("Rufai", "Evening")

/*
question 8
1. Create a variable called nick_name and assign it your nick name.
2. Create a variable called count and assign it any number of your choice.
3. Print both variables using console.log().
*/

let nick_name = 'Edge';
let counts = '7';
console.log(`Ans 8: ${nick_name} ${counts}`);

/*
question 9
1. Create two boolean variables, isPublicHoliday and isWeekDay, and assign them appropriate values.
2. Combine them using && (and) and || (or) operators to check if the weekday is a public holiday.
3. Print the result.
 */

let isPublicHoliday = "true";
let isWeekDay = "false";

let isHolidayWeekday = isPublicHoliday && isWeekDay;
let isEither = isPublicHoliday || isWeekDay;

console.log(`Ans 9a: ${isHolidayWeekday}`);
console.log(`Ans 9b: ${isEither}`);

/*
question 10
1. Create two variables, x and y, and assign them any number of your choice.
2. Perform addition, subtraction, multiplication, division and modulo operation on these variables.
3. Print the results of each of the operations.
*/

let x = 50;
let y = 20;

let addition = x + y
let subtraction = x - y
let multiplication = x * y
let division = x / y
let modulo = x % y

console.log(`Ans 10a: ${addition}`);
console.log(`Ans 10b: ${subtraction}`);
console.log(`Ans 10c: ${multiplication}`);
console.log(`Ans 10d: ${division}`);
console.log(`Ans 10e: ${modulo}`);



