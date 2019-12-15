const request = require('request');

function parseJokes(error, response, body) {
  if (!error && response.statusCode == 200) {
    const data = JSON.parse(body);
    // console.log('Hey ->', data.results)
    return data.results; //en lugar de retornar los datos debería pasárselos a una callback con la lógica de ¿outoput?
  } else {
    throw error; //en lugar de enviar el error debería pasarle el error a la callback con la lógica de output
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

  request(options, parseJokes); //¿Es necesario el return? Sin él, funciona
}

//return getJokes(keyword)

module.exports = {
  getJokes
};
