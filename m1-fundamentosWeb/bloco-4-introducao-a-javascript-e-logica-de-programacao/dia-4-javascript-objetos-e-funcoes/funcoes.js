//**Exercício 1 do dia 4 do blobo 4 */

function palindromo(word) {

    var tamanho = word.length;
    var meio = Math.floor(tamanho/2);

    for ( var i = 0; i < meio; i++ ) {
        if (word[i] !== word[tamanho - 1 - i]) {
            return console.log('Não é um palíndromo');
        }
    }

    return console.log('É um palíndromo');
}
palindromo('arara');



//**Exercício 2 do dia 4 do blobo 4 */




