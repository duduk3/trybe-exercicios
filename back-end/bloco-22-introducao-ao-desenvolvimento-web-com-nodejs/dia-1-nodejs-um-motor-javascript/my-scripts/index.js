const readlineSync = require('readline-sync');

const app = readlineSync.questionInt(`\nEscolha o App que deseja, através do seu número correspondente :\n[0] = imc\n[1] = velocidade\n[2] = sorteio\n[3] = fatorial\n[4] = fibonacci\n`)

switch (app) {
  case 0:
    require(`./imc`)
    break;
  case 1:
    require(`./velocidade`)
    break;
  case 2:
    require(`./sorteio`)
    break;
  case 3:
    require(`./fatorial`)
    break;
  case 4:
    require(`./fibonacci`)
    break;
  default:
    break;
}

