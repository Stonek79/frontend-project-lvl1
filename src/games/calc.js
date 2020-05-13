
import gameEngine from '../index.js';
import randomNumberGenerator from '../randomGenerator.js';

const gameRule = 'What is the result of the expression?';

const operands = ['+', '-', '*'];
const getAnswer = (numOne, numTwo, operand) => {
  switch (operand) {
    case '+':
      return numOne + numTwo;
    case '-':
      return numOne - numTwo;
    case '*':
      return numOne * numTwo;
    default:
      return console.log('Wrong operand!');
  }
};

const getDatasForGame = () => {
  const randomOperand = operands[randomNumberGenerator(0, operands.length - 1)];
  const randomNumberOne = randomNumberGenerator(0, 10);
  const randomNumberTwo = randomNumberGenerator(0, 10);
  const gameQuestion = (`${randomNumberOne} ${randomOperand} ${randomNumberTwo}`);
  const correctAnswer = getAnswer(randomNumberOne, randomNumberTwo, randomOperand);
  return { question: gameQuestion, answer: correctAnswer };
};

const startCalcGame = () => {
  gameEngine(getDatasForGame, gameRule);
};
export default startCalcGame;
