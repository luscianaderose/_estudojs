function saudacao(nome, callback) {
    console.log("Olá, " + nome);
    callback(); // Chamando a função callback
}

function despedida() {
    console.log("Até logo!");
}

saudacao("Lucas", despedida);