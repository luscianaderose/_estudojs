// Exercício 2: Usando apply com um Array de Argumentos
// Objetivo: Praticar o uso do apply para passar argumentos para uma função a partir de um array.

// Instruções: Complete o código para que a função apresentar seja chamada no contexto do objeto produto e receba os argumentos do array detalhes.

const produto = {
  nome: 'Notebook',
  preco: 3500.00
};

const apresentar = function(desconto, moeda) {
  console.log(`Produto: ${this.nome}, Preço: ${moeda} ${this.preco - desconto}`);
};

const detalhes = [100, 'R$'];

// Complete a linha abaixo usando apply
apresentar.apply(produto, detalhes);
//O que este exercício testa: A principal diferença entre call e apply, que é a forma como os argumentos são passados.