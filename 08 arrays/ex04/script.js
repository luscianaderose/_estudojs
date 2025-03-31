// 4. Crie um programa que receba um array de números inteiros 
// e retorne o produtório desses valores.

const array = [1, 2, 3, 4]

const mult = array.reduce((accumulator, current) => accumulator * current, 1)
console.log(mult)