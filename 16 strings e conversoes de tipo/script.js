// 1. Você tem duas variáveis, firstName e lastName, que armazenam o primeiro e o
// último nome de uma pessoa. Crie uma variável fullName que combine ambos os
// nomes com um espaço entre eles e a imprima.

const firstName = 'joao'
const lastName = 'silva'
const fullName = firstName + ' ' + lastName
console.log('1)', fullName)

// 2. Dada a string greeting com o valor "Hello, World!", acesse e imprima o primeiro e
// o último caractere da string.

const greeting = "Hello, World!"
console.log('2.1)', greeting[0])
console.log('2.2)', greeting[greeting.length - 1])

//3. Dada a string text com o valor "JavaScript", imprima o número de caracteres desta string.
const text = "JavaScript"
console.log('3)', text.length)

// 4. Dada a string str com o valor "Hello, World!", extraia a palavra "World". 
// Dada a string str com o valor "JavaScript", extraia a palavra "Java".

const str = "Hello, World!"
console.log('4.11)', str.slice(6,12))
console.log('4.12)', str.slice(-6,-1))

const str2 = "JavaScript"
console.log('4.2', str2.slice(0,4))


// 5. Dada a string str com o valor "Hello, World!"
// const str = "Hello, World!"
// const text = "JavaScript"

// 5.1 Encontre a posição da primeira ocorrência da letra "o".
console.log('5.1)', str[4])

// 5.2  Na mesma string, encontre a posição da última ocorrência da letra "l".
console.log('5.2)', str[10])

// 5.3 Verifique se a string "JavaScript" contém a palavra "Script".
console.log('5.3)', text.includes('Script'))

// 5.4 Verifique se a string "JavaScript" começa com a palavra "Java".
console.log('5.4)', text.startsWith('Java'))


// 5.5 Verifique se a string "JavaScript" termina com a palavra "Script".
console.log('5.5)', text.endsWith('Script'))


// 6. Dada a string str com o valor "Hello, World!"
// 6.1 Substitua a palavra "World" por "JavaScript".
console.log('6.1) ', str.replace('World', 'JavaScript'))

// 6.2 Converta a string "hello" para letras maiúsculas.
let hello = 'hello'
console.log('6.2) ', hello.toUpperCase())

// 6.3 Converta a string "HELLO" para letras minúsculas.
let hello2 = 'HELLO'
console.log('6.3) ', hello2.toLowerCase())

// 6.4 Remova os espaços em branco no início e no fim da string " Hello ".
const hello3 = " Hello "
console.log(hello3.trim())

// 6.5 Repita a string "Ha!" três vezes.
const ha = "Ha! "
console.log('6.5) ', ha.repeat(3))

// 6.6 Divida a string "one, two, three" em um array de palavras.
const txt = "one, two, three"
console.log('6.6) ', txt.split())



// 7.
// 7.1) Converta o número 123 para uma string.
let num = 123
let num1 = String(num)
console.log(`7.11) orginal: ${num}  tipo: ${typeof(num)}/ convertido: ${num1} tipo: ${typeof(num1)}`)

let num2 = num.toString()
console.log(`7.12) orginal: ${num} tipo: ${typeof(num)}/ convertido: ${num2} tipo: ${typeof(num2)}`)


// 7.2) Converta o valor booleano true para uma string.
let bol = true

let bol1 = String(bol)
console.log('7.21) ', typeof(bol1))
console.log(`7.21) orginal: ${bol} tipo: ${typeof(bol)}/ convertido: ${bol1} tipo: ${typeof(bol1)}`)

let bol2 = bol.toString()
console.log('7.22) ', typeof(bol2))
console.log(`7.22) orginal: ${bol} tipo: ${typeof(bol)}/ convertido: ${bol2} tipo: ${typeof(bol2)}`)


// 7.3) Converta a string "123" para um número.
let q73 = '123'

let q731 = Number(q73)
console.log(`7.3) orginal: ${q73} tipo: ${typeof(q73)}/ convertido: ${q731} tipo: ${typeof(q731)}`)

// 7.4) Converta a string "123.45" para um número com ponto flutuante.
let q74 = "123.45"
let q741 = parseFloat(q74)
console.log(`7.4) orginal: ${q74} tipo: ${typeof(q74)}/ convertido: ${q741} tipo: ${typeof(q741)}`)

// 7.5) Converta a string "123abc" para um número inteiro. Observe o resultado.
let q75 = "123abc"
let q751 = parseInt(q75)
console.log(`7.5) orginal: ${q75} tipo: ${typeof(q75)}/ convertido: ${q751} tipo: ${typeof(q751)}`)
// saída: 123   number // deletou as letras

// 7.6) Converta a string vazia "" para um valor booleano.
let q76 = ''
let q761 = Boolean(q76)
console.log(`7.6) orginal: ${q76} tipo: ${typeof(q76)}/ convertido: ${q761} tipo: ${typeof(q761)}`)

// 7.7) Converta o número 0 para um valor booleano.
let q77 = 0
let q771 = Boolean(q77)
console.log(`7.7) orginal: ${q77} tipo: ${typeof(q77)}/ convertido: ${q771} tipo: ${typeof(q771)}`)
// ZERO DA FALSO

// 7.8) Converta a string "Hello" para um valor booleano.
let q78 = "Hello"
let q781 = Boolean(q78)
console.log(`7.8) orginal: ${q78} tipo: ${typeof(q78)}/ convertido: ${q781} tipo: ${typeof(q781)}`)

// quando a variável tem qualquer valor da TRUE
