/*
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/

let magicianNames = ['Abdul', 'Atif', 'Ali', 'Awais'];

function make_great(){
    for(var j=0; j<magicianNames.length; j++){
        magicianNames[j] = "Great " + magicianNames[j];
        console.log(magicianNames[j]);
    }
}

make_great();

console.log(magicianNames);