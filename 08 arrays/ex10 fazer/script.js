// Dado um array de produtos, crie um novo array apenas com os nomes dos produtos 
// em maiúsculas e o preço com 10% de desconto.

const produtos = [
    { nome: "Notebook", preco: 3000 },
    { nome: "mouse", preco: 100 },
    { nome: "Celular", preco: 2000 },
    { nome: "teclado", preco: 150 },
    { nome: "Tablet", preco: 1500 }
  ]

// DÚVIDA FREQUENTE: COMO APLICAR FUNÇÃO DENTRO EM UM ARRAY DE OBJETOS

const produtos2 = produtos.map(produto => {
  return{
    nome: produto.nome.toUpperCase(),
    preco: produto.preco * 0.90
  }
})

console.log(produtos2)