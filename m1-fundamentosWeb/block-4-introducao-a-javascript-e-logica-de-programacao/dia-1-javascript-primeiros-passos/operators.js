let a = 123; //variável do tipo: number;
let b = 'usaremos por regra o let para variáveis'; //variável do tipo: string;
let c = 0.123; //variável do tipo: number;
let d; //variável do tipo: undefined;
let e = null; //variável do tipo: null;
let isTurnOff = false; //variável do tipo: boolean; PODE SER "TRUE" OU "FALSE".

//*ATENÇÃO: UMA VARIÁVEL NUNCA COMEÇARÁ COM NÚMEROS.

//*** truthy falsy *** -- VEREMOS ADIANTE!

let num1 = 5;
let num2 = 10;
let num3 = 15;

//** OS PARÊNTESES SEMPRE SERÃO USADOS PARA AS REGRAS DE PRIORIDADES NA MATEMÁTICA */
// // // Soma
// let soma = num1 + num2;
// console.log(soma);

// // // Subtração
// let subtracao = num1 - num2;
// console.log(subtracao);

// // // Divisão
// let divisao = num1 / num2;
// console.log(divisao);

// // // Multiplicação
// let multiplicacao = num1 * num2; 
// console.log(multiplicacao);

// let resultado = ((3 + 4) * 5) / 2;
// console.log(resultado);


//** ATENÇÃO : USAREMOS POR REGRA OS 3 ===  */
// // Comparação
let comparacao = num1 >= num2;
console.log(comparacao);

let isEqual = num1 === num2;
console.log(isEqual); 

// // Como saber se o num1 + num 2 é par?
let isEven = ((num1 + num2) % 2 ) == 0
// isEven = ((5 + 10) % 2 ) == 0
// isEven = ((15) % 2 ) == 0
// isEven = (1) == 0
// isEven = false
console.log(isEven);

// 15 / 2

//  15 | 2
// -14  7
//  1

// console.log(isEven);

// // E o num1 + num2 + num3?
// let num1 = 5;
// let num2 = 10;
// let num3 = 15;
isEven = ((num1 + num2 + num3) % 2 ) == 0
// isEven = ((5 + 10 + 15) % 2 ) == 0
// isEven = ((30) % 2 ) == 0
// isEven = (0) == 0
// isEven = true
console.log(isEven);