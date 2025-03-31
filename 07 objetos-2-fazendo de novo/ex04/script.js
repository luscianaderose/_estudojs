// 4. Crie uma função que receba um objeto com propriedades "largura" e "altura", 
// e renomeie essas propriedades para "w" e "h" usando a desestruturação.

function renomearPropriedades(objeto){
    const { largura: w, altura: h } = objeto
    return {w, h}
}

const produto = {largura: 2, altura: 3}
console.log(renomearPropriedades(produto))