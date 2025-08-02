// 7. Crie uma classe chamada "ConversorTemperatura" com métodos para converter uma temperatura de Celsius
// para Fahrenheit e vice-versa.

class ConversorTemperatura {
    constructor(num){
        this.num = num
    }

    paraF() { return (this.num * 1.8) + 32 } //F = (C * 1.8) + 32
    paraC() { return (this.num - 32) / 1,8} //C = (F - 32) / 1,8
}

const temp = new ConversorTemperatura(25)
console.log(temp.paraF())

const temp2 = new ConversorTemperatura(77)
console.log(temp2.paraC())


