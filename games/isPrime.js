/* eslint-disable no-console */
/* eslint-disable import/extensions */

import { greeting, gameEngine } from '../src/index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const gameQuestion = () => Math.floor(Math.random() * 20);
const correctAnswer = (question) => {
  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const isPrime = () => {
  greeting();
  gameEngine(gameQuestion, correctAnswer, gameRule);
};

export default isPrime;
