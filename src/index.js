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


const checkGameRes = (userAnswer, correctAnswer) => {
  if (typeof userAnswer === 'number') {
    return Number(userAnswer) === correctAnswer;
  } if (typeof correctAnswer === 'string' && typeof userAnswer === 'number') {
    return String(userAnswer) === correctAnswer;
  } if (typeof correctAnswer === 'string' && typeof userAnswer === 'string') {
    return userAnswer.toLowerCase() === correctAnswer;
  }
  return userAnswer === correctAnswer;
};

const showGameDescription = (description) => {
  console.log('Welcome to Brain Games!');
  console.log(description);
  console.log(' ');
};


export const makeRandomNum = max => Math.floor(Math.random() * Math.floor(max));


export const sayDefaultHello = () => {
  console.log('Welcome to Brain Games!');
  console.log(' ');
  askUserName();
};

export const playDefaultGame = (descriotion, getQuestionAnswerPair) => {
  showGameDescription(descriotion);
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
};
