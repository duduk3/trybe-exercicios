//*---====== Exercício 1 ======---*//

function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
  
    return a + b;
  }

  module.exports = sum;


const verificaNum = (num) => {
  if (num !== 5) {
    throw('Esse valor não é um número ');
  }

}


const testandoTryCat = (num) => {
  verificaNum(num);
  try {
    num * 2;
  } catch (error) {
    console.log(error.message);
  }
}  
console.log("Estudando: \n \* Expressões Regulares");

testandoTryCat(4);
