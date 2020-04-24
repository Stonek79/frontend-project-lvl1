/* eslint-disable no-console */
/* eslint-disable import/no-mutable-exports */

import readlineSync from 'readline-sync';

let userName;
export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export const gameEngine = (gameQuestion, correctAnswer, gameRule) => {
  console.log(gameRule);
  for (let i = 0; i < 3; i += 1) {
    const answer = gameQuestion();
    const userAnswer = readlineSync.question(`Question: ${answer} `);
    console.log(`Your answer: ${userAnswer} `);
    const rightAnswer = correctAnswer(answer);
    if (userAnswer !== `${rightAnswer}`) {
      return console.log(`"${userAnswer}" is wrong answer ;(.
        Correct answer was "${rightAnswer}". \n Let's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};
