const prompt = require('prompt');

const keywordSchema = {
  properties: {
    keyword: {
      message: 'Enter a keyword'
    }
  }
};

function getKeyword(callback) {
  prompt.start();

  prompt.get(keywordSchema, (err, result) => {
    if (err) {
      callback(err);
      throw err;
    }

    console.log(`The keyword is: ${result.keyword}`);

    callback(null, result.keyword);
  });
}

//return getKeyword();

module.exports = {
  getKeyword
};
