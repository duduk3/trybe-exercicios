const myRemove = require('./myRemove');


test('Se o retorno do array exclui o 3',() => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
});

