function countJokes(jokesArray) {
  return jokesArray.reduce((acc, joke) => {
    !acc[joke] ? (acc[joke] = 1) : acc[joke]++;
    return acc;
  }, {});
}
