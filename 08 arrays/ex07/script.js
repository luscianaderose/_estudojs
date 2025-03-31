// 7. Crie um programa que receba um array de números inteiros 
// e retorne true caso todos os números sejam primos e falso caso contrário.

const array = [5, 7, 11]
const todosPrimos = array.every(item => item % 2 != 0)
console.log(todosPrimos)