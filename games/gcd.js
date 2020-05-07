
import gameEngine from '../src/index.js';
import randomGenerator from './randomGenerator.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const findMaxDivisor = (firstDiv, secondDiv) => {
  while (firstDiv !== secondDiv) {
    if (secondDiv === 0) {
      return Math.abs(firstDiv);
    }
    return findMaxDivisor(secondDiv, firstDiv % secondDiv);
  }
  return firstDiv;
};

const gameGenerator = () => {
  const randomNumberOne = randomGenerator(1, 20);
  const randomNumberTwo = randomGenerator(1, 20);
  const gameQuestion = (`${randomNumberOne} ${randomNumberTwo}`);
  const correctAnswer = findMaxDivisor(randomNumberOne, randomNumberTwo);
  return { question: gameQuestion, answer: correctAnswer };
};

const startGcdGame = () => {
  gameEngine(gameGenerator, gameRule);
};

export default startGcdGame;
