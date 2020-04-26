/* eslint-disable no-console */
/* eslint-disable import/extensions */

import { greeting, gameEngine } from '../src/index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';
const gameQuestion = () => {
  const randomNumberOne = (1 + Math.floor(Math.random() * 10));
  const randomNumberTwo = (1 + Math.floor(Math.random() * 10));
  return (`${randomNumberOne} ${randomNumberTwo}`);
};
const correctAnswer = (question) => {
  const item = question.toString().split(' ');
  const divOne = item[0];
  const divTwo = item[1];
  const maxDivisor = (firstDiv, secondDiv) => {
    const numOne = firstDiv;
    const numTwo = secondDiv;
    while (numOne !== numTwo) {
      if (numTwo === 0) {
        return Math.abs(numOne);
      }
      return maxDivisor(numTwo, numOne % numTwo);
    }
    return numOne;
  };
  return maxDivisor(divOne, divTwo);
};

const gcd = () => {
  greeting();
  gameEngine(gameQuestion, correctAnswer, gameRule);
};

export default gcd;
