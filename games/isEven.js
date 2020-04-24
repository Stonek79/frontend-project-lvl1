/* eslint-disable no-console */
/* eslint-disable import/extensions */

import { greeting, gameEngine } from '../src/index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no"';
const gameQuestion = () => Math.floor(Math.random() * 20);
const correctAnswer = (question) => ((question % 2 === 0) ? 'yes' : 'no');

const isEven = () => {
  greeting();
  for (let i = 0; i < 3; i += 1) {
    gameEngine(gameRule, gameQuestion, correctAnswer);
  }
};

export default isEven;
