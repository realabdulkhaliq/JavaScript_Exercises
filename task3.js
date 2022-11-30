// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

var personName = "Abdul Khaliq";
var _lowerCase = personName.toLowerCase();
var _upperCase = personName.toUpperCase();
var _titleCase = personName.slice(0,1).toUpperCase()+personName.slice(1).toLowerCase();
console.log(_lowerCase);
console.log(_upperCase);
console.log(_titleCase);