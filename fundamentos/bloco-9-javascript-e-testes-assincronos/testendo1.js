const carros = [
    {marca: 'Audi', cor: 'branco'},
    {marca: 'Ferrari', cor: 'vermelho'},
    {marca: 'Ford', cor: 'preto'},
    {marca: 'Peugeot', cor: 'branco'},];

//** */ FUNÇÃO QUE CRIA UM AGUPADOR DE DADOS "NATIVO" ========  'TOP'

Array.prototype.groupBy = function(prop) {
    let value = this.reduce((total, item) => {
        let key = item[prop];
        total[key] = (total[key] || []).concat(item);
        return total;
    }, {});
    return value;
};

const carrosGroup = carros.filter((item) => item.cor === 'branco').groupBy('cor');

console.log(carrosGroup);

//** */ -----------================------------==========-------------============

const wrongDataFormat = [
    'preto-PP',
    'preto-M',
    'preto-G',
    'preto-GG',
    'preto-GG',
    'branco-PP',
    'branco-G',
    'vermelho-M',
    'azul-XG',
    'azul-XG',
    'azul-XG',
    'azul-PP',
    'azul-P',
]


//** */ FUNÇÃO QUE TRANSFORMA DADOS EM STRING PARA FORMATO DE AGRUPAMENTO

const groupTshirt = wrongDataFormat.reduce((acumulador, item) => {
    const [color, size] = item.split('-');
    
    acumulador[color] = acumulador[color] || {};
    acumulador[color][size] = acumulador[color][size] || 0;
    acumulador[color][size] += 1;

    return acumulador;
}, {})

console.log(groupTshirt);
