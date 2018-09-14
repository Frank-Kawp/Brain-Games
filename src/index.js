import readLineSync from 'readline-sync';

import showMenu from './showmenu';

const showGameDescription = (description) => {
  if (typeof description !== 'undefined') {
    console.log(description);
  }
  console.log(' ');
  return true;
};


const askUserInput = (question) => {
  console.log(`Question: ${question}`);
  const userAnswer = readLineSync.question('Your answer: ');
  return userAnswer;
};


const checkGameRes = (userAnswer, correctAnswer) => {
  if (typeof correctAnswer === 'number') {
    return Number(userAnswer) === correctAnswer;
  }
  if (typeof correctAnswer === 'string' && typeof userAnswer === 'number') {
    return String(userAnswer) === correctAnswer;
  }
  if (typeof correctAnswer === 'string' && typeof userAnswer === 'string') {
    return userAnswer.toLowerCase() === correctAnswer;
  }
  return userAnswer === correctAnswer;
};


export const sayHelloToNewUser = () => {
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(' ');
  return userName;
};


export const makeRandomNum = () => Math.round(1 + Math.random() * (80 - 1));


export const genPair = (genQuestionFunc, genAnswerFunc, counter) => {
  const question = genQuestionFunc(counter);
  const answer = genAnswerFunc(question);

  const pair = (message) => {
    if (message === 'question') return question;
    if (message === 'answer') return answer;
    return message;
  };
  return pair;
};


const getQuestion = pair => pair('question');

const getAnswer = pair => pair('answer');


export const playDefaultGame = (userName, description, genQuest, genAnsw, menu) => {
  let showedDescription = false;

  if (typeof userName === 'undefined') {
    console.log('Welcome to Brain Games!');
    showedDescription = showGameDescription(description);
    userName = sayHelloToNewUser();
  }

  if (!showedDescription) showGameDescription(description);

  let counter = 0;

  while (counter !== 3) {
    const pair = genPair(genQuest, genAnsw, counter);
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
  console.log(' ');

  if (typeof menu === 'undefined') return -1;

  return showMenu(userName);
};
