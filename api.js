const request = require('request');
const { printJokes, writeJokes } = require('./output');

function parseJokes(error, response, body) {
  if (!error && response.statusCode == 200) {
    const data = JSON.parse(body);
    printJokes(data.results);
    data.results.forEach(writeJoke);
  } else {
    throw error; //en lugar de enviar el error debería pasarle el error a la callback con la lógica de output.
  }
}

function getJokes(err, keyword) {
  if (err) {
    throw err;
  }

  const options = {
    url: `https://icanhazdadjoke.com/search?term=${keyword}`,
    headers: {
      Accept: 'application/json'
    }
  };

  request(options, parseJokes);
}

module.exports = {
  getJokes
};
