/* eslint-disable no-console */
/* eslint-disable import/extensions */

import { greeting, gameEngine } from '../src/index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const creationGameQuestion = () => Math.floor(Math.random() * 20);
const creationCorrectAnswer = (question) => {
  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const startIsPrimeGame = () => {
  greeting();
  gameEngine(creationGameQuestion, creationCorrectAnswer, gameRule);
};

export default startIsPrimeGame;
