import {
  askUserInput,
  makeRandomNum,
  checkUserAnswer,
  sayCorrectToUser,
  sayWrongToUser,
  congratulateUser,
} from '..';

const calulateCorrectAnswer = (counter, quessNum1, quessNum2) => {
  if (counter === 0) {
    return quessNum1 + quessNum2;
  }
  if (counter === 1) {
    return quessNum1 - quessNum2;
  }
  return quessNum1 * quessNum2;
};

const startCalcGame = (userName) => {
  let counter = 0;
  const signsGroup = '+-*';

  while (counter !== 3) {
    const sign = signsGroup[counter];
    const quessNum1 = makeRandomNum();
    const quessNum2 = makeRandomNum();
    const correctAnswer = calulateCorrectAnswer(counter, quessNum1, quessNum2);

    const userAnswer = askUserInput(`${quessNum1} ${sign} ${quessNum2}`);

    if (checkUserAnswer(Number(userAnswer), correctAnswer)) {
      sayCorrectToUser();
      counter += 1;
    } else {
      sayWrongToUser(userAnswer, correctAnswer, userName);
    }
  }
  congratulateUser(userName);
};

export default startCalcGame;
