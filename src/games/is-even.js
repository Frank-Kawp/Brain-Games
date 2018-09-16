import { playDefaultGame, makeRandomNum } from '..';

const maxNumber = 80;
const description = 'Answer "yes" if number even otherwise answer "no".';

const genQuestAndAswPair = () => {
  const question = makeRandomNum(maxNumber);
  const answer = question % 2 === 0 ? 'yes' : 'no';

  const pair = (message) => {
    if (message === 'question') return question;
    if (message === 'answer') return answer;
    return message;
  };
  return pair;
};

const startIsEvenGame = () => {
  playDefaultGame(description, genQuestAndAswPair);
};

export default startIsEvenGame;
