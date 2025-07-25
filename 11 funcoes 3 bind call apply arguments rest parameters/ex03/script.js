// 3. Crie uma função sum que aceita dois parâmetros e use call para calcular a soma de
// dois números passados como argumentos separados.

function sum (x, y){
    console.log(this.name)
    return x + y
}

const obj1 = {
     name: 'valorA'
}

const obj2 = {
     name: 'valorB'
}

console.log(sum.call(obj1, 1, 2))
console.log(sum.call(obj2, 3, 4))