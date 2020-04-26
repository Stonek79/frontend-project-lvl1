/* eslint-disable no-console */
/* eslint-disable import/extensions */

import { greeting, gameEngine } from '../src/index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no"';
const creationGameQuestion = () => Math.floor(Math.random() * 20);
const creationCorrectAnswer = (question) => ((question % 2 === 0) ? 'yes' : 'no');

const startIsEvenGame = () => {
  greeting();
  gameEngine(creationGameQuestion, creationCorrectAnswer, gameRule);
};

export default startIsEvenGame;
