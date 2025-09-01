// 3. Crie uma classe chamada "ContaBancaria" com os atributos: número da conta, saldo e titular. 
// Crie métodos para depositar, sacar e exibir o saldo.

class ContaBancaria {
    constructor (conta, saldo, titular) {
        this.conta = conta
        this.saldo = saldo
        this.titular = titular
    }
    
    depositar(valor){ this.saldo = this.saldo + valor }
    sacar(valor){ this.saldo = this.saldo - valor }
    exibirSaldo(){ return this.saldo }

    apresentar(){ console.log(`Conta: ${this.conta}, titular: ${this.titular}, Saldo:${this.saldo}`)}
}

const contaBancaria = new ContaBancaria(123, 500, 'Joana')
contaBancaria.apresentar()
contaBancaria.depositar(200)
console.log('Exibir saldo: ', contaBancaria.exibirSaldo())
contaBancaria.sacar(300)
console.log('Exibir saldo: ', contaBancaria.exibirSaldo())
