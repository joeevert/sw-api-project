const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    let random = Math.floor((Math.random() * 88) + 1);
    console.log('random', random);
    axios.get(`https://swapi.co/api/people/${random}`)
    .then((response) => {
        res.send(response.data)
        console.log('response.data', response.data);
    })
    .catch((error) => {
        res.sendStatus(500);
        console.log('error getting search results', error);
    })
})

module.exports = router;