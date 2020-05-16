import readlineSync from 'readline-sync';

const gameEngine = (takeGameDatas, gameRule) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRule);
  const numberOfQuestions = 3;
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const { question: gameQuestion, answer: correctAnswer } = takeGameDatas();
    const userAnswer = readlineSync.question(`Question: ${gameQuestion} `);
    console.log(`Your answer: ${userAnswer} `);
    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
