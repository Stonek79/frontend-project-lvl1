import gameEngine from '../index.js';
import randomNumberGenerator from '../randomGenerator.js';

const gameRule = 'What is the result of the expression?';

const operators = ['+', '-', '*'];
const getAnswer = (numOne, numTwo, operator) => {
  switch (operator) {
    case '+':
      return (numOne + numTwo).toString();
    case '-':
      return (numOne - numTwo).toString();
    case '*':
      return (numOne * numTwo).toString();
    default:
      return null;
  }
};

const getGameData = () => {
  const randomOperator = operators[randomNumberGenerator(0, operators.length - 1)];
  const randomNumberOne = randomNumberGenerator(0, 10);
  const randomNumberTwo = randomNumberGenerator(0, 10);
  const gameQuestion = (`${randomNumberOne} ${randomOperator} ${randomNumberTwo}`);
  const correctAnswer = getAnswer(randomNumberOne, randomNumberTwo, randomOperator);
  return { question: gameQuestion, answer: correctAnswer };
};

const startCalcGame = () => {
  gameEngine(getGameData, gameRule);
};
export default startCalcGame;
