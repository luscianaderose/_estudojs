const pessoas = [
    { nome: "Alice", idade: 25 },
    { nome: "Bob", idade: 30 },
    { nome: "Carol", idade: 22 }
];
const ordenadoPorIdade = pessoas.toSorted((a, b) => a.idade - b.idade);
console.log(ordenadoPorIdade);

//////////////////////////////////////////////////////////////////
const produtos = [
    { nome: "Arroz", categoria: "alimentos", preco: 20, popularidade: 500 },
    { nome: "Sabonete", categoria: "higiene", preco: 5, popularidade: 300 },
    { nome: "Refrigerante", categoria: "bebidas", preco: 8, popularidade: 800 },
    { nome: "Feijão", categoria: "alimentos", preco: 12, popularidade: 600 },
    { nome: "Cerveja", categoria: "bebidas", preco: 10, popularidade: 1000 }
]

const produtosOrdenadosPreco = produtos.toSorted((a, b) => a.preco - b.preco)
console.log(produtosOrdenadosPreco)
