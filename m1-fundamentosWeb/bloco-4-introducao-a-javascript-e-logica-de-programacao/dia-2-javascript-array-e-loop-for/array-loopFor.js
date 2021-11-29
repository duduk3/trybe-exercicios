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



// ** Exercício 4 - imprime se média do array é maior ou menor que 20


for (let i = 0; i < numbers.length; i += 1) {
    soma += numbers[i];
}

media = soma/numbers.length;

if (media > 20){
    console.log('A média dos números do array é maior que 20.');
} else {
    console.log('A média dos números do array é menor que 20.');
}



// ** Exercício 5 - imprime o maior número do array
let maior = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if ( numbers[i] > maior){
        maior = numbers[i];
    };
}
    console.log('O maior número do array é :',maior);



// ** Exercício 6 - imprime o número do array se for ímpar
let impar = 0;
for (let i = 0; i < numbers.length; i += 1) {
    if ( numbers[i] % 2 === 1){
        impar += 1;
    };
    //console.log('O número',numbers[i],'é ímpar. Ele é o',i+1,'º do array.' );
}

if(impar > 1) {
    console.log('Existem',impar,'números ímpares no array.' )
}
else if (impar = 1 ) {
    console.log('Existem',impar,'número ímpar no array.' )
} 
else {
    console.log('nenhum valor ímpar encontrado');
}
