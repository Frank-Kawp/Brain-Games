import { playDefaultGame, makeRandomNum } from '..';

const maxNumber = 40;
const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (a === 0) return b;
  return gcd(b % a, a);
};


const genQuestAndAswPair = () => {
  const num1 = makeRandomNum(maxNumber);
  const num2 = makeRandomNum(maxNumber);
  const question = `${num1} ${num2}`;

  const args = question.split(' ');
  const arg1 = Number(args[0]);
  const arg2 = Number(args[1]);
  const answer = gcd(arg1, arg2);

  const pair = (message) => {
    if (message === 'question') return question;
    if (message === 'answer') return String(answer);
    return message;
  };
  return pair;
};


const startGCDGame = () => {
  playDefaultGame(description, genQuestAndAswPair);
};

export default startGCDGame;
