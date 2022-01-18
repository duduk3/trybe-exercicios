//*----------======  EXERCÍCIO 1 DA PARTE 2  ======-----------*//

let fatorialN = (n) => {
    let fatorial = 1;
    for (let i = n; i >= 1 ; i -= 1) {
        fatorial = fatorial * i;
    }
    n === 0 ? fatorial = 1 : fatorial;
    return console.log(fatorial);
}

fatorialN(0);

//*----------======  EXERCÍCIO 2 DA PARTE 2  ======-----------*//

const longestWord = (string) => {
    let palavras = string.split(" "); // cria um array com as palavras
    let bigFor = "";
    
    for (word of palavras) {
      word.trim().length > bigFor.length ? bigFor = word.trim() : bigFor;
    }
    
    return console.log(bigFor);
};

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'); // retorna 'aconteceu'

//*----------======  opção 2  ======-----------*//
// let bigger = string.split(" ").reduce( (acumulador, valorCorrente) => {
//     if (acumulador.length < valorCorrente.trim().length) {
//         return valorCorrente.trim();
//     };
//     return acumulador;
// },'');
// return console.log(bigger);

//*----------======  opção 3  ======-----------*//
// let big = '';
// string.split(" ").forEach(word => {
//     word.trim().length > big.length ? big = word.trim() : big = big;
//   });

//*----------======  EXERCÍCIO 2 DA PARTE 3  ======-----------*//


