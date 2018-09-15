import { playDefaultGame, makeRandomNum } from '..';

const maxNumber = 5000;

const balance = (str) => {
  const summ = str.split('').reduce((sum, current) => Number(sum) + Number(current));
  const average = Math.floor(summ / str.length);
  const summ2 = average * str.length;
  let diff = summ - summ2;

  const result = [];

  while (result.length !== str.length) {
    result.push(average);
  }

  for (let i = 0; diff !== 0; i += 1) {
    result[i] += 1;
    diff -= 1;
  }
  return result.sort((a, b) => a - b).join('');
};


const genQuestAndAswArray = () => {
  const question = makeRandomNum(maxNumber);
  const answer = balance(String(question));

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


const startBalanceGame = () => {
  console.log('Welcome to Brain Games!');
  console.log('Balance the given number.');
  console.log(' ');
  playDefaultGame(genPair);
};

export default startBalanceGame;
