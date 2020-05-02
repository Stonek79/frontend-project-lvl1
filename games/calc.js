/* eslint-disable no-console */
/* eslint-disable import/extensions */

import gameEngine from '../src/index.js';
import randomGenerator from './randomGenerator.js';

const gameRule = 'What is the result of the expression?';
const gameGenerator = () => {
  const arrOperand = ['+', '-', '*'];
  const randomOperand = arrOperand[randomGenerator(arrOperand.length)];
  const randomNumberOne = randomGenerator(10);
  const randomNumberTwo = randomGenerator(10);
  const gameQuestion = (`${randomNumberOne} ${randomOperand} ${randomNumberTwo}`);
  const expression = (operand) => {
    switch (operand) {
      case '+':
        return randomNumberOne + randomNumberTwo;
      case '-':
        return randomNumberOne - randomNumberTwo;
      default:
        return randomNumberOne * randomNumberTwo;
    }
  };
  const correctAnswer = expression(randomOperand);
  return { question: gameQuestion, answer: correctAnswer };
};

const startCalcGame = () => {
  gameEngine(gameGenerator, gameRule);
};
export default startCalcGame;
