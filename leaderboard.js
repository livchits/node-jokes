function countJokes(jokesArray) {
  const countedJokesObject = jokesArray.reduce((acc, joke) => {
    !acc[joke] ? (acc[joke] = 1) : acc[joke]++;
    return acc;
  }, {});

  const countedJokes = Object.entries(countedJokesObject);

  return countedJokes;
}

function getMostPopularJoke(countedJokesArray) {
  const sortedJokes = sortJokes(countedJokesArray);
  const mostPopularJoke = sortedJokes[0][0];
  return mostPopularJoke;
}
