const express = require('express');
const Author = require('../controllers/Authors');

const router = express.Router();

router.get('/', Author.getAll);

router.get('/:id', Author.findById);

router.post('/', Author.createAuthor);

module.exports = router;