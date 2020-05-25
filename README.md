# Node Jokes

Node Jokes is a CLI app that receives a word as an input and uses it for search a joke in the [dad joke API](https://icanhazdadjoke.com/api). The app shows the found jokes and write them in a text file. If the user enters the word `leaderboard`, the app returns the joke that most times was included in the searchs results.

## Technologies

Node-jokes is written in JavaScript, uses Node and the modules [`request`](https://www.npmjs.com/package/request), `fs`, [`prompt`](https://www.npmjs.com/package/prompt) and [`chalk`](https://www.npmjs.com/package/chalk).

## How to use it

You need Node installed. Then:

1. Clone de repo

`git clone https://github.com/livchits/node-jokes.git`

2. Get into the directory and install dependencies

`cd node-jokes`
`npm i`

3. Run the app with

`npm run start`
