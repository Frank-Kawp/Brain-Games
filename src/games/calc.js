import { playDefaultGame, makeRandomNum } from '..';

const maxSignNumber = 3;
const maxNumber = 80;
const description = 'What is the result of the expression?';

const genQuestAndAswPair = () => {
  const quessNum1 = makeRandomNum(maxNumber);
  const quessNum2 = makeRandomNum(maxNumber);
  const signNum = makeRandomNum(maxSignNumber);
  const sign = '+-*'[signNum];

  const question = `${quessNum1} ${sign} ${quessNum2}`;

  let answer = quessNum1 + quessNum2;
  if (signNum === 1) answer = quessNum1 - quessNum2;
  if (signNum === 2) answer = quessNum1 * quessNum2;

  const pair = (message) => {
    if (message === 'question') return question;
    if (message === 'answer') return answer;
    return message;
  };
  return pair;
};


const startCalcGame = () => {
  playDefaultGame(description, genQuestAndAswPair);
};

export default startCalcGame;
