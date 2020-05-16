import gameEngine from '../index.js';
import randomNumberGenerator from '../randomGenerator.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (firstDiv, secondDiv) => {
  while (firstDiv !== secondDiv) {
    if (secondDiv === 0) {
      return (Math.abs(firstDiv)).toString();
    }
    return getGreatestCommonDivisor(secondDiv, firstDiv % secondDiv);
  }
  return firstDiv.toString();
};

const getGameData = () => {
  const randomNumberOne = randomNumberGenerator(1, 20);
  const randomNumberTwo = randomNumberGenerator(1, 20);
  const gameQuestion = (`${randomNumberOne} ${randomNumberTwo}`);
  const correctAnswer = getGreatestCommonDivisor(randomNumberOne, randomNumberTwo);
  return { question: gameQuestion, answer: correctAnswer };
};

const startGcdGame = () => {
  gameEngine(getGameData, gameRule);
};

export default startGcdGame;
