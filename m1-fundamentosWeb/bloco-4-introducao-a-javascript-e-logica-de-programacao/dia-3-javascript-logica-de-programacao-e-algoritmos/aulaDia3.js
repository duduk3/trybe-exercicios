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
    espaco += ' '
    asterisco += '*';
}

for ( let i = 1; i <= n; i += 1 ) {
    console.log(espaco.slice(0,-i) + asterisco.slice(0,i));
}



//** */ Exercício 4 - criar um árvore de natal de asterisco

n = 5;
asterisco = '';
espaco = '';

for ( let i = 1; i <= n; i += 1 ) {
    espaco += ' ';
}

console.log(espaco + '*');

for ( let i = 1; i <= n; i += 1 ) {
    asterisco += '*';
    console.log(espaco.slice(0,-i) + '*' + asterisco + asterisco);
}


//** */ Exercício 6 - parte1 - criar um árvore de natal de asterisco vazada no meio

n = 5;
asterisco = '';
espaco = '';
let vazado = '';

if (n % 2 === 1) {
    for ( let i = 1; i <= n; i += 1 ) {
        espaco += ' ';
    }
    
    console.log(espaco + ' *');
    
    for ( let i = 1; i <= n; i += 1 ) {
        asterisco += '*';
        vazado += ' ';
        if(asterisco.length === 1) {
            console.log(' ' + espaco.slice(0,-i) + asterisco + ' ' + asterisco);
        }
        else {
            console.log(' ' + espaco.slice(0,-i) + asterisco.slice(0,-i+1) + vazado.slice(0,-1) + vazado + asterisco.slice(0,-i+1));
        }
    }
    console.log(asterisco + '***' + asterisco);
}


//** */ Exercício 6 - parte2 - criar um árvore de natal de asterisco vazada no meio

n = 5;
asterisco = '';
espaco = '';
vazado = '';

if (n % 2 === 1) {
    for ( let i = 1; i <= n; i += 1 ) {
        espaco += ' ';
    }
    
    console.log(espaco.slice(0,-4) + '*');
    
    for ( let i = 1; i <= n; i += 1 ) {
        asterisco += '*';
        vazado += ' ';

        if (i % 2 === 1 && i < n-2) {
            if(asterisco.length === 1) {
                console.log(espaco.slice(0,-i-4) + asterisco + ' ' + asterisco);
            }
            else {
                console.log(' ' + espaco.slice(0,-i*3) + asterisco.slice(0,-i+1) + vazado.slice(0,-i-1) + vazado + asterisco.slice(0,-i+1));
            }
        }

    }
    console.log(asterisco);
}




