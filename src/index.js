/* eslint-disable no-console */
/* eslint-disable import/no-mutable-exports */

import readlineSync from 'readline-sync';

let user;

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  user = userName;
};
export { greeting, user };
export default readlineSync;
