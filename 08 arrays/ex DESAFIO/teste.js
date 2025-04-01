const produtos = [
    { nome: "Arroz", categoria: "alimentos", preco: 20, popularidade: 500 },
    { nome: "Sabonete", categoria: "higiene", preco: 5, popularidade: 300 },
    { nome: "Refrigerante", categoria: "bebidas", preco: 8, popularidade: 800 },
    { nome: "Feijão", categoria: "alimentos", preco: 12, popularidade: 600 },
    { nome: "Cerveja", categoria: "bebidas", preco: 10, popularidade: 1000 }
]

const produtosOrdenadosNome = [...produtos]

// FUNCIONA ///////////////////////////
produtosOrdenadosNome.sort(
    function(a,b){
        if(a.nome < b.nome) {
            return -1;
        } else {
            return true
        }
    }
)
///////////////////////////////////////

console.log('////////////////////////////////////////////////////////////////////////////')
console.log('Lista original de produtos: ', produtos)  


console.log('////////////////////////////////////////////////////////////////////////////')
console.log('Produtos ordenados por nome: ', produtosOrdenadosNome)
