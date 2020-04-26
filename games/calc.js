/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable no-eval */

import { greeting, gameEngine } from '../src/index.js';

const gameRule = 'What is the result of the expression?';
const creationGameQuestion = () => {
  const arrOperand = ['+', '-', '*'];
  const randomOperand = arrOperand[Math.floor(Math.random() * arrOperand.length)];
  const randomNumberOne = Math.floor(Math.random() * 10);
  const randomNumberTwo = Math.floor(Math.random() * 10);
  return (`${randomNumberOne} ${randomOperand} ${randomNumberTwo}`);
};
const creationCorrectAnswer = (question) => eval(question);

const startCalcGame = () => {
  greeting();
  gameEngine(creationGameQuestion, creationCorrectAnswer, gameRule);
};
export default startCalcGame;
