const prompt = require('prompt');

const keywordSchema = {
  name: 'keyword',
  description: 'Enter a keyword',
  required: true,
  message: "Input mustn't be empty"
};

function getKeyword(callback) {
  prompt.start();

  prompt.get(keywordSchema, (err, result) => {
    if (err) {
      callback(err);
      //throw err;
    }

    console.log(`The keyword is: ${result.keyword}`);

    callback(null, result.keyword);
  });
}

//return getKeyword();

module.exports = {
  getKeyword
};
