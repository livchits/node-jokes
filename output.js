const chalk = require('chalk');
const { appendFile, readFile } = require('fs');
const { getMostPopularJoke } = require('./leaderboard');

function printInGreen(jokeObject) {
  console.log(chalk.green(`"${jokeObject.joke}"`));
}

function printJokes(jokesArray) {
  !jokesArray.length
    ? console.log(chalk.red("We don't make jokes about that 🤐"))
    : jokesArray.forEach(printInGreen);
}

function writeJoke(jokeObject) {
  const jokeText = jokeObject.joke + '\n\n';
  appendFile('jokes.txt', jokeText, (err) => {
    if (err) {
      throw err;
    }
  });
}

function printMostPopularJoke() {
  readFile('jokes.txt', (err, data) => {
    if (err) throw err;

    const jokesArray = data.toString().split('\n\n');
    const mostPopularJoke = getMostPopularJoke(jokesArray);
    console.log(`"${mostPopularJoke}"
${chalk.rgb(0, 47, 255).bold('#ElMásPopular')}`);
  });
}

module.exports = {
  printJokes,
  writeJoke,
  printMostPopularJoke,
};
