const chalk = require('chalk');

function printJokes(error, jokesArray) {
  if (error) {
    throw error;
  }
  if (jokesArray.length === 0) {
    console.log(chalk.red('Acá no hacemos chistes con esas cosas.'));
  } else {
    jokesArray.forEach(jokeObject => console.log(chalk.green(`"${jokeObject.joke}"`)));
  }
}
