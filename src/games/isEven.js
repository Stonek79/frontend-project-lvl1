
import gameEngine from '../index.js';
import randomNumberGenerator from '../randomGenerator.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

const getDatasForGame = () => {
  const gameQuestion = randomNumberGenerator(0, 20);
  const correctAnswer = ((isEven(gameQuestion)) ? 'yes' : 'no');
  return { question: gameQuestion, answer: correctAnswer };
};

const startIsEvenGame = () => {
  gameEngine(getDatasForGame, gameRule);
};

export default startIsEvenGame;
