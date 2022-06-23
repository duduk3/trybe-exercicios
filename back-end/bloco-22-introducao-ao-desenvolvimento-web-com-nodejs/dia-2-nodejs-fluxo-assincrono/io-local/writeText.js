//*== Exemplo de criação de escrita de um arquivo com promises
// const fs = require('fs').promises;

// fs.writeFile('./meu-arquivo.txt', 'Meu textão')
//   .then(() => {
//     console.log('Arquivo escrito com sucesso!');
//   })
//   .catch((err) => {
//     console.error(`Erro ao escrever o arquivo: ${err.message}`);
//   });

//*== Exemplo de criação de escrita de um arquivo com método "Async Await"

// const fs = require('fs').promises;

// async function main() {
//   try {
//     await fs.writeFile('./meu-arquivo.txt', 'Meu textão agora aumentou');
//     console.log('Arquivo escrito com sucesso!');
//   } catch (err) {
//     console.error(`Erro ao escrever o arquivo: ${err.message}`);
//   }
// }

// main()

//* == usando a flag "wx" para lançar um erro ao escrever no arquivo, caso o arquivo já exista

const fs = require('fs').promises;

//  > A flag ``´wx`` abre o arquivo para escrita **apenas** caso ele não exista. Caso o contrário, um erro será lançado:

fs.writeFile('./meu-novo-arquivo.txt', 'Eu estive aqui :eyes:', { flag: 'wx' })
  .then(() => {
    console.log('Arquivo salvo');
  })
  .catch((err) => {
    // Se o arquivo existir, um erro é retornado
    console.error(err);
  });

