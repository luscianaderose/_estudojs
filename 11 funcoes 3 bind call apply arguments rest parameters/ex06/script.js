// 6. Crie uma função concatenate que recebe uma string e usa arguments para
// concatenar todas as strings passadas como argumentos.

// function strings(){
//     console.log(Array.from(arguments).push(arguments))
// }

function strings(){
    console.log(Array.from(arguments).reduce((accumulator, current) => accumulator + current))
}

strings('O ', 'céu ', 'é ', 'azul!')