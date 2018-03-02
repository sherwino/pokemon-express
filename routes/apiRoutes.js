const request = require('request');

module.exports = (app) => {
    app.post('/api/post', (req, res) => {
        let pokemonName = req.body.pokemonName;

        pokemonName = pokemonName.toLowerCase();
        console.log(pokemonName);
        let options = {
            method: "GET",
            url: `https://api.pokemontcg.io/v1/cards?name=${pokemonName}`
        };
        request(options, (error, response, body) => {
            if (error) {
                console.log(error);
            } else {
            let info = (JSON.parse(body));
            }
        });
    })
}