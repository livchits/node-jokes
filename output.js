const chalk = require('chalk');

function printInGreen(jokeObject) {
  console.log(chalk.green(`"${jokeObject.joke}"`));
}

function printJokes(jokesArray) {
  if (jokesArray.length === 0) {
    console.log(chalk.red('Acá no hacemos chistes con esas cosas.'));
  } else {
    jokesArray.forEach(printInGreen);
  }
}
