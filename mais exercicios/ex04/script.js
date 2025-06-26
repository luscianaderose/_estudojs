//Exercício 7: Inverter String
//Objetivo: Criar uma função que recebe uma string e retorna ela invertida, 
// sem usar métodos prontos como split().reverse().join().

function inverterString(texto) {
  // sua lógica aqui
  //console.log(texto[texto.length - 1])
    let palavraInvertida = ""
    //console.log('inicio')
    for(let i = texto.length - 1; i >= 0; i--){
        //console.log(texto[i])
        palavraInvertida += texto[i]
    }
    return palavraInvertida
}

console.log(inverterString("banana"));
// Saída esperada: "ananab"
