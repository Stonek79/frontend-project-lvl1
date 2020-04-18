/* eslint-disable no-console */
/* eslint-disable import/extensions */

import readlineSync, { user, greeting } from './index.js';

greeting();
const gameUser = user;
const isEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    const userAnswer = readlineSync.question(`Question: ${randomNumber} `);
    const even = randomNumber % 2 === 0;
    console.log(`Your answer: ${userAnswer} `);
    if ((userAnswer === 'yes' && even) || (userAnswer === 'no' && !even)) {
      console.log('Correct!');
    } else {
      return console.log(`"yes" is wrong answer ;(. Correct answer was "no". \n
      Let's try again, ${gameUser}!`);
    }
  }
  return console.log(`Congratulations, ${gameUser}!`);
};
export default isEven;
