
import gameEngine from '../src/index.js';
import randomGenerator from './randomGenerator.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no"';

const isAnswerEven = (number) => number % 2 === 0;

const gameGenerator = () => {
  const gameQuestion = randomGenerator(0, 20);
  const correctAnswer = ((isAnswerEven(gameQuestion)) ? 'yes' : 'no');
  return { question: gameQuestion, answer: correctAnswer };
};

const startIsEvenGame = () => {
  gameEngine(gameGenerator, gameRule);
};

export default startIsEvenGame;
