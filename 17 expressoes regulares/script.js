
// 1. Escreva uma expressão regular que verifique se uma string começa com um número. Se
// sim, exiba o número.

// const re1 = ','
// const frase1 = '1exemplo exemplo 2 palavras numeros 34556678'
// console.log(frase1.split(re1))

//[ '1exemplo', ' exemplo', ' 2', ' palavras', ' numeros', ' 34556678' ]

const re1_2 = /\d\w+/g
const frase1_2 = '1exemplo exemplo 2 palavras numeros 34556678'
console.log(frase1_2.split(re1_2))

// 2. Dado o texto "O vigia estava ansioso", extraia todas as palavras que têm exatamente 5
// letras.

const re2 = /\w/
const frase2 = "O vigia estava ansioso"

// 3. Crie uma expressão regular que valide e-mails no formato usuario@dominio.com.


// 4. Dado o texto "A conta total foi de 123, mas recebi um desconto de 23", extraia todos os
// números.

// 5. Substitua todas as datas no formato dd/mm/yyyy pelo texto "DATA" em:
// "As datas importantes são 25/12/2023 e 01/01/2024."

// 6. Escreva uma expressão regular para verificar se uma string contém um CEP no formato
// brasileiro XXXXX-XXX
// 7. Dado o texto "Pedro e Paula foram para a praia", encontre todas as palavras que
// começam com "p" ou "P".
// 8. Dado o texto com URLs: "Acesse https://google.com ou http://example.org para mais
// informações." Extraia apenas os domínios (google.com, example.org).
// 9. Crie uma expressão regular para validar números no formato: (XX) XXXXX-XXXX.
// 10. Dado o texto "Use #JavaScript e #regex para resolver problemas.", extraia todas as
// hashtags.