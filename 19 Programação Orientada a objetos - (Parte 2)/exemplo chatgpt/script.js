// Classe base
class Animal {
  falar() {
    console.log("O animal faz um som...");
  }
}

// Classe derivada 1
class Cachorro extends Animal {
  falar() {
    console.log("O cachorro late: Au Au!");
  }
}

// Classe derivada 2
class Gato extends Animal {
  falar() {
    console.log("O gato mia: Miau!");
  }
}

// Testando
const animais = [new Animal(), new Cachorro(), new Gato()];

animais.forEach(a => a.falar());
