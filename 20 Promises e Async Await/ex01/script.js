// 1. Crie uma função que retorne uma Promise que é resolvida com a mensagem "Processo
// concluído" após 2 segundos.

function x(){
    setTimeout(
        () => {
            console.log("Processo consluído.")
        }, 2000
    )
}

x()