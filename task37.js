/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/

function make_shirt(shirt, large = 'I love JavaScript', medium = 'I love TypeScript'){
    console.log("This is "+large+" Shirt and "+medium+" Shirt.");
}

make_shirt('Java');