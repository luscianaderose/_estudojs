

//////////////////////////////////////////////////////////
//Sort Decending
//Sort and then reverse the order:

// Create an Array
const fruitsB = ["Banana", "Orange", "Apple", "Mango"];

// Sort the Array
fruitsB.sort();

// Reverse the array
fruitsB.reverse();

console.log('- fruitsB reverse: ', fruitsB)

//////////////////////////////////////////////////////////
//TO SORTED
// Create an Array
const fruitsC = ["Banana", "Orange", "Apple", "Mango"];

// Sort the Array
const fruitsC2 = fruitsB.toSorted();

// Display the New Array
console.log('- fruitsC original: ', fruitsC)
console.log('- fruitsC2 copia modificada: ', fruitsC2)


//////////////////////////////////////////////////////////
// COM NÚMEROS
// Create an Array
const points = [40, 100, 1, 5, 25, 10];

// Sort the Array
const points2 = points.toSorted(function(a, b){return a-b});

//// Create an Array
const fruitsD = ["Banana", "Orange", "Apple", "Mango"];

// Sort the Array
const fruitsD2 = fruitsD.toSorted();

// Reverse the Array
fruitsD2.reverse();

console.log('- fruitsD: ', fruitsD)
console.log('- fruitsD2 reverse: ', fruitsD2)

//////////////////////////////////////////////////////////

// Display the Array
console.log('- points: ', points)
console.log('- points2: ', points2)

