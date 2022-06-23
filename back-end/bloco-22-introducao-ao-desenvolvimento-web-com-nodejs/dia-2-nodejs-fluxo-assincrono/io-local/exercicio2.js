function exercicio2 (num1, num2, num3) {
  const firstPromise = new Promise((resolve, reject) => {
    if(typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
      reject(new Error("Não foi inserido um número no parâmetro") )}
    
    const result = (num1 + num2) * num3;
    
    if(result < 50) reject(new Error("Valor muito baixo") )
    
    resolve(result)
  })
  return firstPromise;
};

exercicio2(2, 1, 33)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));

module.exports = exercicio2;
