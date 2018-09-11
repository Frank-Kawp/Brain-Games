import {
  askUserInput,
  makeRandomNum,
  checkUserAnswer,
  sayCorrectToUser,
  sayWrongToUser,
  congratulateUser,
} from '..';

const startIsEvenGame = (userName) => {
  let counter = 0;

  while (counter !== 3) {
    const quessNum = makeRandomNum();
    const correctAnswer = (quessNum % 2 === 0) ? 'yes' : 'no';
    const userAnswer = askUserInput(quessNum);

    if (checkUserAnswer(userAnswer, correctAnswer)) {
      sayCorrectToUser();
      counter += 1;
    } else {
      sayWrongToUser(userAnswer, correctAnswer, userName);
    }
  }
  congratulateUser(userName);
};

export default startIsEvenGame;
