// const Xmas95 = new Date("December 25, 1995 23:15:30");
// const weekday = Xmas95.getDay();

// console.log(weekday); // 1


///////////////////////////////////////////////////////


// const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

// const hoje = new Date()
// const weekday = hoje.getDay()
// console.log('weekday ', weekday)

// const weekdayFinal = diasDaSemana[weekday]

// console.log(weekdayFinal)


///////////////////////////////////////////////////////

// const weekday = 0

// if (weekday === 0 || weekday === 7){
//     resposta = true
//     } else {
//     resposta = false
//     }
    
// console.log('resposta: ', resposta)


///////////////////////////////////////////////////////
const dateString = "2025-09-21"
const data = new Date(dateString)
const weekday = data.getDay()
console.log('weekday: ', weekday)
let resposta

if (weekday === 0 || weekday === 6){
    resposta = true
    } else {
    resposta = false
    }
    
console.log('resposta: ', resposta)
