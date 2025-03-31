// 4. Modifique o código da função `calculator` (slide Função retornando função) para
// disponibilizar também a função de multiplicar(*) e a função de dividir(/).

const calculator = (op) => {
    if (op === "+") {
        return function (a, b) {
            return a + b
        }
    } else if (op === "-") {
        return function (a, b) {
            return a - b
        }
    } else if (op === "*") {
        return function (a, b) {
            return a * b
        }
    } else if (op === "/") {
        return function (a, b) {
            return a / b
        }
    }
}

const sum = calculator("+")
console.log (sum(2, 3)) // 5

const sub = calculator("-")
console.log (sub(10, 2)) // 8

const mult = calculator("*")
console.log (mult(10, 2)) // 20

const div = calculator("/")
console.log (div(10, 2)) // 5
