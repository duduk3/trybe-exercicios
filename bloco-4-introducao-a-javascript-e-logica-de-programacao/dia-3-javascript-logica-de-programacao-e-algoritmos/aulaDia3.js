//** */ Exercício 1 - criar um quadrado de asterisco

let n = 5;
let asterisco = '';

for ( let i = 1; i <= n; i += 1 ) {
    asterisco += '*';
}

for ( let i = 1; i <= n; i += 1 ) {
    console.log(asterisco);
}


//** */ Exercício 2 - criar um triângulo retângulo de asterisco

n = 5;
asterisco = '';

for ( let i = 1; i <= n; i += 1 ) {
    asterisco += '*';
    console.log(asterisco);
}


//** */ Exercício 3 - criar um triângulo retângulo invertido de asterisco

n = 5;
asterisco = '';
let espaco = '';

for ( let i = 1; i <= n; i += 1 ) {
    asterisco += '*';
    espaco += ' '
}

for ( let i = 1; i <= n; i += 1 ) {
    console.log(espaco.slice(0,-i) + asterisco.slice(0,i));
}



