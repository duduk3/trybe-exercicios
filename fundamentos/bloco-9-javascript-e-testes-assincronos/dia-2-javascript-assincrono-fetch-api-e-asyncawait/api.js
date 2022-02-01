const API_URL = `https://api.coincap.io/v2/assets`;

let criptoArray;

const fetchCripto = async () => {

    fetch(API_URL)
        .then((response) => response.json())
        .then((data) => criptoArray = data.data)
        .catch((err) => console.log(err))
        
    return criptoArray;
}

// criptoArray = criptoArray.filter((element) => element.rank <= 10).map((elem) => {
//     return { 
//         name: elem.name,
//         symbol: elem.symbol,
//         price: elem.priceUsd
//     }
// });

console.log(criptoArray);

window.onload = () => fetchCripto();