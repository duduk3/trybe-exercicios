//*---=== Exercício 1 - Dada uma matriz, transforme em um array ---===*//

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];

let newItem = [];
function flatten(result, item) {
  return newItem.push(item);
}

let newArray = arrays[0].reduce(flatten, newItem);
newArray = arrays[1].reduce(flatten, newItem);
newArray = arrays[2].reduce(flatten, newItem);

console.log(newItem);


