const myRemove = require('./myRemove');

describe("the function myRemove", () => {

    it('Se o retorno do array exclui o 3',() => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });

    it('Se o retorno do array exclui o 0',() => {
        expect(myRemove([0, 1, 2, 3, 4], 0)).toEqual([1, 2, 3, 4]);
    });

    it('Se o retorno do array exclui o -3',() => {
        expect(myRemove([-3, -2, -1, 0, 1, 2, 3, 4], -3)).toEqual([-2, -1, 0, 1, 2, 3, 4]);
    });
    
})


