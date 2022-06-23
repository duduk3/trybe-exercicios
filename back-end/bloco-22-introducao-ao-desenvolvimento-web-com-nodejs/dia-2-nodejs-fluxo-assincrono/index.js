const fs = require('fs');

//*== Exemplo de tratamento de erros com if's (sem callbacks), de forma síncrona

// fs.readFile('./arquivo.txt', (err, content) => {
//   if (err) {
//     console.error(`Erro ao ler o arquivo: ${err.message}`);
//     return;
//   }

//   console.log(`Arquivo lido com sucesso. Conteúdo: ${content.toString('utf8')}`);
// });

//*== Exemplo de tratamento de erros com callbacks, de forma síncrona

// const file3Callback = (err, file3Content) => {
//   if (err) return console.log(`Erro ao ler o arquivo 3: ${err.message}`);

//   console.log(`Lido file3.txt com ${file3Content.byteLength} bytes,
//   conteúdo: ${file3Content.toString('utf8')}\n`);
// };

// const file2Callback = (err, file2Content) => {
//   if (err) return console.log(`Erro ao ler o arquivo 2: ${err.message}`);

//   console.log(`Lido file2.txt com ${file2Content.byteLength} bytes,
//   conteúdo: ${file2Content.toString('utf8')}\n`);

//   fs.readFile('file3.txt', file3Callback);
// };

// const file1Callback = (err, file1Content) => {
//   if (err) return console.log(`Erro ao ler arquivo 1: ${err.message}`);

//   console.log(`Lido file1.txt com ${file1Content.byteLength} bytes,
//   conteúdo: ${file1Content.toString('utf8')}\n`);

//   fs.readFile('file2.txt', file2Callback);
// };

// fs.readFile('file1.txt', file1Callback);


//*== Exemplo de tratamento de erros com callbacks, de forma assíncrona

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });
  });
}

readFilePromise('file1.txt') // A função me promete que vai ler o arquivo
  .then((content) => { // Caso arquivo 1 seja lido,
    console.log(`Lido file1.txt com ${content.byteLength} bytes`); // Escrevo o resultado no console
    return readFilePromise('file2.txt'); // Chamo novamente a função, que me retorna uma nova Promise
  })
  .then(content => { // Caso a Promise retornada pelo `then` anterior seja resolvida,
    console.log(`Lido file2.txt com ${content.byteLength} bytes`); // Escrevemos o resultado no console
    return readFilePromise('file3.txt'); // E chamamos a função novamente, recebendo uma nova promessa
  })
  .then((content) => { // Caso a promessa de leitura do `file3.txt` seja resolvida,
    console.log(`Lido file3.txt com ${content.byteLength} bytes`); // Logamos o resultado no console
  })
  .catch((err) => { // Caso qualquer uma das promessas ao longo do caminho seja rejeitada
    console.log(`Erro ao ler arquivos: ${err.message}`); // Escrevemos o resultado no console
  });
