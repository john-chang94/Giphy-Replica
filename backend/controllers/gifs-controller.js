const axios = require('axios');

const getTrending = (req, res) => {
    axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=30`)
        .then((response) => {
            res.json({ data: response.data.data })
        })
}

const getSearch = (req, res) => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${req.query.name}&api_key=${process.env.API_KEY}`)
    .then((response) => {
        res.json({ data: response.data.data })
    })
}

module.exports = {
    getTrending,
    getSearch
}