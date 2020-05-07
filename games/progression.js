
import gameEngine from '../src/index.js';
import randomGenerator from './randomGenerator.js';

const gameRule = 'What number is missing in the progression?';

const lengthOfProgression = 10;
const progression = (firstElem, step, hiddenElem) => {
  let result = firstElem;
  for (let i = 1; i < lengthOfProgression; i += 1) {
    const sum = firstElem + step * i;
    if (i === hiddenElem) {
      result += ` ${'..'}`;
    } else {
      result += ` ${sum}`;
    }
  }
  return result;
};

const gameGenerator = () => {
  const firstProgressionNum = randomGenerator(1, 5);
  const stepOfProgression = randomGenerator(1, 5);
  const numberOfHiddenElem = randomGenerator(1, 10);
  const progressionLine = progression(firstProgressionNum, stepOfProgression, numberOfHiddenElem);
  const correctAnswer = firstProgressionNum + stepOfProgression * numberOfHiddenElem;
  return { question: progressionLine, answer: correctAnswer };
};

const startProgressionGame = () => {
  gameEngine(gameGenerator, gameRule);
};
export default startProgressionGame;
