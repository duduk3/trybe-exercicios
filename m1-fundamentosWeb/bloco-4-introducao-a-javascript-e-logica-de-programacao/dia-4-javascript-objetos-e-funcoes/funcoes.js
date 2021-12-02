//**Exercício 1 do dia 4 do blobo 4 */

function verificaPalindrome(word) {

    var tamanho = word.length;
    var meio = Math.floor(tamanho/2);

    for ( var i = 0; i < meio; i++ ) {
        if (word[i] !== word[tamanho - 1 - i]) {
            return  console.log('false');
        }
    }

    return console.log('true');
}

verificaPalindrome('arara');

verificaPalindrome('desenvolvimento');



//**Exercício 2 do dia 4 do blobo 4 */




