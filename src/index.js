import readLineSync from 'readline-sync';


const showGameDescription = (description) => {
  console.log('Welcome to the Brain Games!');
  if (typeof description !== 'undefined') {
    console.log(description);
  }
  console.log(' ');
};


const checkGameRes = (userAnswer, correctAnswer) => {
  if (typeof correctAnswer === 'number') {
    return Number(userAnswer) === correctAnswer;
  }
  return userAnswer === correctAnswer;
};


export const sayHelloToNewUser = () => {
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(' ');
  return userName;
};


export const askUserInput = (question) => {
  console.log(`Question: ${question}`);
  const userAnswer = readLineSync.question('Your answer: ');
  return userAnswer;
};


export const makeRandomNum = () => {
  const result = Math.floor(40 * Math.random() * 2);
  return result > 2 ? result : makeRandomNum();
};


export const playDefaulGame = (description, genQuestionFunc, genAnswerFunc) => {
  showGameDescription(description);
  const userName = sayHelloToNewUser();

  let counter = 0;

  while (counter !== 3) {
    const question = genQuestionFunc(counter);
    const correctAnswer = genAnswerFunc(question);
    const userAnswer = askUserInput(question);

    if (checkGameRes(userAnswer, correctAnswer)) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${userName}`);
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
