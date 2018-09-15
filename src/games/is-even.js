import { playDefaultGame, makeRandomNum } from '..';

const maxNumber = 80;

const genQuestAndAswArray = () => {
  const question = makeRandomNum(maxNumber);
  const answer = question % 2 === 0 ? 'yes' : 'no';

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


const startIsEvenGame = () => {
  console.log('Welcome to Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  console.log(' ');
  playDefaultGame(genPair);
};

export default startIsEvenGame;
