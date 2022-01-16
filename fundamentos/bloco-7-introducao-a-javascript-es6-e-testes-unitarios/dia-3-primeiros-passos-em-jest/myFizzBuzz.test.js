const myFizzBuzz = require('./myFizzBuzz');

test('Se 15 retorna fizzbuzz',() => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
});