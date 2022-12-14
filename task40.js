/*
Album: Write a function called make_album() that builds a Object describing a music album. 
The function should take in an artist name and an album title, and it should return a Object containing 
these two pieces of information. Use the function to make three dictionaries representing different albums. 
Print each return value to show that Objects are storing the album information correctly. 
Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
Make at least one new function call that includes the number of tracks on an album.
*/


function make_album(artist_name, album_title) {

    var obj = {
        artist_name : artist_name,
        album_title : album_title
    }
    return obj;
}
console.log(make_album('Atif', 'Tajdar e Haram'));
console.log(make_album('Junoon', 'Infiniti'));
console.log(make_album('Junaid', 'Dil Dil Pakistan'));

function make_album1(artist_name, album_title, ...arguments) {

    var obj1 = {
        artist_name : artist_name,
        album_title : album_title,
        arguments : arguments
    }
    return obj1;
}
console.log(make_album1('Atif', 'Tajdar e Haram', 'Two Tracks'));
console.log(make_album1('Junoon', 'Infiniti', 'Two Tracks', 'Three Singers'));
console.log(make_album1('Junaid', 'Dil Dil Pakistan', 'One Tracks', 'Four Singers', 'Beautiful Place'));