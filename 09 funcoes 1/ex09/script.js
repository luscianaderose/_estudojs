// 9. Crie um programa que realiza o somatório dos números digitados pelo usuário e,
// ao final, exiba o somatório dos números coletados. Seu programa só deve parar de
// coletar os números quando o usuário digitar a palavra “PARAR”. Utilize função!

// let soma = 0
// while(true){
//     let entrada = prompt("Digite um número para somar. Para parar, digite 'p'.")
//     if(entrada === 'p'){
//         alert(`A soma dos números é ${soma}.`)
//         break
//     }
//     let num = parseInt(entrada)
//     soma += num
// }

function somatorio(){
    let soma = 0
    while(true){
        let entrada = prompt("Digite um número para somar. Para parar, digite 'p'.")
        if(entrada === 'p'){
            alert(`A soma dos números é ${soma}.`)
            break
        }
        let num = parseInt(entrada)
        soma += num
    }
}

somatorio()

