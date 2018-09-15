import { playDefaultGame, makeRandomNum } from '..';

const maxNumber = 80;
const description = 'Answer "yes" if number even otherwise answer "no".';

const genQuestAndAswArray = () => {
  const question = makeRandomNum(maxNumber);
  const answer = question % 2 === 0 ? 'yes' : 'no';

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


const startIsEvenGame = () => {
  playDefaultGame(description, genQuestAndAswPair);
};

export default startIsEvenGame;
