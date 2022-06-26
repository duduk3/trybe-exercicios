const express = require('express');

const router = require('./Routers');
const Author = require('./controllers/Authors');

const app = express();

app.use(express.json());
app.use('/authors', router.authorRouter)

app.get('/', Author.getAll);

app.get('/:id', Author.findById);

app.post('/', Author.createAuthor);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});