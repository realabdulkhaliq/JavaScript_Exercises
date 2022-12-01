/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/

// String Testing
let aNum = '20'
console.log(' aNum == 20 ? I predict True');
console.log(' aNum === 20 ? I predict False');
let aString = 'String';
console.log(" aString === 'String' ? I pridict True");
console.log(" aString === 'string' ? I pridict False");

// Using lower case function
console.log("aString.toLowerCase() == 'String' ? I pridict False");
console.log("aString.toLowerCase() == 'string' ? I pridict True");

// Numerical Testing
console.log(" 7 == 7 ? I pridict True");
console.log(" 7 != 7 ? I pridict False");
console.log(" 7 > 5 ? I pridict True");
console.log(" 7 < 5 ? I pridict False");
console.log(" 7 >= 5 ? I pridict True");
console.log(" 7 <= 5 ? I pridict False");

// AND OR Operator
console.log(" (7>5) && (5<3) ? I pridict False");
console.log(" (7>5) || (5<3) ? I pridict True");

// Array
let arr = ['A', 'B', 'C'];
console.log(" arr[0] == 'A' ? I pridict True");
console.log(" arr[0] == 'B' ? I pridict False");
// By For Loop
var guess = true;
for(let i=0; i<arr.length; i++){
    if(arr[i] == 'D'){
        console.log("I pridict True");
        guess = false;
        break;
    }
}
if(guess == true){
    console.log("I pridict False.")
}
