// 7. Modifique o programa anterior para que o expoente seja o número 2 em caso de
// omissão do expoente no momento da chamada função.

function expoente(base, expoente=2){
    return base ** expoente
}

console.log(expoente(3))