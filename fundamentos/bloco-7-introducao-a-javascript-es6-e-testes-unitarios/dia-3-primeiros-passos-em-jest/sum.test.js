const sum = require('./sum');

describe("the function sum:", () => {

    it('Se a soma de 5 e 4 é 9',()=>{
        expect(sum(4,5)).toBe(9);
    });

    it('Se a soma de 0 e 0 é 0',()=>{
        expect(sum(0,0)).toBe(0);
    });
    
    it('Se a soma de 0.5 e 4.5 é 5',()=>{
        expect(sum(0.5,4.5)).toBeCloseTo(5);
    });
        
})    


