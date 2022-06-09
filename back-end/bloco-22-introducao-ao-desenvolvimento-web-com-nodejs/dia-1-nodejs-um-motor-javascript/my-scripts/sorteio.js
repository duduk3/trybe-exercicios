const readlineSync = require('readline-sync');

const nome = readlineSync.question('Qual é o seu nome?\n');
const escolha = readlineSync.questionInt('Escolha um número de 0 à 9 : ');
const numeroSorteado = Math.floor(Math.random()*10);

console.log(`\n${nome} sua escolha foi: ${escolha}.\n`);

if (numeroSorteado === escolha) {
  console.log(`O número sorteado foi: ${numeroSorteado}. Parabéns. Você ACERTOU!!!`);
} else {
  console.log(`O número sorteado foi: ${numeroSorteado}. Não foi dessa vez. Não desista!\n`);
}

const newGame = readlineSync.question('Deseja jogar novamente? (Y, n)')

if (newGame === 'Y' || newGame === 'y' || newGame === '') {
  require('node adivinhe.js')
} else if (newGame === n) {
  console.log('muito bem, volte sempre!');
} else {
  console.log('digite corretamente');
}