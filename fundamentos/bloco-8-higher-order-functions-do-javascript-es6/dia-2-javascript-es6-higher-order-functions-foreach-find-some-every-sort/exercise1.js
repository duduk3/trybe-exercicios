const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:
//*------======= EXERCÍCIO 1 DO DIA 2 DO BLOCO =======-------*//

function authorBornIn1947(element) {
    if (element.author.birthYear === 1947) {
      console.log(element.author.name);
    }
  }

  books.find((book) => {
    authorBornIn1947(book);
  });

//*------======= EXERCÍCIO 2 DO DIA 2 DO BLOCO =======-------*//

let nameBook = '';
function smallerName(book) {
    nameBook === '' ? nameBook = book.name : 
    book.name.length < nameBook.length ? nameBook = book.name : nameBook;
    return nameBook;
  }

books.forEach((book) => {
  smallerName(book);
})

console.log(nameBook);

//*------======= EXERCÍCIO 3 DO DIA 2 DO BLOCO =======-------*//

books.find((book)=> {
  book.name.length === 26 ? console.log(book) : book.name;
})


//*------======= EXERCÍCIO 4 DO DIA 2 DO BLOCO =======-------*//

