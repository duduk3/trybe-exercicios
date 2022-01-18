const myFizzBuzz = require('./myFizzBuzz');


describe("the function myFyzzBuzz:", () => {

    it('Se 15 retorna fizzbuzz',() => {
        expect(myFizzBuzz(15)).toEqual('fizzbuzz');
    });

    it('Se 5 retorna buzz',() => {
        expect(myFizzBuzz(5)).toEqual('buzz');
    });

    it('Se 3 retorna fizz',() => {
        expect(myFizzBuzz(3)).toEqual('fizz');
    });

    it('Se 13 retorna false',() => {
        expect(myFizzBuzz(13)).toEqual(13);
    });

})
