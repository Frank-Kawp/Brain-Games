import { playDefaulGame, makeRandomNum } from '..';

const description = 'What is the result of the expression?';

const genQuestion = (counter) => {
  const signsGroup = '+-*';
  const sign = signsGroup[counter];
  const quessNum1 = makeRandomNum();
  const quessNum2 = makeRandomNum();
  const question = `${quessNum1} ${sign} ${quessNum2}`;
  return question;
};


const genAnswer = (question) => {
  const args = question.split(' ');
  const a = Number(args[0]);
  const b = Number(args[2]);
  const sign = args[1];

  if (sign === '+') return a + b;
  if (sign === '-') return a - b;
  return a * b;
};


const startCalcGame = () => {
  playDefaulGame(description, genQuestion, genAnswer);
};

export default startCalcGame;
