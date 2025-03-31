// 9. Crie um programa que determine e imprima os números primos entre 1 e 20.

// USANDO FOR
console.log("------ NÚMEROS PRIMOS -- Exercício 9 usando FOR ------")

for(let num = 6; num > 0; num--){
    // const num = 11 //teste
    const n = num

/////////////////////////////////////////////////////////////////////////////
    // CALCULANDO SE UM NÚMERO É PRIMO

    console.log("n = ", n)
    for (let c = n; c > 1; c--) {
        console.log("__inicio do 1o for__")
        console.log("c =", c)
        console.log("resto =", n % c)
    
        if (n % c === 0) { // Se encontrar um divisor, não é primo
            console.log(`##################### O número ${n} não é primo.`)
            break; // Sai do loop e evita o próximo alert
        }
    
        console.log("depois do break");
        
        // Se chegou no último número sem encontrar divisores, é primo
        if (c === 2) {
            console.log(`##################### O número ${n} é primo.`)
        }
        console.log("passou pelo segundo if")
    }
    console.log("fim do for")
    
/////////////////////////////////////////////////////////////////////////////

    console.log(`num--`)
    num--
    console.log(`num = ${num}`)
}


// USANDO WHILE