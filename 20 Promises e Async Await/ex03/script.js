// 3. Crie uma função que retorna uma Promise com um número. No .then(), 
// dobre o valor recebido, e no próximo .then() triplique o valor.

function createPromise(){
    return new Promise((resolve, reject) => {resolve(10)})
}

const promise = createPromise()

promise
.then((valor) => {console.log(valor * 2)})
.then((valor) => {console.log(valor * 3)})