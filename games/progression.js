/* eslint-disable no-console */
/* eslint-disable import/extensions */

import { greeting, gameEngine } from '../src/index.js';

const gameRule = 'What number is missing in the progression?';
const gameQuestion = () => {
  const progressionLine = [2, 4, 6, 10, 16, 26, 42, 68, 110, 178];
  const chouseElem = Math.floor(Math.random() * progressionLine.length);
  progressionLine.splice(chouseElem, 1, '..');
  return progressionLine.join(' ');
};
const correctAnswer = (question) => {
  const progressionLine = [2, 4, 6, 10, 16, 26, 42, 68, 110, 178];
  const arrFromQuestion = question.split(' ');
  return progressionLine[arrFromQuestion.indexOf('..')];
};

const progression = () => {
  greeting();
  gameEngine(gameQuestion, correctAnswer, gameRule);
};
export default progression;
