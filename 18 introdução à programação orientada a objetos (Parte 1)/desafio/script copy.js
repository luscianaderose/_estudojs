// DESAFIO
// Como programadores, alguns dos nossos desafios são pesquisar, entender e aplicar novos conceitos
// quase que diariamente. Para nos acostumarmos com esse ritmo, vamos fazer uma pesquisa antes de
// iniciar o desafio.

// Pesquise e estude a class Date do JavaScript. Entenda seu funcionamento e principais métodos.
// Após a pesquisa e entendimento, você deve elaborar um programa que resolva o problema
// elucidado no próximo slide.

// Calendário Inteligente
// Criar uma classe em JavaScript chamada CalendarHelper que encapsule a funcionalidade de obter o
// nome do dia da semana a partir de uma data.
// A classe deve ter um método chamado getDayName(dateString), que recebe uma string
// representando uma data e retorna o nome do dia da semana correspondente.
// A classe deve ser reutilizável, permitindo que possamos criar diferentes instâncias se necessário.
// Adicione um método isWeekend(dateString) que retorna true se a data for um sábado ou domingo e
// false caso contrário.
// Certifique-se de testar diferentes datas para validar sua implementação.


class CalendarHelper{
    construcotr(dateString) {
        this.dateString = dateString
    }

    getDayName(dateString) { 
        const data = new Date(dateString)
        const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
        const weekday = data.getDay()
        const weekdayFinal = diasDaSemana[weekday]
        
        //return dateString
        return weekdayFinal
        //return diasDaSemana[dateString.getDay()]
    }

    // isWeekend(dateString) { 

    //     return 
    // }
}
//const dateString = prompt("Digite uma data: ")

//Exemplos de uso da classe
const calendar = new CalendarHelper()
//console.log()
console.log(calendar.getDayName("2025-09-22")) // Deve imprimir: "Monday"
// console.log(calendar.isWeekend("2025-09-21")) // true (domingo)
// console.log(calendar.isWeekend("2025-09-22")) // false (segunda-feira)