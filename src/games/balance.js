import { playDefaultGame, makeRandomNum } from '..';

const maxNumber = 5000;
const description = 'Balance the given number.';

const genQuestAndAswPair = () => {
  const question = String(makeRandomNum(maxNumber));
  const summ = question.split('').reduce((sum, current) => Number(sum) + Number(current));
  const average = Math.floor(summ / question.length);
  const diff = summ - (average * question.length);
  let answer = '';

  switch (diff) {
    case 1:
      answer = String(average).repeat(question.length - 1) + (average + 1);
      break;
    case 2:
      answer = String(average).repeat(question.length - 2) + (average + 1) + (average + 1);
      break;
    default:
      answer = String(average).repeat(question.length);
      break;
  }

  const pair = (message) => {
    if (message === 'question') return question;
    if (message === 'answer') return answer;
    return message;
  };
  return pair;
};


const startBalanceGame = () => {
  playDefaultGame(description, genQuestAndAswPair);
};

export default startBalanceGame;
