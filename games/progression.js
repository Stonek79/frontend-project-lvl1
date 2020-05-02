/* eslint-disable no-console */
/* eslint-disable import/extensions */

import gameEngine from '../src/index.js';
import randomGenerator from './randomGenerator.js';

const gameRule = 'What number is missing in the progression?';
const gameGenerator = () => {
  let correctAnswer;
  const firstProgressionNumber = randomGenerator(5) + 1;
  const stepOfProgression = randomGenerator(5) + 1;
  const numberOfHiddenElem = randomGenerator(9) + 1;
  let progression = firstProgressionNumber;
  for (let i = 1; i < 10; i += 1) {
    const sum = firstProgressionNumber + stepOfProgression * i;
    if (i === numberOfHiddenElem) {
      progression += ` ${'..'}`;
      correctAnswer = sum;
    } else {
      progression += ` ${sum}`;
    }
  }
  return { question: progression, answer: correctAnswer };
};

const startProgressionGame = () => {
  gameEngine(gameGenerator, gameRule);
};
export default startProgressionGame;
