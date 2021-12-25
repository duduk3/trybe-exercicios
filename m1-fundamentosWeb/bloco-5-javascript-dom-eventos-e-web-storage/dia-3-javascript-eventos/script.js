function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

//* ================================================================================
//* Exercício 1
//* ================================================================================
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function addDays () {
  let ulDays = document.querySelector('#days');
  let liDay = document.createElement('li');
  
  for (let i = 0; i < dezDaysList.length; i += 1) {
    ulDays = document.querySelector('#days');
    liDay = document.createElement('li');
    liDay.className = 'day';
    ulDays.appendChild(liDay);
  }
  
  let takeLiDay = document.getElementsByClassName('day');
  
  for (let index = 0; index < takeLiDay.length; index++) {
    takeLiDay[index].innerText = dezDaysList[index];
  }
}

addDays();

//* Exercício 2
//* ================================================================================
function addFeriado () {
  let buttonContainer = document.querySelector(".buttons-container");
  let buttonFilho = document.createElement('button');
  buttonFilho.className = "btn-holiday";
  buttonContainer.appendChild(buttonFilho);
  document.querySelector('.btn-holiday').innerText = "Feriados";
}

addFeriado();

//* Exercício 3
//* ================================================================================
let takeButtonFeriado = document.querySelector('.btn-holiday');
let takeHolidays = document.querySelectorAll('.holiday');

console.log(takeHolidays);