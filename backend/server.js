const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').load();

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
app.use(cors())

const gif = require('./routes/gif');

app.use('/gifs', gif);

module.exports = app;