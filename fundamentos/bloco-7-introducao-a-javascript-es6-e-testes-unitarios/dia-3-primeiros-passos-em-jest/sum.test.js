const sum = require('./sum');

test('Se a soma de 5 e 4 é 9',()=>{
    expect(sum(4,5)).toBe(9);
});

