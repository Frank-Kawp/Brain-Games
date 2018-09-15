import { playDefaultGame, makeRandomNum } from '..';

const maxNumber = 80;
const description = 'Is this number prime?';


const isNumberPrime = (number) => {
  if (number === 1) return false;

  const iter = (num, div) => {
    if (div > num / 2) return true;
    if (num % div === 0) return false;
    return iter(number, div + 1);
  };
  return iter(number, 2);
};


const genQuestAndAswArray = () => {
  const question = makeRandomNum(maxNumber);
  const answer = isNumberPrime(question) === true ? 'yes' : 'no';

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


const startPrimeGame = () => {
  playDefaultGame(description, genQuestAndAswPair);
};

export default startPrimeGame;
