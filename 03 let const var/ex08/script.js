// 8.Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e
// mostre-a expressa em dias. Leve em consideração o ano com 365 dias e o mês com 30
// dias. (Ex: 3 anos, 2 meses e 15 dias = 1170 dias.)

const a = parseInt(prompt("Digite quantos anos você tem."))
const m = parseInt(prompt("Digite quantos meses você tem além dos anos informados."))
const d = parseInt(prompt("Digite quantos dias você tem além dos anos e meses informados."))
alert("Sua idade em dias é " + ((a * 12 * 30) + (m * 30) + d) + ".")