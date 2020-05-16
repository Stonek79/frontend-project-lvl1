import gameEngine from '../index.js';
import randomNumberGenerator from '../randomGenerator.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  if (number < 2) { return false; }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const gameQuestion = randomNumberGenerator(0, 20);
  const correctAnswer = (isPrime(gameQuestion)) ? 'yes' : 'no';
  return { question: gameQuestion, answer: correctAnswer };
};

const startIsPrimeGame = () => {
  gameEngine(getGameData, gameRule);
};

export default startIsPrimeGame;
