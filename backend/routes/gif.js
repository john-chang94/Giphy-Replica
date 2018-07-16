const express = require('express');
const router = express.Router();

const gifsController = require('./../controllers/gifs-controller');

router.get('/trending', gifsController.getTrending);
router.get('/search', gifsController.getSearch);

module.exports = router;