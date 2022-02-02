const API_URL = `https://api.coincap.io/v2/assets`;



function createElements (current) {
    const coin = document.createElement('li');
    coin.innerHTML = `"<span>${ current.name }</span>" - Symbol (<span>${current.symbol}</span>) hoje: custa <span>U$ ${current.priceUsd}</span>.`;
    coin.className = 'cripto-list'
    return coin;
}


const fetchCripto = async () => {
    
    const response = await fetch(API_URL);
    const { data } = await response.json();
 
    const filtered10First = data.filter((element) => element.rank <= 10);
    
    const coinList = document.querySelector('.cripto-list');
    filtered10First.forEach((current) => {
    coinList.appendChild(createElements(current));

    });        
}


window.onload = () => fetchCripto();