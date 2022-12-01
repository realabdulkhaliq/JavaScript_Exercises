/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three 
more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing 
people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.
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