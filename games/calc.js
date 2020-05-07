
import gameEngine from '../src/index.js';
import randomGenerator from './randomGenerator.js';

const gameRule = 'What is the result of the expression?';

const arrOperand = ['+', '-', '*'];
const expression = (numOne, numTwo, operand) => {
  switch (operand) {
    case '+':
      return numOne + numTwo;
    case '-':
      return numOne - numTwo;
    default:
      return numOne * numTwo;
  }
};

const gameGenerator = () => {
  const randomOperand = arrOperand[randomGenerator(0, arrOperand.length - 1)];
  const randomNumberOne = randomGenerator(0, 10);
  const randomNumberTwo = randomGenerator(0, 10);
  const gameQuestion = (`${randomNumberOne} ${randomOperand} ${randomNumberTwo}`);
  const correctAnswer = expression(randomNumberOne, randomNumberTwo, randomOperand);
  return { question: gameQuestion, answer: correctAnswer };
};

const startCalcGame = () => {
  gameEngine(gameGenerator, gameRule);
};
export default startCalcGame;
