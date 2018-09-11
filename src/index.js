import readLineSync from 'readline-sync';

export const aboutGameScreen = () => console.log('Welcome to the Brain Games!');

export const sayHiToNewUser = () => {
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(' ');
  return userName;
};

export const showGameDescription = (description) => {
  console.log(description);
  console.log(' ');
};

export const askUserInput = (question) => {
  console.log(`Question: ${question}`);
  const userAnswer = readLineSync.question('Your answer: ');
  return userAnswer;
};

export const makeRandomNum = () => Math.floor(100 * Math.random() * 4);

export const checkUserAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

export const sayCorrectToUser = () => {
  console.log('Correct!');
};

export const sayWrongToUser = (userAnswer, correctAnswer, userName) => {
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
  console.log(`Let's try again, ${userName}`);
};

export const congratulateUser = (userName) => {
  console.log(`Congratulations, ${userName}`);
};
