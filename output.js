const chalk = require('chalk');
const { appendFile } = require('fs');

function printInGreen(jokeObject) {
  console.log(chalk.green(`"${jokeObject.joke}"`));
}

function printJokes(jokesArray) {
  !jokesArray.length
    ? console.log(chalk.red('Acá no hacemos chistes con esas cosas.'))
    : jokesArray.forEach(printInGreen);
}

function writeJoke(jokeObject) {
  const jokeText = jokeObject.joke + '\n\n';
  appendFile('jokes.txt', jokeText, err => {
    if (err) {
      throw err;
    }
  });
}

module.exports = {
  printJokes,
  writeJoke
};
