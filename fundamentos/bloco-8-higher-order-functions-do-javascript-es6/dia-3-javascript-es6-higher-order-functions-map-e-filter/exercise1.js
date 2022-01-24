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
  

//*----===== EXERCÍCIO 1 DO DIA 3 DO BLOCO 8 ----=====*//

// const expectedResult = [
//     'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
//     'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
//     'Fundação - Ficção Científica - Isaac Asimov',
//     'Duna - Ficção Científica - Frank Herbert',
//     'A Coisa - Terror - Stephen King',
//     'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
//   ];

let newArray = [];
  
  function formatedBookNames(book) {
    newArray.push(`${book.name} - ${book.genre} - ${book.author.name} `);
  }

  books.map((book)=> formatedBookNames(book));

console.log(newArray);

//*----===== EXERCÍCIO 2 DO DIA 3 DO BLOCO 8 ----=====*//


// const expectedResult = [
//     {
//       age: 31,
//       author: 'Isaac Asimov',
//     },
//     {
//       age: 38,
//       author: 'H. P. Lovecraft',
//     },
//     {
//       age: 39,
//       author: 'Stephen King',
//     },
//     {
//       age: 43,
//       author: 'George R. R. Martin',
//     },
//     {
//       age: 45,
//       author: 'Frank Herbert',
//     },
//     {
//       age: 62,
//       author: 'J. R. R. Tolkien',
//     },
//   ];

let authorAge = [];

  function nameAndAge(book) {
    let newAge = book.releaseYear - book.author.birthYear;
    let newAuthor = {
        age: newAge,
        author: book.author.name
    };
    authorAge.push(newAuthor);
    return authorAge;
  }

books.map((book)=>nameAndAge(book));


console.log(authorAge.sort((a, b) => a.age - b.age));


//*----===== EXERCÍCIO 3 DO DIA 3 DO BLOCO 8 ----=====*//

// const expectedResult = [
//     { 
//       id: 1,
//       name: 'As Crônicas de Gelo e Fogo',
//       genre: 'Fantasia',
//       author: { name: 'George R. R. Martin', birthYear: 1948 },
//       releaseYear: 1991
//     },
//     {
//       id: 2,
//       name: 'O Senhor dos Anéis',
//       genre: 'Fantasia',
//       author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//       releaseYear: 1954
//     },
//     {
//       id: 3,
//       name: 'Fundação',
//       genre: 'Ficção Científica',
//       author: { name: 'Isaac Asimov', birthYear: 1920 },
//       releaseYear: 1951
//     },
//     {
//       id: 4,
//       name: 'Duna',
//       genre: 'Ficção Científica',
//       author: { name: 'Frank Herbert', birthYear: 1920 },
//       releaseYear: 1965
//     }
//   ];
  
  function fantasyOrScienceFiction(book) {
    if (book.genre === 'Ficção Científica' || book.genre === 'Fantasia') {
      return book;
    };
  }

  const exitExercise3 = books.filter(fantasyOrScienceFiction);

  console.log(exitExercise3);




//*----===== EXERCÍCIO 4 DO DIA 3 DO BLOCO 8 ----=====*//

//   const expectedResult = [
//     {
//       id: 6,
//       name: 'O Chamado de Cthulhu',
//       genre: 'Terror',
//       author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//       releaseYear: 1928,
//     },
//     {
//       id: 3,
//       name: 'Fundação',
//       genre: 'Ficção Científica',
//       author: { name: 'Isaac Asimov', birthYear: 1920 },
//       releaseYear: 1951,
//     },
//     {
//       id: 2,
//       name: 'O Senhor dos Anéis',
//       genre: 'Fantasia',
//       author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//       releaseYear: 1954,
//     },
//   ];
  
const timeCurrent = new Date().getFullYear();

  function oldBooksOrdered(book) {
    if ( timeCurrent - book.releaseYear >= 60 ) {
      return book;
    }
  }

  const exitExercise4 = books.filter(oldBooksOrdered);



  console.log(exitExercise4.sort((a, b)=> a.releaseYear - b.releaseYear ));


  //*----===== EXERCÍCIO 5 DO DIA 3 DO BLOCO 8 ----=====*//

//   const expectedResult = [
//     'Frank Herbert',
//     'George R. R. Martin',
//     'Isaac Asimov',
//     'J. R. R. Tolkien',
//   ];
  
function fantasyOrScienceFictionAuthors(book) {
  if (book.genre === 'Fantasia' || book.genre === 'Ficção Científica') {
    return book.author.name;
  }
}
const exitExercise5 = books.filter(fantasyOrScienceFictionAuthors).map(fantasyOrScienceFictionAuthors);

console.log(exitExercise5);

//*----===== EXERCÍCIO 6 DO DIA 3 DO BLOCO 8 ----=====*//


// const expectedResult = [
//     'O Senhor dos Anéis',
//     'Fundação',
//     'O Chamado de Cthulhu',
//   ];
  
  function oldBooks(book) {
    if ( timeCurrent - book.releaseYear >= 60 ) {
      return book.name;
    }
  }

  const exitExercise6 = books.filter(oldBooks).map(oldBooks);

  console.log(exitExercise6);


//*----===== EXERCÍCIO 7 DO DIA 3 DO BLOCO 8 ----=====*//

  // const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName(book) {
  if (book.author.name.indexOf(".", 2) === 2) {
    return book.name;
  }
}

const exitExercise7 = books.filter(authorWith3DotsOnName)//.map(authorWith3DotsOnName);

console.log(exitExercise7);


