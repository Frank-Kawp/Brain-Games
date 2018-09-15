import { playDefaultGame, makeRandomNum } from '..';

const maxNumber = 80;


const isNumberPrime = (number) => {
  const iter = (num, div) => {
    if (number === 2 || number === div) return true;
    if (number % div === 0) return false;
    return iter(number, div + 1);
  };
  return iter(number, 2);
};


const genQuestAndAswArray = () => {
  const question = makeRandomNum(maxNumber);
  const answer = isNumberPrime(question) === true ? 'yes' : 'no';

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


const startPrimeGame = () => {
  console.log('Welcome to Brain Games!');
  console.log('Is this number prime?');
  console.log(' ');
  playDefaultGame(genPair);
};

export default startPrimeGame;
