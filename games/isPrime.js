
import gameEngine from '../src/index.js';
import randomGenerator from './randomGenerator.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isAnswerPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return !(number < 2);
};

const gameGenerator = () => {
  const gameQuestion = randomGenerator(0, 20);
  const correctAnswer = ((isAnswerPrime(gameQuestion)) ? 'yes' : 'no');
  return { question: gameQuestion, answer: correctAnswer };
};

const startIsPrimeGame = () => {
  gameEngine(gameGenerator, gameRule);
};

export default startIsPrimeGame;
