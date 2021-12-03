//===================================================
//**Exercício 1 do dia 4 do blobo 4 */
//===================================================

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


//===================================================
//**Exercício 2 do dia 4 do blobo 4 */
//===================================================

let maxArray = [2, 3, 6, 7, 10, 1];
let max = 0;

function getMaxIndex (array){
    for ( let i = 0; i < maxArray.length; i += 1) {
        if (maxArray[i] > max){
            max = i;
        }
    }
    console.log(max); 
}

getMaxIndex(maxArray);


//===================================================
//**Exercício 3 do dia 4 do blobo 4 */
//===================================================

let minArray = [2, 4, 6, 7, 10, 0, -3];
let min = minArray[0];

function getMinIndex (array){
    for ( let i = 0; i < minArray.length; i += 1) {
        if (minArray[i] < min){
            min = i;
        }
    }
    console.log(min); 
}

getMinIndex(minArray);



//===================================================
//**Exercício 4 do dia 4 do blobo 4 */
//===================================================

let nameArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
max = 0;
let maxName = '';

function getMaxName (array){
    for ( let i = 0; i < nameArray.length; i += 1) {
//        for (let count = 0; count < nameArray[i].length; count += 1);{
            if (nameArray[i].length > max){
                maxName = nameArray[i];
                console.log(nameArray[i].length);
            }
 //       } 
    }
    console.log(maxName); 
}

getMaxName(nameArray);

