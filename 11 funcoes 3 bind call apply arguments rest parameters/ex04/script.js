// 4. Crie um objeto calculator com métodos add, subtract, multiply e divide. Use
// apply para chamar dinamicamente esses métodos com argumentos passados como
// um array.

const calculator = {
    add: function (a, b) {return a + b},
    subtract: function (a, b) {return a - b},
    multiply: function (a, b) {return a * b},
    divide: function (a, b) {return a / b}
}

const calculator2 = {
    
}

console.log(calculator.add.apply(calculator2, [1,2]))