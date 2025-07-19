// 2. Use bind para vincular uma função a um objeto e, em seguida, 
// chame a função vinculada para exibir propriedades desse objeto.

const obj1 = { 
    nome: 'Ana', 
    ola: function hello(){
        console.log('Meu nome é', this.nome, '.')
    } 
}

const obj2 = {
    nome: 'Bia'
}

const funcBind = obj1.ola.bind(obj2)
funcBind()