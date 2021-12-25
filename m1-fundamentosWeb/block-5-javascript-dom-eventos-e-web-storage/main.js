const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');



// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function addClass1Li (event) {
        let take1Li = document.querySelector('#first-li');
        let take2Li = document.querySelector('#second-li');
        let take3Li = document.querySelector('#third-li');
        take1Li.className = 'tech';
        take2Li.classList.remove('tech');
        take3Li.classList.remove('tech');
}
function addClass2Li (event) {
  let take1Li = document.querySelector('#first-li');
  let take2Li = document.querySelector('#second-li');
  let take3Li = document.querySelector('#third-li');
  take2Li.className = 'tech';
  take1Li.classList.remove('tech');
  take3Li.classList.remove('tech');
}
function addClass3Li (event) {
  let take1Li = document.querySelector('#first-li');
  let take2Li = document.querySelector('#second-li');
  let take3Li = document.querySelector('#third-li');
  take3Li.className = 'tech';
  take2Li.classList.remove('tech');
  take1Li.classList.remove('tech');
}
firstLi.addEventListener('click', addClass1Li);
secondLi.addEventListener('click', addClass2Li);
thirdLi.addEventListener('click', addClass3Li);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.