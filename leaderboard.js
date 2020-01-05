function countJokes(jokesArray) {
  const countedJokesObject = jokesArray.reduce((acc, joke) => {
    !acc[joke] ? (acc[joke] = 1) : acc[joke]++;
    return acc;
  }, {});

  const countedJokes = Object.entries(countedJokesObject);

  return countedJokes;
}

function getMostPopularJoke(jokesArray) {
  const countedJokes = countJokes(jokesArray);
  const sortedJokes = sortJokes(countedJokes);
  const mostPopularJoke = sortedJokes[0][0];
  return mostPopularJoke;
}

function sortJokes(array) {
  return array.sort((a, b) => b[1] - a[1]);
}
