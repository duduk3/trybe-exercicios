let sinal = '';

sinal = 'verde';

switch (sinal) {
    case "verde" :
        console.log("siga!");
        break;

    case "amarelo" :
        console.log("atenção!");
        break;

    case "vermelho" :
        console.log("pare!");
        break;

    default:
        console.log("farol em manutenção!");
        break;
}

//**ATENÇÃO: podem ser acrescentadas quantas condições forem necessárias porém é necessário inserir o "BREAK" para que o programa pare de fazer a leitura*/