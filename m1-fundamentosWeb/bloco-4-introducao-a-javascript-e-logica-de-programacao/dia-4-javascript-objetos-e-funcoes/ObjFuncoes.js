//** Exercício 1 do Dia 4 do bloco 4 */

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

console.log('Bem-vinda, ',info.personagem);


//** Exercício 2 do Dia 4 do bloco 4 */

console.log(info);


//** Exercício 3 do Dia 4 do bloco 4 */

for (let key in info) {
    console.log(key);
}



//** Exercício 4 do Dia 4 do bloco 4 */

for (let key in info) {
    console.log(info[key]);
}


//** Exercício 5 do Dia 4 do bloco 4 */

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };

for (let key in info, info2) {
    if ( info[key] === info2[key]){
        console.log('\n Ambos recorrentes');
    } else {
        console.log('\n',info[key], 'e', info2[key]);
    }
}


//** Exercício 6 do Dia 4 do bloco 4 */

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  
  console.log('\"O livro favorito de', leitor.nome,leitor.sobrenome,'se chama \'',leitor.livrosFavoritos[0].titulo,'\'\"');




