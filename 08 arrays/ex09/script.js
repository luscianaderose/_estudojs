// Dado um array de números, calcule a soma de todos os valores.

const numeros = [5, 10, 15]

const soma = numeros.reduce((acumulador, corrente) => acumulador + corrente, 0)
console.log(soma)