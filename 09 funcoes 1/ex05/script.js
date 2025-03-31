// 5. Crie uma função que receba como parâmetro nome, telefone e e-mail 
// e retorne uma frase qualquer com essas informações.

const nome = 'Maria'
const tel = '2222-2222'
const email = 'mariadolores@email.com'

function frase (nome, tel, email){
    return `${nome}, enviaremos email para ${email} ou ligaremos para ${tel}.`
}

console.log(frase(nome, tel, email))