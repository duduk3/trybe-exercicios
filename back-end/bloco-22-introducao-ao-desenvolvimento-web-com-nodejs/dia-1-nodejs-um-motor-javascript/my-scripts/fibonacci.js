const readlineSync = require('readline-sync');

const nome = readlineSync.question('\nQual é o seu nome?');
const entrada = readlineSync.questionInt('\nQuantos números da sequência Fibonacci deseja mostrar?')

function GenerateFibonacci(entrada){
  var fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;
  for (var i = 2; i < entrada; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  return fibonacci;
  }
  var f = GenerateFibonacci(entrada);
  console.log(f);

