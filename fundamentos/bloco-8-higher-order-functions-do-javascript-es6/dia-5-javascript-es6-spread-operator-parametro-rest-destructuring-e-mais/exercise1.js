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


