// 3. Crie um programa que leia 10 valores digitados por um usuário, armazene esses
// valores e os imprima em ordem contrária a qual foram lidos. Exemplo:
// Entrada: "Banana", "Apple", "Orange"
// Saída: "Orange", "Apple", "Banana"

const array = []


// for(let i = 0; i < array.length; i++){
//     console.log(array[i])
// }

// for(let i = array.length - 1; i > -1; i--){
//     console.log(array[i])
// }

// uma forma de fazer com array.push(num)
// for(let i = 0; i < 10; i++){
//     const num = prompt("Digite um valor.")
//     array.push(num)
// }

// outra forma de fazer
for(let i = 0; i < 10; i++){
    const num = prompt("Digite um valor.")
    array[i] = num
}

for (let i = array.length - 1; i > -1; i--){
    console.log(array[i])
}


