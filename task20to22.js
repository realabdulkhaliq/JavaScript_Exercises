/*
Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
*/

let myList = ['Lahore', 'Makkah', 'Madinah', 'Naran', 'Islamabad', 'Faisalabad'];
console.log(myList);

/*
They think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items.
*/
let myListOb = {
    city: 'Lahore',
    mountain: 'K2',
    river: 'Sindh',
    country: 'UAE',
    language: 'Urdu'
}
console.log(myListOb);

/*
Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
*/

myList[7] = 'Karachi';
console.log(myList);
myList.pop();
myList.pop();
console.log(myList);
myList[6] = 'Karachi';
console.log(myList);