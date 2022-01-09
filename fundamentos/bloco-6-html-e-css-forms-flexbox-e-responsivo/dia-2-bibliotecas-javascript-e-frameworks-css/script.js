let estados = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

let paiSelect = document.querySelector('#estado');

for (let index = 0; index < estados.length; index += 1) {
    let filhoOption = document.createElement('option');
    filhoOption.classList = estados[index];
    filhoOption.value = estados[index];
    filhoOption.innerText = estados[index];
    paiSelect.appendChild(filhoOption);
};


let btnSubmit = document.querySelector('#btnSend');
let dataInicio = document.querySelector('#inicio');

btnSubmit.addEventListener('click', imprimeNaTela)

function imprimeNaTela(event){
    event.preventDefault();
    validarData(dataInicio)
}

function validarData(data){
    let formatoValido = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
    let valido = false;
    
    if(!formatoValido.test(data.value))
        alert("A data está no formato errado. Por favor corrija.");
    else{
        let dia = data.value.split("/")[0];
        let mes = data.value.split("/")[1];
        let ano = data.value.split("/")[2];
        let MyData = new Date(ano, mes - 1, dia);
        if((MyData.getMonth() + 1 != mes)
            ||(MyData.getDate() != dia)
            ||(MyData.getFullYear() != ano))
            alert("Valores inválidos para o dia, mês ou ano. Por favor corrija.");
        else
            valido = true;
    }
    
    if(valido == false){
        data.focus();
        data.select();
    }
    
    return valido;
};
