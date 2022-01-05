let estados = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

let paiSelect = document.querySelector('#estado');

for (let index = 0; index < estados.length; index += 1) {
    let filhoOption = document.createElement('option');
    filhoOption.classList = estados[index];
    filhoOption.value = estados[index];
    filhoOption.innerText = estados[index];
    paiSelect.appendChild(filhoOption);
}