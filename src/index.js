import readLineSync from 'readline-sync';

import { showMenu } from './showmenu';

const askUserInput = (question) => {
  console.log(`Question: ${question}`);
  const userAnswer = readLineSync.question('Your answer: ');
  return userAnswer;
};


const askUserName = () => {
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(' ');
  return userName;
};


const showGameDescription = (description) => {
  console.log('Welcome to Brain Games!');
  console.log(description);
  console.log(' ');
};

const getQuestion = pair => pair('question');
const getAnswer = pair => pair('answer');

const checkGameRes = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

export const makeRandomNum = max => Math.floor(Math.random() * Math.floor(max));


export const sayDefaultHello = () => {
  console.log('Welcome to Brain Games!');
  console.log(' ');
  askUserName();
};


export const playDefaultGame = (description, getQuestionAnswerPair) => {
  showGameDescription(description);
  const userName = askUserName();
  let counter = 0;

  while (counter !== 3) {
    const pair = getQuestionAnswerPair();
    const userAnswer = askUserInput(getQuestion(pair));

    if (checkGameRes(userAnswer, getAnswer(pair))) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${getAnswer(pair)}`);
      console.log(`Let's try again, ${userName}`);
    }
  }
  console.log(`Congratulations, ${userName}!`);
  showMenu();
};
