/*
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of 
the array of magicians’ names. Because the original array will be unchanged, return the new array and store it 
in a separate array. Call show_magicians() with each array to show that you have one array of the original names 
and one array with the Great added to each magician’s name.
*/

let magicianNames = ['Abdul', 'Atif', 'Ali', 'Awais'];
let new_array = [];

function show_magicians(){
    for(var i=0; i<magicianNames.length; i++){
        console.log(magicianNames[i]);
    }
}

function make_great(){
    for(var j=0; j<magicianNames.length; j++){
        new_array[j] = "Great " + magicianNames[j];
        console.log(new_array[j]);
    }
}

show_magicians();
make_great();
console.log(new_array);
console.log(magicianNames);