import { playDefaulGame, makeRandomNum } from '..';

const description = 'Find the greatest common divisor of given numbers.';

const genQuestion = () => {
  const number1 = makeRandomNum();
  const number2 = makeRandomNum();
  return `${number1} ${number2}`;
};

const gcd = (number1, number2) => {
  let a = number1;
  let b = number2;

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const genAnswer = (question) => {
  const args = question.split(' ');
  const number1 = Number(args[0]);
  const number2 = Number(args[1]);

  return gcd(number1, number2);
};


const startGCDGame = () => {
  playDefaulGame(description, genQuestion, genAnswer);
};

export default startGCDGame;
