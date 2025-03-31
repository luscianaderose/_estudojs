// 3. Crie um objeto representando um livro (com propriedades como título, autor, etc.). 
// Em seguida, crie uma função que receba o
// objeto e imprima suas propriedades usando a desestruturação.

const livro = {titulo: 'como fazer inimigos', autor: 'Safado da Silva'}

function imprimirDesestruturando(objeto){
    const { titulo, autor } = objeto
    console.log(titulo, autor)
}

imprimirDesestruturando(livro)

// GPT /////////////////////////////////////////////
// const livro = { titulo: "Como Fazer Inimigos", autor: "Safado da Silva" };

// function imprimirDesestruturando({ titulo, autor }) {
//     console.log(`Título: ${titulo}, Autor: ${autor}`);
// }

// imprimirDesestruturando(livro);

//Seu código está quase certo, mas há um pequeno detalhe: 
// na função imprimirDesestruturando, você desestrutura 
// o objeto, mas não usa as propriedades desestruturadas na saída.
//O que foi corrigido?
// Uso correto da desestruturação diretamente nos parâmetros da função.
// A função agora exibe corretamente os valores de titulo e autor 
// em vez de imprimir todo o objeto.