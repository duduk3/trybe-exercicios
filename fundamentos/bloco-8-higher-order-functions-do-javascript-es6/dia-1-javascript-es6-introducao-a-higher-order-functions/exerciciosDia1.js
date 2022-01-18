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

// //*----======== EXERCÍCIO 2 DO DIA 1 BLOCO 8 =========----*//

// const goodLuck = (yourNumber, callBack) => {
//     if ( yourNumber === callBack ) {
//         return "Parabéns você ganhou";
//     } else {
//         return "Tente novamente";s
//     }
// }


// const sortNum = () => {
//     const luckNum = Math.round(Math.random() * 4) + 1;
    
//     return luckNum;
// }

// console.log(goodLuck(1, sortNum()));

//*----======== EXERCÍCIO 3 DO DIA 1 BLOCO 8 =========----*//

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const yourGrade = (feedback, answer) => {
    let note = 0;
    for (let i = 0; i < feedback.length; i++) {
        if ( feedback[i] !== answer[i] && answer[i] !== 'N.A' ) {
            note -= 0.5; 
        } else if ( feedback[i] === answer[i] ) {
            note += 1;
        }
    }
    return note;
};

const correction = (a, b, callBack) => callBack(a, b);


console.log(correction(RIGHT_ANSWERS, STUDENT_ANSWERS, yourGrade));
