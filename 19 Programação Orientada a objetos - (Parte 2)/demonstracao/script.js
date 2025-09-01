class Car {
    #brand
    #speed
    constructor(brand) {
        this.#brand = brand
        this.#speed = 0
    }
    
// Getter para acessar a marca
    get brand() {
        return this.#brand
    }

// Setter para alterar a marca (com validação opcional)
    set brand(value) {
        if (typeof value === 'string' && value.trim() !== '') {
            this.#brand = value
        } else {
            console.log("Invalid brand. Must be a non-empty string.")
        }
    }

// Getter para acessar a velocidade
    get speed() {
        return this.#speed
    }

// Setter para alterar a velocidade (com validação)
    set speed(value) {
        if (typeof value === 'number' && value >= 0) {
            this.#speed = value
        } else {
            console.log("Invalid speed. Must be a non-negative number.")
        }
    }

    accelerate() {
        this.#speed = this.#speed + 10
        console.log(`${this.#brand} accelerated to ${this.#speed} km/h`)
    }
}

class ElectricCar extends Car {
    #batteryLevel

    constructor (brand, batteryLevel) {
        super(brand)
        this.#batteryLevel = batteryLevel
    }

    get battery () {
        return this.#batteryLevel
    }

    set battery (value) {
        if (value >= 0 && value <= 100) {
            this.#batteryLevel = value
        } else {
            console .log(`Invalid battery level for ${ this.brand}` )
        }
    }

    charge () {
        this.#batteryLevel = 100
        console.log(`${this.brand} was charged to ${ this.#batteryLevel}%` )
        }
}


// Exemplo de uso
const car = new Car("Uno")
console.log(car.speed) // 0
car.speed = 120
console.log(car.speed) // 120
car.speed = -50 // Invalid speed. Must be a non-negative number.
console.log(car.speed) // 120


const tesla = new ElectricCar ("Tesla" , 80)

tesla.accelerate() // método herdado que usa o speed encapsulado
tesla.charge() // método da subclasse

console.log(tesla.brand) // getter da classe Car
console.log(tesla.speed) // getter da classe Car
console.log(tesla.battery) // getter da classe ElectricCar

tesla.brand = "" // tentativa inválida de alterar a marca → mensagem de erro
tesla.speed = -50 // tentativa inválida de alterar a velocidade → mensagem de erro
tesla.battery = 150 // tentativa inválida de alterar a bateria → mensagem de erro
