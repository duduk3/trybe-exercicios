const readlineSync = require('readline-sync');

const nome = readlineSync.question('Qual é o seu nome?');
const peso = readlineSync.questionFloat('Qual é o seu peso?');
const altura = readlineSync.questionFloat('Qual é a sua altura?');

const imc = (peso, altura) => {
  return (peso / (altura * altura)).toFixed(2);
}

// Abaixo de 18,5	Abaixo do peso (magreza)
// Entre 18,5 e 24,9	Peso normal
// Entre 25,0 e 29,9	Acima do peso (sobrepeso)
// Entre 30,0 e 34,9	Obesidade grau I
// Entre 35,0 e 39,9	Obesidade grau II
// 40,0 e acima	Obesidade graus III e IV

const result = imc(peso, altura);

console.log(`\nO imc de ${nome} é : ${result}`);

if (result < 18.5) {
  console.log('\nAbaixo do peso (magreza)');  
} else if (result >= 18.5 && result < 24.9) {
    console.log('\nPeso normal');  
} else if (result >= 25 && result < 29.9) {
  console.log('\nAcima do peso (sobrepeso)');  
} else if (result >= 30 && result < 34.9) {
  console.log('\nObesidade grau I');  
} else if (result >= 35 && result < 39.9) {
  console.log('\nObesidade grau II');  
} else if (result > 40) {
  console.log('\nObesidade graus III e IV (grave)');  
}
