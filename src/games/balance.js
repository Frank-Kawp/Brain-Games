import { playDefaultGame, makeRandomNum } from '..';

const description = 'Balance the given number.';

const genQuestion = () => makeRandomNum() * 5;


const balanceArray = (arr) => {
  const summ1 = arr.reduce((sum, current) => sum + current);
  const average = Math.floor(summ1 / arr.length);
  const result = [];

  while (result.length < arr.length) {
    result.push(average);
  }

  let summ2 = result.reduce((sum, current) => sum + current);

  for (let i = 0; summ2 < summ1; i += 1) {
    result[i] += 1;
    summ2 = result.reduce((sum, current) => sum + current);
  }
  return result;
};

const genAnswer = (question) => {
  const args = String(question).split('');

  for (let i = 0; i < args.length; i += 1) {
    args[i] = Number(args[i]);
  }

  const result = balanceArray(args);
  result.sort((a, b) => a - b);
  return result.join('');
};


const startBalanceGame = (userName, whoStartTheGame) => {
  playDefaultGame(userName, description, genQuestion, genAnswer, whoStartTheGame);
};

export default startBalanceGame;
