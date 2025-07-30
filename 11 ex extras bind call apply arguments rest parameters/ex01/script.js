// Exercício 1: Previsão de this com call
// Objetivo: Entender como o call define o this de uma função.
// Instruções: Analise o código abaixo e preveja qual será a saída no console.

const pessoa = {
  nome: 'Maria'
};

const saudacao = function() {
  console.log(`Olá, ${this.nome}!`);
};

saudacao.call(pessoa); // Olá, Maria!