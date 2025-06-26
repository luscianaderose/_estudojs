// Exercício 5: Verificar Números Primos em um Intervalo
// Objetivo: Criar uma função que recebe dois números 
// e imprime quais números entre eles são primos.

function mostrarNumerosPrimos(inicio, fim) {
  // sua lógica aqui
  //console.log('dentro da função')
    for(let num = inicio; num <= fim; num++ ){
        //console.log('num = ', num)
        let primo = true
        for(let i = 2; i < num - 1; i++){
            //console.log('antes do if')
            if(num % i == 0){
                primo = false
                break
            }
        }
        if (primo){
            console.log(`${num} é primo`)
        } 
    }
}

mostrarNumerosPrimos(2, 23);
// Saída esperada:
// 11 é primo
// 13 é primo
// 17 é primo
// 19 é primo

