/*
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite 
only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a 
name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
actually have an empty list at the end of your program.
*/

let arr = ["Wasim", "Shahid", "Hassan"];
for(var i=0; i<arr.length; i++){
    console.log("Dear "+arr[i]+"! I would like to invite you for a dinner.");
}
// Shahid didn't make dinner
console.log(arr[1]+" did not make the dinner.");

// Shahid is replaced by Majid
arr[1] = "Majid"
for(var i=0; i<arr.length; i++){
    console.log("Dear "+arr[i]+"! I would like to invite you for a dinner.");
}

//Add a print statement to the end of your program informing people that you found a bigger dinner table.
console.log("You people found a bigger dinner table");

// Add one new guest to the beginning of your array.
arr.unshift("Fayyaz");
// Add one new guest to the middle of your array.
arr.splice(2,0,"Umar");

// Use append() to add one new guest to the end of your list. 
arr.push("Shahid");

console.log(arr);
// Print a new set of invitation messages, one for each person in your list
for(var i=0; i<arr.length; i++){
    console.log("Dear "+arr[i]+"! I would like to invite you for a dinner on coming Sunday.");
}

console.log("\nYou can invite only two people for dinner.");

// Removing persons by .pop()
let person1 = arr.pop();
console.log(person1+" I am sorry, you aren’t invited for dinner.");
let person2 = arr.pop();
console.log(person2+" I am sorry, you aren’t invited for dinner.");
let person3 = arr.pop();
console.log(person3+" I am sorry, you aren’t invited for dinner.");
let person4 = arr.pop();
console.log(person4+" I am sorry, you aren’t invited for dinner.\n");

// New two person array
console.log("New Array is");
console.log(arr);
for(var i=0; i<arr.length; i++){
    console.log("Dear "+arr[i]+"! You are still invited for dinner.");
}

// Removing remaining 2 persons
let person5 = arr.pop();
console.log("\n"+person5+" I am sorry, you aren’t invited for dinner.");
let person6 = arr.pop();
console.log(person6+" I am sorry, you aren’t invited for dinner.");

// Final Empty Array
console.log("Final Empty Array is ");
console.log(arr);