// const now = new Date();
// console.log(now); // Outputs the current date and time

// const specificDate = new Date(2025, 8, 11, 10, 30, 0, 0); // September 11, 2025, 10:30:00 AM
// console.log(specificDate);

const d1 = new Date()
console.log("1) ", d1)

const d2 = new Date("October 13, 2014 11:13:00")
console.log("2) ", d2)

const d3 = new Date("2022-03-25")
console.log("3) ", d3)

const d4 = new Date(2018, 11, 24, 10, 33, 30, 0)
console.log("4) ", d4)

const d5 = new Date();
d5.toDateString();
console.log("5) ", d5)

const d6 = new Date();
d6.toUTCString();
console.log("6) ", d6)

const d7 = new Date();
d7.toISOString();
console.log("7) ", d7)