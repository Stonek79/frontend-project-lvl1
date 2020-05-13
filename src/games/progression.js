
import gameEngine from '../index.js';
import randomNumberGenerator from '../randomGenerator.js';

const gameRule = 'What number is missing in the progression?';

const lengthOfProgression = 10;
const getProgression = (firstElem, step, hiddenElem) => {
  let result = firstElem;
  for (let i = 1; i < lengthOfProgression; i += 1) {
    const sum = firstElem + step * i;
    if (i === hiddenElem) {
      result = `${result} ${'..'}`;
    } else {
      result = `${result} ${sum}`;
    }
  }
  return result;
};

const getDatasForGame = () => {
  const firstProgressionNum = randomNumberGenerator(1, 5);
  const stepOfProgression = randomNumberGenerator(1, 5);
  const numOfHiddenElem = randomNumberGenerator(1, lengthOfProgression);
  const progressionLine = getProgression(firstProgressionNum, stepOfProgression, numOfHiddenElem);
  const correctAnswer = firstProgressionNum + stepOfProgression * numOfHiddenElem;
  return { question: progressionLine, answer: correctAnswer };
};

const startProgressionGame = () => {
  gameEngine(getDatasForGame, gameRule);
};
export default startProgressionGame;
