// const re1 = ','
// const frase1 = '1exemplo exemplo 2 palavras numeros 34556678'
// console.log(frase1.split(re1))

//[ '1exemplo', ' exemplo', ' 2', ' palavras', ' numeros', ' 34556678' ]

const re2 = /\d\w+/g
const frase2 = '1exemplo exemplo 2 palavras numeros 34556678'
console.log(frase2.split(re2))
