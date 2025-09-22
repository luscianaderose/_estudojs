// 3. Crie uma conta bancária que começa com saldo zero.
// Implemente funções para:
// Depositar um valor.
// Sacar um valor (apenas se houver saldo suficiente)
// Consultar o saldo atual.
// Simule as ações e veja os resultados no console.

class ContaBancaria{
    constructor(){       // não passamos parâmetro pq nao queremos nada de fora
        this.saldo = 0
    }

    depositar(valor){ 
        if(valor > 0){
            this.saldo += valor
        } else {
            console.log("Não é possível depositar valor negativo.")
        }
    }

    sacar(valor){
        if (valor <= this.saldo){
            this.saldo -= valor
        } else {
            console.log("Não é possível sacar mais do que o saldo.")
        }
    }

    consultar(){ return this.saldo }
}

const contaBancaria = new ContaBancaria()
console.log(contaBancaria.consultar())
contaBancaria.depositar(100)
console.log(contaBancaria.consultar())
contaBancaria.sacar(50)
console.log(contaBancaria.consultar())
contaBancaria.sacar(100)
console.log(contaBancaria.consultar())
contaBancaria.depositar(-500)
console.log(contaBancaria.consultar())
