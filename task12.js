/*
Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
print a message to them. The text of each message should be the same, but each message should be 
personalized with the person’s name.
*/

let arr = ["Wasim", "Shahid", "Hassan"];
let greetings = "Assalam o Alaikum ";
console.log(greetings+arr[0]);
console.log(greetings+arr[1]);
console.log(greetings+arr[2]);

// This can be done by for loop too

for(var i=0; i<arr.length; i++){
    console.log(greetings+arr[i]);
}