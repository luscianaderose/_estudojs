// Como programadores, alguns dos nossos desafios são pesquisar, entender e aplicar novos conceitos
// quase que diariamente. Para nos acostumarmos com esse ritmo, vamos fazer uma pesquisa antes de
// iniciar o desafio.
// Pesquise e estude a função sort utilizada em arrays no JavaScript. Entenda seu funcionamento tanto
// em arrays de números quanto arrays de strings.
// Após a pesquisa e entendimento, você deve elaborar um programa que resolva o problema
// elucidado no próximo slide.

// O Mercado Inteligente 🛒
// Você foi contratado para desenvolver um sistema para um mercado inteligente. O objetivo é ajudar os funcionários a
// organizarem os produtos de forma eficiente para melhorar a experiência dos clientes.
// O gerente do mercado quer uma ferramenta automatizada para classificar os produtos de acordo com diferentes critérios,
// pois isso facilitará a reposição nas prateleiras e melhorará a experiência de compra.
// Seu desafio é criar um programa que ordene os produtos de forma dinâmica, dependendo da necessidade do mercado.

// 🛒 O Problema
// O mercado possui uma lista de produtos que inclui:
// ● Nome do produto
// ● Categoria (ex: "alimentos", "bebidas", "higiene")
// ● Preço
// ● Popularidade (quantidade de vendas no mês)

// Os funcionários querem ordenar essa lista de diferentes formas:
// 1. Por nome do produto (ordem alfabética, ignorando maiúsculas e minúsculas).
// 2. Por categoria, para organizar as prateleiras (ex: alimentos primeiro, depois bebidas e higiene).
// 3. Por preço, do menor para o maior.
// 4. Por popularidade, do mais vendido para o menos vendido.

// Você deve criar uma função que permita ordenar os produtos conforme a necessidade do momento.

// O que deve ser feito?
// OK ★ Criar um array de produtos com nome, categoria, preço e popularidade.
// ★ Implementar uma função que receba um critério de ordenação e organize os produtos dinamicamente.
// ★ Exibir a lista antes e depois da ordenação.

// O que deve ser apresentado?
// ★ Qual a estrutura da função sort?
//    ○ Quais parâmetros pode receber?
//    ○ A função tem algum valor de retorno ou não?
//    ○ A função modifica o array passado ou cria um novo array ordenado? 
// ★ Como a função sort funciona para strings e números?
// ★ Explicar como resolveu o desafio passo a passo.

// Exemplo de entrada e saída

const produtos = [
    { nome: "Arroz", categoria: "alimentos", preco: 20, popularidade: 500 },
    { nome: "Sabonete", categoria: "higiene", preco: 5, popularidade: 300 },
    { nome: "Refrigerante", categoria: "bebidas", preco: 8, popularidade: 800 },
    { nome: "Feijão", categoria: "alimentos", preco: 12, popularidade: 600 },
    { nome: "Cerveja", categoria: "bebidas", preco: 10, popularidade: 1000 }
]

// const produtosOrdenados = ordenarProdutos(produtos, "nome")
// console.log(produtosOrdenados)
// saída
// [
// { nome: "Arroz", categoria: "alimentos", preco: 20, popularidade: 500 },
// { nome: "Cerveja", categoria: "bebidas", preco: 10, popularidade: 1000 },
// { nome: "Feijão", categoria: "alimentos", preco: 12, popularidade: 600 },
// { nome: "Refrigerante", categoria: "bebidas", preco: 8, popularidade: 800 },
// { nome: "Sabonete", categoria: "higiene", preco: 5, popularidade: 300 }
// ]

// const produtosOrdenados2 = ordenarProdutos(produtos, "preco")
// console.log(produtosOrdenados2)
// saída
// [
// { nome: "Sabonete", categoria: "higiene", preco: 5, popularidade: 300 },
// { nome: "Refrigerante", categoria: "bebidas", preco: 8, popularidade: 800 },
// { nome: "Cerveja", categoria: "bebidas", preco: 10, popularidade: 1000 },
// { nome: "Feijão", categoria: "alimentos", preco: 12, popularidade: 600 },
// { nome: "Arroz", categoria: "alimentos", preco: 20, popularidade: 500 }
// ]

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function ordenarProdutos(array, criterio){
    return [...array].sort((a,b) => {
            if (a[criterio] < b[criterio]) return -1
            if (a[criterio] > b[criterio]) return 1
            return 0
        }
    )
}

console.log('////////////////////////////////////////////////////////////////////////////')
console.log('Lista ORIGINAL de produtos: ', produtos)

console.log('////////////////////////////////////////////////////////////////////////////')
const produtosOrdenadosNome = ordenarProdutos(produtos, 'nome')
console.log('Produtos ordenados por NOME: ', produtosOrdenadosNome)

console.log('////////////////////////////////////////////////////////////////////////////')
const produtosOrdenadosCategoria = ordenarProdutos(produtos, 'categoria')
console.log('Produtos ordenados por CATEGORIA: ', produtosOrdenadosCategoria)

console.log('////////////////////////////////////////////////////////////////////////////')
const produtosOrdenadosPreco = ordenarProdutos(produtos, 'preco')
console.log('Produtos ordenados por PREÇO: ', produtosOrdenadosPreco)

console.log('////////////////////////////////////////////////////////////////////////////')
const produtosOrdenadosPopularidade = ordenarProdutos(produtos, 'popularidade')
console.log('Produtos ordenados por POPULARIDADE: ', produtosOrdenadosPopularidade)
