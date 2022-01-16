//*---====== Exercício 1 ======---*//

function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
  
    return a + b;
  }

  module.exports = sum;




// //*---====== Exercício 3 ======---*//

//   function myFizzBuzz(num) {
//     if (typeof num !== 'number') return false;
//     if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
//     if (num % 3 === 0) return 'fizz';
//     if (num % 5 === 0) return 'buzz';
//     return num;
//   }
  
//   // implemente seus testes aqui