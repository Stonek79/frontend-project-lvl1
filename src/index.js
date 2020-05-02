/* eslint-disable no-console */
/* eslint-disable import/no-mutable-exports */

import readlineSync from 'readline-sync';

const gameEngine = (theGame, gameRule) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const numberOfRounds = 3;
  for (let j = 0; j < numberOfRounds; j += 1) {
    console.log(gameRule);
    for (let i = 0; i < 3; i += 1) {
      const gameDatas = theGame();
      const gameQuestion = gameDatas.question;
      const correctAnswer = gameDatas.answer;
      const userAnswer = readlineSync.question(`Question: ${gameQuestion} `);
      console.log(`Your answer: ${userAnswer} `);
      if (userAnswer !== `${correctAnswer}`) {
        console.log(`"${userAnswer}" is wrong answer ;(.
          Correct answer was "${correctAnswer}". \n Let's try again, ${userName}!`);
        break;
      }
      console.log('Correct!');
      if (i === 2) { console.log(`Congratulations, ${userName}!`); }
    }
  }
};
export default gameEngine;
