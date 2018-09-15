import { playDefaultGame, makeRandomNum } from '..';

const maxNumber = 5000;
const description = 'Balance the given number.';


const balance = (str) => {
  const summ = str.split('').reduce((sum, current) => Number(sum) + Number(current));
  const average = Math.floor(summ / str.length);
  const diff = summ - (average * str.length);
  let result = '';

  switch (diff) {
    case 1:
      result = String(average).repeat(str.length - 1) + (average + 1);
      return String(result);
    case 2:
      result = String(average).repeat(str.length - 2) + (average + 1) + (average + 1);
      return String(result);
    default:
      result = String(average).repeat(str.length);
      return String(result);
  }
};


const genQuestAndAswArray = () => {
  const question = makeRandomNum(maxNumber);
  const answer = balance(String(question));

  return [question, answer];
};


const genQuestAndAswPair = () => {
  const arr = genQuestAndAswArray();
  const pair = (message) => {
    if (message === 'question') return arr[0];
    if (message === 'answer') return arr[1];
    return message;
  };
  return pair;
};


const startBalanceGame = () => {
  playDefaultGame(description, genQuestAndAswPair);
};

export default startBalanceGame;
