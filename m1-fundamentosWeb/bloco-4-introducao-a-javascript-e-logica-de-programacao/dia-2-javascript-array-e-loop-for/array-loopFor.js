// ** Exercício 1 - imprimindo os números do array

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i += 1) {
    console.log('O número',numbers[i],'é o',i+1,'º número do array.' );
}



// ** Exercício 2 - soma do array

let soma = 0;

for (let i = 0; i < numbers.length; i += 1) {
    soma += numbers[i];
}
console.log('A soma dos números do array é:',soma,'.');



// ** Exercício 3 - média do array

let media = 0;

for (let i = 0; i < numbers.length; i += 1) {
    soma += numbers[i];
}

media = soma/numbers.length;

console.log('A média dos números do array é:',media,'.');



