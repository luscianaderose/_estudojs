// 3. Crie um programa que leia 10 valores digitados por um usuário, 
// armazene esses valores e os imprima em ordem contrária 
// a qual foram lidos. Exemplo:
// Entrada: "Banana", "Apple", "Orange"
// Saída: "Orange", "Apple", "Banana"

const array = []

for (let i = 10; i > 0; i--){
    let n = parseInt(prompt('Digite um número.'))
    array.push(n)
    console.log(n)
}
console.log(array)