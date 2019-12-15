const { getKeyword } = require('./input');
const { getJokes } = require('./api');

getKeyword(getJokes);
