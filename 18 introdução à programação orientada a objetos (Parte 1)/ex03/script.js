// 3. Crie uma classe chamada "ContaBancaria" com os atributos: número da conta, saldo e titular. Crie métodos para
// depositar, sacar e exibir o saldo.

let valor

class ContaBancaria {
    constructor (conta, saldo, titular) {
        this.conta = conta
        this.saldo = saldo
        this.titular = titular
    }
    
    depositar(valor){return this.saldo + valor}
    sacar(valor){return this.saldo - valor}
    exibirSaldo(){return this.saldo}

    apresentar(){return `Conta: ${this.conta}, titular: ${this.titular}, Saldo:${this.saldo}`}
}

const contaBancaria = new ContaBancaria(123, 500, 'Joana')
console.log('Dados da conta: ', contaBancaria.apresentar())
console.log('Depositar 200: ', contaBancaria.depositar(200))
console.log('Sacar 300: ', contaBancaria.sacar(300))
console.log('Exibir saldo: ', contaBancaria.exibirSaldo())

// como fazer o saldo continuar?