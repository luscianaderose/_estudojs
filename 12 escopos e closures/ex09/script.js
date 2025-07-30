// Crie uma função contador que retorne outra função. Cada vez que a função
// retornada for chamada, ela deve incrementar e exibir um contador.
// Exemplo de uso
// const contar = contador()
// contar() // 1
// contar() // 2

// function contador(){
//     let cont = 1
//     function a(){
//         return function b(){
//             return cont++
//         }
//     }
//     return b()
// }

// const contar = contador()
// contar() // 1
// contar() // 2

///////////////////////////////////////////////////////////////////

// let cont = 1

// function contar(){

//     return function c(){
//         return cont++
//     }
// }

// contar() // 1
// contar() // 2

///////////////////////////////////////////////////////////////////

// let cont = 1
// console.log(cont)
// cont++
// console.log(cont)

///////////////////////////////////////////////////////////////////

// let cont = 1

// function contar(){
//     function a(){
//         cont++
//         return function b(){
//             return cont
//         }
//     }
//     return a()
// }

// contar() // 1
// contar() // 2

///////////////////////////////////////////////////////////////////
// DEU CERTO!

// let cont = 0

// function contar(){
//     cont++
//     return console.log(cont)
// }

// contar()
// contar()
///////////////////////////////////////////////////////////////////
let cont = 0

function contar(){
    return  {contar:function contar(){
                cont++
                console.log(cont)
            }}
}

contar()
contar()

