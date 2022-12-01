/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
*/

let magicianNames = ['Abdul', 'Atif', 'Ali', 'Awais'];
function show_magicians(){
    for(var i=0; i<magicianNames.length; i++){
        console.log(magicianNames[i]);
    }
}

show_magicians();