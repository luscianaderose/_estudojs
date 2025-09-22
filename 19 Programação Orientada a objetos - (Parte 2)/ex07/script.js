// 7. Crie uma estrutura de mensagem com remetente, destinatário e conteúdo.
// Garanta que nenhuma mensagem seja enviada com conteúdo vazio.
// Mostre a mensagem formatada no console ao enviá-la.

class Mensagem{
    constructor(remetente, destinatario, conteudo){
        this.remetente = remetente
        this.destinatario = destinatario
        this.conteudo = conteudo
    }

    imprimirMensagem(remetente, destinatario, conteudo){
        if((remetente !== "")){
            this.remetente = remetente
        } 
        if (destinatario !== ""){
            this.destinatario = destinatario
        }
        if (conteudo !== ""){
            this.conteudo = conteudo
        }
        return `De: ${this.remetente}/ Para: ${this.destinatario}/ Mensagem: ${this.conteudo}`
    }
}

const email = new Mensagem()
console.log(email.imprimirMensagem("Luciana", "Mayara", "Quero ter aula."))