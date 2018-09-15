import { playDefaultGame, makeRandomNum } from '..';

const maxSignNumber = 3;
const maxNumber = 80;


const genQuestAndAswArray = () => {
  const quessNum1 = makeRandomNum(maxNumber);
  const quessNum2 = makeRandomNum(maxNumber);
  const signNum = makeRandomNum(maxSignNumber);
  const sign = '+-*'[signNum];

  const question = `${quessNum1} ${sign} ${quessNum2}`;

  let answer = quessNum1 + quessNum2;
  if (signNum === 1) answer = quessNum1 - quessNum2;
  if (signNum === 2) answer = quessNum1 * quessNum2;

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


const startCalcGame = () => {
  console.log('Welcome to Brain Games!');
  console.log('What is the result of the expression?');
  console.log(' ');
  playDefaultGame(genPair);
};

export default startCalcGame;
