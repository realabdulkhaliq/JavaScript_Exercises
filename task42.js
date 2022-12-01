/*
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/

let magicianNames = ['Abdul', 'Atif', 'Ali', 'Awais'];
var i=0;
function make_great(greet){
    return greet;
}
function show_magicians(){
    for(i; i<magicianNames.length; i++){
        console.log(make_great('Great') + " " +magicianNames[i]);
    }
}

show_magicians();