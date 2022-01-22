//*---=== Exercício 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula ---===*//


const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  let count = 0;
  function containsA(result, letter, index, array) {
    for (let i = 0; i < letter.length; i += 1) {
      if (letter[i] === 'a' || letter[i] === 'A') {
        count += 1;
      }
    }
  }

const final = names.reduce(containsA, 0);

console.log(count);