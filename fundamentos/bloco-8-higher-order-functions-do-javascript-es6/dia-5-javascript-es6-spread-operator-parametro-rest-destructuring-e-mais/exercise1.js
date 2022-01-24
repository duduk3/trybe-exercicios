//* 1 - Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2 , 15 e 54 .

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  rectangleArea(rectangle[0], rectangle) // altere a chamada da funcao rectangleArea
  console.log(rectangleArea(...rectangle));
});


//* 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const numbers = [1, 3, 5, 6, 8, 10];
const sum = (...items) => items.reduce((acc, element)=> acc + element, 0);

console.log(sum(1, 3, 5, 6, 8, 10));


//* 3 - Escreva a função personLikes , que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa, conforme mostrado abaixo:

const alex = {
  nome: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  nome: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// const { nome, age, likes } = gunnar;
// console.log(`Esse é o ${nome}, ele tem ${age} anos. Ele gosta de: ${likes}`);

// complete a assinatura da função abaixo
const personLikes = (person) => {
  const {nome, age, likes} = person;
  return `${nome} is ${age} years old and likes ${likes.join(', ')}.`;
}

console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'



// // definindo o objeto
// const character = {
//   name: 'Luke SkyWalker',
//   age: '53',
//   description: {
//     specieName: 'Human',
//     jedi: true,
//   },
//   homeWorld: {
//     name: 'Tatooine',
//     population: '200000',
//   },
// };

// // desestruturando o objeto:
// const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// // imprimindo os valores:
// console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);