//*== Exemplo de tratativa de erro com o try-cat
// const fs = require('fs');
// const nomeDoArquivo = 'meu-arquivo.txt';

// try {
//   const data = fs.readFileSync(nomeDoArquivo, 'utf-8');
//   console.log(data);
// } catch (err) {
//   console.error(`Erro ao ler o arquivo: ${err.path}`);
//   console.log(err);  
// }

//*== Exemplo de tratativa de erro com a callback do file_system
// const fs = require('fs');
// const nomeDoArquivo = 'meu-arquivo.txt';

// fs.readFile(nomeDoArquivo, 'utf8', (err, data) => {
//   if (err) {
//     console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
//     process.exit(1);
//   }
//   console.log(`Conteúdo do arquivo: ${data}`);
// });

//*== Exemplo com método assíncrono do file_system, criando uma promise
const fs = require('fs').promises;

const nomeDoArquivo = 'meu-arquivo.txt'

fs.readFile(nomeDoArquivo, 'utf-8')
  .then((data) => {
    console.log(`Conteúdo do arquivo: ${data}`);
  })
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`)
    process.exit(1);
  });