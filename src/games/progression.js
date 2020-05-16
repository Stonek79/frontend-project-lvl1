import gameEngine from '../index.js';
import randomNumberGenerator from '../randomGenerator.js';

const gameRule = 'What number is missing in the progression?';

const lengthOfProgression = 10;
const getQuestion = (firstElement, step, indexToHideElement) => {
  const progression = [];
  for (let i = 0; i < lengthOfProgression; i += 1) {
    const progressionElement = firstElement + step * i;
    if (i === indexToHideElement) {
      progression.push('..');
    } else {
      progression.push(progressionElement);
    }
  }
  return progression.join(' ');
};

const getGameData = () => {
  const firstProgressionNum = randomNumberGenerator(1, 5);
  const stepInProgression = randomNumberGenerator(1, 5);
  const indexOfHiddenElement = randomNumberGenerator(1, lengthOfProgression - 1);
  const progressionLine = getQuestion(firstProgressionNum, stepInProgression, indexOfHiddenElement);
  const correctAnswer = (firstProgressionNum + stepInProgression * indexOfHiddenElement).toString();
  return { question: progressionLine, answer: correctAnswer };
};

const startProgressionGame = () => {
  gameEngine(getGameData, gameRule);
};
export default startProgressionGame;
