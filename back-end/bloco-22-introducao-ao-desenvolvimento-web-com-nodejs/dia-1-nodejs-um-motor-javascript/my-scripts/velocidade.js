const readlineSync = require('readline-sync');

const nome = readlineSync.question('Qual é o seu nome?');
const distancia = readlineSync.questionInt('Qual é a distância em metros?');
const tempo = readlineSync.questionInt('Qual é o tempo em segundos?');

const imc = (distancia, tempo) => {
  return (distancia / tempo).toFixed(2);
}

const result = imc(distancia, tempo)

console.log(`A velocidade calculada por ${nome}, é de : ${result} m/s`);

