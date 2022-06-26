const Author = require('../models/Author');

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName: fullName,
  };
};

const serialize = (authorData) => authorData.map((item) => getNewAuthor({
  id: item.id,
  firstName: item.first_name,
  middleName: item.middle_name,
  lastName: item.last_name,
  fullName: item.fullName,
  }));


const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

const getAll = async () => {
  const authors = await Author.getAll();

  return serialize(authors);
};

const findById = async (id) => {
  const author = await Author.findById(id);

  return serialize(author)[0];
};

const createAuthor = async (firstName, middleName, lastName) => {
  const validAuthor = isValid(firstName, middleName, lastName);

  if (!validAuthor) return false;

  const [author] = await Author.createAuthor(firstName, middleName, lastName);

  return getNewAuthor({
    id: author.id,
    firstName,
    middleName,
    lastName,
  });

};


module.exports = {
  serialize,
  getAll,
  findById,
  createAuthor,
};