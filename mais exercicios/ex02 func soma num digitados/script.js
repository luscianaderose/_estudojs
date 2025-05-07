// Objetivo: Criar uma função que solicita números ao usuário 
// até que ele digite um número negativo. A função deve retornar 
// a soma dos números digitados.

function somarNumeros() {
  // sua lógica aqui
  let soma = 0
  let n = 0
  console.log('antes do while')
  while(n >= 0){
    soma += n
    n = parseInt(prompt('Digite um número. Para parar, digite número negativo.'))
    console.log('dentro do while ', n)
  }
  return soma
}

console.log(somarNumeros())
// Entrada: 5, 7, 3, -1
// Saída: "A soma dos números positivos é: 15"