let btnContar = document.querySelector('#contador');
let click = document.querySelector('#clicks');
let count = 0;

btnContar.addEventListener('click', (event) => {
    event.target ? count = count + 1 : count;
    click.innerText = count;
})
