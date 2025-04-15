
// 1. Escreva uma expressão regular que verifique se uma string começa com um número. Se
// sim, exiba o número.

// const re1 = ','
// const frase1 = '1exemplo exemplo 2 palavras numeros 34556678'
// console.log(frase1.split(re1))

//[ '1exemplo', ' exemplo', ' 2', ' palavras', ' numeros', ' 34556678' ]

const re1_2 = /\d\w+/g
const frase1_2 = '1exemplo exemplo 2 palavras numeros 34556678'
console.log('1.1) com split', frase1_2.split(re1_2))
console.log('1.2) com match', frase1_2.match(re1_2))



// 2. Dado o texto "O vigia estava ansioso", extraia todas as palavras que têm exatamente 5 letras.

// const frase2 = "O vigia estava ansioso"
// const re2 = /\b\w{5}\b/
// console.log(frase2.match(re2))

const texto2 = "O vigia estava ansioso papai"
const re2 = /\b\w{5}\b/g
console.log('2) ',texto2.match(re2))


// 3. Crie uma expressão regular que valide e-mails no formato usuario@dominio.com.

// const email311 = mayara.rosa@icts.com
// const email312 = mmrosatab@gmail.com
// const re31 = /\w+\.{0,}\w+\@\w+\.com/
// console.log(email321.match(re31))

// if(email311.match(re31)){
//     console.log(true)
// }

const email321 = 'mayara.rosa@icts.com'
const email322 = 'mmrosatab@gmail.123'
const re32 = /\w+\.{0,}\w+\@\w+\.com/
const regex3 = new RegExp(re32)
const resultado = regex3.test(email321)
console.log('3) ', resultado)


// 4. Dado o texto "A conta total foi de 123, mas recebi um desconto de 23", extraia todos os
// números.
const texto4 = "A conta total foi de 123, mas recebi um desconto de 23"
const re4 = /\d+/g
console.log('4) ', texto4.match(re4))


// 5. Substitua todas as datas no formato dd/mm/yyyy pelo texto "DATA" em:
// "As datas importantes são 25/12/2023 e 01/01/2024."
const texto5 = "As datas importantes são 25/12/2023 e 01/01/2024."
const re5 = /\d\d\/\d\d\/\d{4}/g
console.log('5) ', texto5.replace(re5, "DATA"))


// 6. Escreva uma expressão regular para verificar se uma string contém um CEP no formato
// brasileiro XXXXX-XXX
const texto6 = "12345-123"
const re6 = /\d{5}-\d{3}/gm
console.log('6)', re6.test(texto6))


// 7. Dado o texto "Pedro e Paula foram para a praia", encontre todas as palavras que
// começam com "p" ou "P".
const texto7 = "Pedro e Paula foram para a praia p134894 p "
const re7 = /[p|P]\w*/g
console.log('7) ', texto7.match(re7))


// 8. Dado o texto com URLs: "Acesse https://google.com ou http://example.org para mais
// informações." Extraia apenas os domínios (google.com, example.org).
const texto8 = "Acesse https://google.com ou http://example.org para mais informações."
const re8 = /https?\:\/\//gm
const re83 = /\w+\.\w+/g
console.log('8.1) ', texto8.match(re8))
console.log('8.2) ', texto8.replace(re8, ''))
console.log('8.3) ', texto8.match(re83))


// 9. Crie uma expressão regular para validar números no formato: (XX) XXXXX-XXXX.
const texto9 = '(21) 12345-5678'
const re9 = /\(\d{2}\)\s\d{5}\-\d{4}/
console.log('9.1) ', texto9.match(re9))
const regex9 = new RegExp(re9)
console.log('9.2) ', regex9.test(texto9))


// 10. Dado o texto "Use #JavaScript e #regex para resolver problemas.", extraia todas as
// hashtags.
const texto10 = "Use #JavaScript e #regex para resolver problemas."
const re10 = /#/g
console.log('10.1) ', texto10.match(re10))
console.log('10.2) ', texto10.replace(re10, ''))