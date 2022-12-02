/*
Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, 
such as a color or an optional feature. Print the Object that’s returned to make sure 
all the information was stored correctly.
*/

function Cars(manufacturer, model, ...arguments) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.arguments = arguments;
    this.getDetails = () => {
        return this.manufacturer + " made " + this.model + " and it has " + this.arguments;
    }
}

var car = new Cars("Honda", "Civic", 'Red Color', 'Carborator', 'Engine', 'Tyres');

console.log(car.getDetails()); 
console.log(car);