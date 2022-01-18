// //*----======== EXERCÍCIO 1 DO DIA 1 BLOCO 8 =========----*//
// const newEmployees = (callBack) => {
//     const employees = {
//       id1: callBack('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: callBack('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: callBack('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     }
//     return employees;
//   };

//   const createEmail = (name) => {
//       const newEmail = name.toLowerCase().replace(' ', '_');
//     return {
//         nome: name,
//         email: `${newEmail}@trybe.com`
//     }
//   };

// console.log(newEmployees(createEmail));

//*----======== EXERCÍCIO 2 DO DIA 1 BLOCO 8 =========----*//

const goodLuck = (yourNumber, callBack) => {
    if ( yourNumber === callBack ) {
        return "Parabéns você ganhou";
    } else {
        return "Tente novamente";s
    }
}


const sortNum = () => {
    const luckNum = Math.round(Math.random() * 4) + 1;
    
    return luckNum;
}

console.log(goodLuck(1, sortNum()));

//*----======== EXERCÍCIO 3 DO DIA 1 BLOCO 8 =========----*//

