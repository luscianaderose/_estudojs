// Dado um array de transações financeiras, filtre apenas as transações de "crédito" e calcule o valor total.

const transacoes = [
    { tipo: "débito", valor: 100 },
    { tipo: "crédito", valor: 200 },
    { tipo: "crédito", valor: 300 },
    { tipo: "débito", valor: 50 }
  ]

const apenasCredito = transacoes.filter(transacao => transacao.tipo === "crédito")
// console.log(apenasCredito)

const pegarValor = apenasCredito.map(item => item.valor)
// console.log(pegarValor)

const soma = pegarValor.reduce((acumulador, corrente) => acumulador + corrente, 0)
console.log(soma)
