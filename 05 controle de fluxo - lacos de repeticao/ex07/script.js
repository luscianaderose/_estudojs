// 7. Crie um programa que determine se um número lido é primo ou não.

// USANDO FOR

// const num = parseInt(prompt("EX 7 - FOR: Digite um número para testar se é primo."))

// for(let i = num - 1; i > 1; i--){
//     if(num % i == 0){
//         alert(`O número ${num} NÃO é primo.`)
//         break
//     }
//     if(i == 2){
//         alert(`O número ${num} É primo.`)
//     }
// }


// USANDO FOR COM CONSOLE.LOGS PRA ENTENDER TUDO - NÃO APAGUE
// console.log("n = ", n)
// for (let c = n - 1; c > 1; c--) {
//     console.log("__inicio do loop__")
//     console.log("c =", c);
//     console.log("resto =", n % c)

//     if (n % c === 0) { // Se encontrar um divisor, não é primo
//         alert(`O número ${n} não é primo.`)
//         break; // Sai do loop e evita o próximo alert
//     }

//     console.log("__fim do loop__");
    
//     // Se chegou no último número sem encontrar divisores, é primo
//     if (c === 2) {
//         alert(`O número ${n} é primo.`)
//     }
//     console.log("passou pelo segundo if")
// }
// console.log("fim do for")
// console.log("ex 7: usando for")


// USANDO WHILE

console.log("ex 7: usando for")

const num = 3
let i = num

while(i > 2){
    i--
    console.log(`num(${num}) % i(${i}) = ${num % i} `)

    if(num % i == 0){
        console.log(`O número ${num} NÃO É PRIMO.`)
        break
    }
    
    if(i == 2){
        console.log(`O número ${num} É PRIMO.`)
    }
}