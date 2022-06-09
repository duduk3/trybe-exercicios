const readlineSync = require('readline-sync');

const nome = readlineSync.question('\nQual é o seu nome?');
const entrada = readlineSync.questionInt('\nDigite um número inteiro para saber o seu fatorial : ')

function calcularFatorialRecursivamente (n) {
  if (n === 1) {
      return 1;
  }
   
  return n * calcularFatorialRecursivamente (n - 1);
}

const calcularFatorial = (entrada) => {
  if (entrada === 0 || entrada === 1) {
      return 1;
  }
   
  return calcularFatorialRecursivamente(entrada);
}

console.log(`${calcularFatorial(entrada)}`);


