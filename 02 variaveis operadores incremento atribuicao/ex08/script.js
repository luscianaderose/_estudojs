// 8.Faça um algoritmo que leia a idade de uma pessoa 
// expressa em anos, meses e dias e mostre-a expressa em dias. 
// Leve em consideração o ano com 365 dias e o mês com 30 dias. 
// (Ex: 3 anos, 2 meses e 15 dias = 1170 dias.)

var anos = parseInt(prompt("Qual é sua idade em anos (sem meses e dias)?"))
var meses = parseInt(prompt("Qual é o resto da sua idade em meses (sem dias)?"))
var dias = parseInt(prompt("Qual é o resto da sua idade em dias?"))
resultado = parseInt((anos * 365) + (meses * 30) + dias)
alert("Sua idade é: " + anos  + " ano(s), " + meses + " mes(es), " + dias + " dia(s) ou " + resultado + " dias.")