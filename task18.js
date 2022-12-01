/*
Seeing the World: Think of at least five places in the world you’d like to visit.

• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/

let myList = ["Makkah", "Madinah", "Dubai", "London", "Switzerland", "China"];
console.log("Print your array in its original order.")
console.log(myList);

// List in Alphabetical Order
console.log("Print your array in alphabetical order without modifying the actual list.")
let orderedList = myList.slice(0).sort();
console.log(orderedList);

// Original List
console.log("Show that your array is still in its original order by printing it.")
console.log(myList);

// Reverse List
console.log("Print your array in reverse alphabetical order without changing the order of the original list.")
let reversedList = myList.slice(0).reverse();
console.log(reversedList);

console.log("Show that your array is still in its original order by printing it again.")
console.log(myList);
console.log("Reverse the order of your list. Print the array to show that its order has changed.");
console.log(myList.reverse());
console.log("Reverse the order of your list again. Print the list to show it’s back to its original order.");
console.log(myList.reverse());
console.log("Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.");
console.log(myList.sort());
console.log("Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.")
console.log(myList.reverse());