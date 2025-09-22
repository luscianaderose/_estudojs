// 6. Crie um carro que tenha velocidade e bateria, ambas com valores protegidos.
// Garanta que a bateria nunca ultrapasse 100% nem fique negativa.
// Adicione uma função para carregar a bateria.
// Simule acelerar o carro e carregar a bateria.

class Carro{
    #velocidade
    #bateria
    constructor(velocidade, bateria){
        this.#velocidade = velocidade
        this.#bateria = bateria
    }

    get velocidade(){ return `A velocidade atual é ${this.#velocidade} km/h.`}

    set velocidade(value){ 
        if ((value >= 0) && (value <= 300)){
            this.#velocidade = value
        } else (
            console.log("Só é permitido valores entre 0 e 300.")
        )
    }

    get bateria(){ return `A bateria está em ${this.#bateria}%.`}

    set bateria(value){
        if ((value >= 0) && (value <= 100)){
            this.#bateria = value
        } else {
            console.log("Só é permitido valores entre 0 e 100.")
        }

    }

    carregarBateria(){
        this.#bateria = 100
        return `O carro está agora com a bateria em 100%.`
    }
}

const gol = new Carro(50, 60)
console.log(gol.velocidade)
console.log(gol.bateria)
console.log(gol.carregarBateria())