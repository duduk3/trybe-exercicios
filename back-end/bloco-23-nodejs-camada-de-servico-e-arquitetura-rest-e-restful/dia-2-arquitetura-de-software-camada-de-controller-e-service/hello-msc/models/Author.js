const { getNewAuthor } = require('../services/Authors');
const connection = require('./connection');


const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
  );
  return authors;
};


const findById = async (id) => {
  const query = `
    SELECT id, first_name, middle_name, last_name 
    FROM model_example.authors 
    WHERE id = ?
  `;

  const [authorData] = await connection.execute(query, [id]);

  if (authorData.length === 0) return null;
  return authorData;
};

const createAuthor = async (firstName, middleName, lastName) => {
  const [author] = await connection.execute(
    'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
    [firstName, middleName, lastName],
  );
  return [getNewAuthor({ id: author.insertId, firstName, middleName, lastName })];
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};