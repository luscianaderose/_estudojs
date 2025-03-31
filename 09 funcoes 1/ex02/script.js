// 2. Cria uma função que retorne verdadeiro ou falso para informar se um número é primo ou não.

// NÃO CONSEGUI - SOLUÇÃO DO CHAT GPT

const num = parseInt(prompt("EX 2 AULA 6 - Digite um número para testar se é primo."));

function ehPrimo(num) {
    if (num <= 1) return false; // Números menores ou iguais a 1 não são primos
    if (num === 2) return true; // O número 2 é primo
    if (num % 2 === 0) return false; // Números pares maiores que 2 não são primos

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false; // Se encontrar um divisor, não é primo
        }
    }
    return true; // Se não encontrou divisores, é primo
}

if (ehPrimo(num)) {
    alert(`${num} é um número primo.`);
} else {
    alert(`${num} não é um número primo.`);
}

// Explicação:
// Se num for menor ou igual a 1, retorna false, pois não são primos.
// Se num for 2, retorna true, pois 2 é o único número primo par.
// Se num for par (exceto 2), retorna false, pois qualquer número par maior que 2 é divisível por 2.
// Usa um laço de repetição para testar divisores de 3 até a raiz quadrada de num, incrementando de 2 em 2 (pois números pares já foram eliminados).
// Se encontrar um divisor, retorna false; caso contrário, retorna true.
