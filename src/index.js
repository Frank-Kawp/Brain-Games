import readLineSync from 'readline-sync';

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

const getQuestion = pair => pair('question');
const getAnswer = pair => pair('answer');


const isNumber = num => typeof num === 'number';
const isString = str => typeof str === 'string';


const checkGameRes = (userAnswer, correctAnswer) => {
  if (isNumber(userAnswer)) {
    return Number(userAnswer) === correctAnswer;
  } if (isString(correctAnswer) && isNumber(userAnswer)) {
    return String(userAnswer) === correctAnswer;
  } if (isString(correctAnswer) && isString(userAnswer)) {
    return userAnswer.toLowerCase() === correctAnswer;
  }
  return userAnswer === correctAnswer;
};


export const makeRandomNum = max => Math.floor(Math.random() * Math.floor(max));


export const sayDefaultHello = () => {
  console.log('Welcome to Brain Games!');
  console.log(' ');
  askUserName();
};

export const playDefaultGame = (genPair) => {
  const userName = askUserName();
  let counter = 0;

  while (counter !== 3) {
    const pair = genPair();
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
};
