const request = require('request');
const { printJokes, writeJoke } = require('./output');

function parseJokes(error, response, body) {
  if (!error && response.statusCode == 200) {
    const data = JSON.parse(body);
    printJokes(data.results);
    data.results.forEach(writeJoke);
  } else {
    throw error;
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
