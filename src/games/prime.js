import { playDefaultGame, makeRandomNum } from '..';

const description = 'Is this number prime?';

const isNumberPrime = (number, divisor) => {
  if (number === 2 || number === divisor) return true;
  if (number % divisor === 0) return false;
  return isNumberPrime(number, divisor + 1);
};


const genQuestion = () => makeRandomNum();


const genAnswer = (question) => {
  if (isNumberPrime(question, 2)) return 'yes';
  return 'no';
};


const startPrimeGame = (userName, whoStartTheGame) => {
  playDefaultGame(userName, description, genQuestion, genAnswer, whoStartTheGame);
};

export default startPrimeGame;
