import { playDefaultGame, makeRandomNum } from '..';

const description = 'Find the greatest common divisor of given numbers.';

const genQuestion = () => {
  const num1 = makeRandomNum();
  const num2 = makeRandomNum();
  return `${num1} ${num2}`;
};

const gcd = (a, b) => {
  if (a === 0) return b;
  return gcd(b % a, a);
};

const genAnswer = (question) => {
  const args = question.split(' ');
  const num1 = Number(args[0]);
  const num2 = Number(args[1]);

  return gcd(num1, num2);
};


const startGCDGame = (userName, whoStartTheGame) => {
  playDefaultGame(userName, description, genQuestion, genAnswer, whoStartTheGame);
};

export default startGCDGame;
