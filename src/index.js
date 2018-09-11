import readLineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
let userName = '';


const sayHiToNewUser = () => {
  const userAnswer = readLineSync.question('May I have your name? ');
  userName = userAnswer;
  console.log(`Hello, ${userName}`);
  console.log(' ');
};

export const isEvenGame = () => {
  console.log('Answer "yes" if number even otherwise answer "no".');
  console.log(' ');

  sayHiToNewUser();
  let counter = 0;

  while (counter !== 3) {
    const quessNumber = Math.floor(100 * Math.random() * 4);
    const correctAnswer = (quessNumber % 2 === 0) ? 'yes' : 'no';

    console.log(`Question: ${quessNumber}`);
    const userAnswer = readLineSync.question('Your answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${userName}`);
    }
  }
  console.log(`Congratulations, ${userName}`);
};

export default sayHiToNewUser;
