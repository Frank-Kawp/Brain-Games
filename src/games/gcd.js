import { playDefaultGame, makeRandomNum } from '..';

const maxNumber = 40;

const gcd = (a, b) => {
  if (a === 0) return b;
  return gcd(b % a, a);
};

const genQuestAndAswArray = () => {
  const num1 = makeRandomNum(maxNumber);
  const num2 = makeRandomNum(maxNumber);
  const question = `${num1} ${num2}`;

  const args = question.split(' ');
  const arg1 = Number(args[0]);
  const arg2 = Number(args[1]);
  const answer = gcd(arg1, arg2);

  return [question, answer];
};


const genPair = () => {
  const arr = genQuestAndAswArray();
  const pair = (message) => {
    if (message === 'question') return arr[0];
    if (message === 'answer') return arr[1];
    return message;
  };
  return pair;
};


const startGCDGame = () => {
  console.log('Welcome to Brain Games!');
  console.log('Find the greatest common divisor of given numbers.');
  console.log(' ');
  playDefaultGame(genPair);
};

export default startGCDGame;
