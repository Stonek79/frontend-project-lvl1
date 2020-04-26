/* eslint-disable no-console */
/* eslint-disable import/extensions */

import { greeting, gameEngine } from '../src/index.js';

const gameRule = 'What number is missing in the progression?';
const creationGameQuestion = () => {
  const progressionLine = [2, 4, 6, 10, 16, 26, 42, 68, 110, 178];
  const selectElem = Math.floor(Math.random() * progressionLine.length);
  progressionLine.splice(selectElem, 1, '..');
  return progressionLine.join(' ');
};
const creationCorrectAnswer = (question) => {
  const progressionLine = [2, 4, 6, 10, 16, 26, 42, 68, 110, 178];
  const arrFromQuestion = question.split(' ');
  return progressionLine[arrFromQuestion.indexOf('..')];
};

const startProgressionGame = () => {
  greeting();
  gameEngine(creationGameQuestion, creationCorrectAnswer, gameRule);
};
export default startProgressionGame;
