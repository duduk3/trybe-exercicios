const fetch = require('node-fetch');

const url = 'https://api.chucknorris.io/jokes/random?category=dev';

const fetchJoke = async (url) => {

  const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.value)
    .catch((error) => `Algo deu errado :( \n${error}`);
  
  console.log(result);
};

fetchJoke(url);

// Chuck Norris can write multi-threaded applications with a single thread.

const fetchJoke2 = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJoke2(url);

// Chuck Norris can write multi-threaded applications with a single thread.