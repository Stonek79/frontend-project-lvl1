/* eslint-disable no-console */
/* eslint-disable import/extensions */

import gameEngine from '../src/index.js';
import randomGenerator from './randomGenerator.js';

const gameRule = 'Find the greatest common divisor of given numbers.';
const gameGenerator = () => {
  const randomNumberOne = randomGenerator(20) + 1;
  const randomNumberTwo = randomGenerator(20) + 1;
  const gameQuestion = (`${randomNumberOne} ${randomNumberTwo}`);
  const findMaxDivisor = (firstDiv, secondDiv) => {
    while (firstDiv !== secondDiv) {
      if (secondDiv === 0) {
        return Math.abs(firstDiv);
      }
      return findMaxDivisor(secondDiv, firstDiv % secondDiv);
    }
    return firstDiv;
  };
  const correctAnswer = findMaxDivisor(randomNumberOne, randomNumberTwo);
  return { question: gameQuestion, answer: correctAnswer };
};

const startGcdGame = () => {
  gameEngine(gameGenerator, gameRule);
};

export default startGcdGame;
