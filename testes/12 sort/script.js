// JavaScript Array SORT() https://www.w3schools.com/jsref/jsref_sort.asp

// STRINGS ////////////////////////////////////////////////
// Create an Array
const fruitsA = ["Banana", "Orange", "Apple", "Mango"]

// Sort the Array
fruitsA.sort()

// Display the Array
console.log('- fruitsA original foi modificado: ', fruitsA)

// NÚMEROS ////////////////////////////////////////////////
// Create an Array
const points = [40, 100, 1, 5, 25, 10];

// Sort the Array
points.sort(function(a, b){return a-b});

// Display the Array
console.log('ponts: ', points)

// Sorting OBJECTS Arrays ////////////////////////////////////////////////
const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];

console.log('\nORIGINAL')
displayCars();

cars.sort(function(a, b){return a.year - b.year});
console.log('\nSORTED')
displayCars();

function displayCars() {
console.log(
cars[0].type + " " + cars[0].year + "\n" +
cars[1].type + " " + cars[1].year + "\n" +
cars[2].type + " " + cars[2].year
)
}