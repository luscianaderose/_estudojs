// 6. Crie um programa que receba um valor decimal 
// e imprima este valor aumentado em 10%.

var decimal = parseFloat(prompt("Digite um valor decimal para aumento em 10%."))
var dezPorCento = (decimal * 10)/100
var resultado = decimal + dezPorCento
alert(decimal + " + " + dezPorCento + " = " + resultado)