// 1. Crie um objeto person com propriedades name e age. 
// Em seguida, defina um método sayHello que imprime "Hello, {name}!" 
// onde {name} é o valor da propriedade name do objeto.

const person = { name: 'Ana', age: 20 }

function sayHello(){
    console.log(`Hello, ${person.name}!`)
}

sayHello()