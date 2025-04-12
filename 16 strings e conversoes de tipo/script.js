// 1. Você tem duas variáveis, firstName e lastName, que armazenam o primeiro e o
// último nome de uma pessoa. Crie uma variável fullName que combine ambos os
// nomes com um espaço entre eles e a imprima.

const firstName = 'joao'
const lastName = 'maria'
const fullName = firstName + ' ' + lastName
console.log('1.', fullName)

// 2. Dada a string greeting com o valor "Hello, World!", acesse e imprima o primeiro e
// o último caractere da string.

const greeting = "Hello, World!"
console.log('2.', greeting[0])
console.log('2.', greeting[1])

//3. Dada a string text com o valor "JavaScript", imprima o número de caracteres desta string.
const text = "JavaScript"
console.log('3.', text.length)

// 4. Dada a string str com o valor "Hello, World!", extraia a palavra "World". Dada a
// string str com o valor "JavaScript", extraia a palavra "Java".

const str = "Hello, World!"
console.log('4.', str.slice(6,12))
console.log('4.', str.slice(-6,-1))



// 5. Dada a string str com o valor "Hello, World!"
// ● Encontre a posição da primeira ocorrência da letra "o".
// ● Na mesma string, encontre a posição da última ocorrência da letra "l".
// ● Verifique se a string "JavaScript" contém a palavra "Script".
// ● Verifique se a string "JavaScript" começa com a palavra "Java".
// ● Verifique se a string "JavaScript" termina com a palavra "Script".

// 6. Dada a string str com o valor "Hello, World!"
// ● Substitua a palavra "World" por "JavaScript".
// ● Converta a string "hello" para letras maiúsculas.
// ● Converta a string "HELLO" para letras minúsculas.
// ● Remova os espaços em branco no início e no fim da string " Hello ".
// ● Repita a string "Ha!" três vezes.
// ● Divida a string "one, two, three" em um array de palavras.

// 7.
// ● Converta o número 123 para uma string.
// ● Converta o valor booleano true para uma string.
// ● Converta a string "123" para um número.
// ● Converta a string "123.45" para um número com ponto flutuante.
// ● Converta a string "123abc" para um número inteiro. Observe o resultado.
// ● Converta a string vazia "" para um valor booleano.
// ● Converta o número 0 para um valor booleano.
// ● Converta a string "Hello" para um valor booleano.