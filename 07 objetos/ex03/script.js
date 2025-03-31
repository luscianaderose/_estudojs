// 3. Crie um objeto representando um livro (com propriedades como título, autor, etc.). 
// Em seguida, crie uma função que receba o
// objeto e imprima suas propriedades usando a desestruturação.

// const livro = {
//     titulo: 'A casa azul',
//     autor: 'Luciana De Rose',
//     paginas: 100
// }

// function impirmirObjeto(objeto){
//     return console.log(objeto)
// }

// impirmirObjeto(livro)

const livro2 = { titulo: 'Planeta Terra'}
const { titulo, autor = 'Luciana De Rose'} = livro2
console.log(titulo, autor)
console.log(livro2) // Não entendi pq aqui não imprimiu todos os objetos