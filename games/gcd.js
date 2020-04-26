/* eslint-disable no-console */
/* eslint-disable import/extensions */

import { greeting, gameEngine } from '../src/index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';
const creationGameQuestion = () => {
  const randomNumberOne = (1 + Math.floor(Math.random() * 10));
  const randomNumberTwo = (1 + Math.floor(Math.random() * 10));
  return (`${randomNumberOne} ${randomNumberTwo}`);
};
const creationCorrectAnswer = (question) => {
  const divisors = question.toString().split(' ');
  const divOne = divisors[0];
  const divTwo = divisors[1];
  const findMaxDivisor = (firstDiv, secondDiv) => {
    const numOne = firstDiv;
    const numTwo = secondDiv;
    while (numOne !== numTwo) {
      if (numTwo === 0) {
        return Math.abs(numOne);
      }
      return findMaxDivisor(numTwo, numOne % numTwo);
    }
    return numOne;
  };
  return findMaxDivisor(divOne, divTwo);
};

const startGcdGame = () => {
  greeting();
  gameEngine(creationGameQuestion, creationCorrectAnswer, gameRule);
};

export default startGcdGame;
