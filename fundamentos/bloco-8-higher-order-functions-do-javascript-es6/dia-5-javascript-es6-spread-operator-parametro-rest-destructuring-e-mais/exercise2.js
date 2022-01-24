const numbers = [1, 3, 5, 6, 8, 10];
const sum = (...items) => items.reduce((acc, element)=> acc + element, 0);

console.log(sum(1, 3, 5, 6, 8, 10));