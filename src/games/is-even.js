import { playDefaultGame, makeRandomNum } from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';

const genQuestion = makeRandomNum;

const genAnswer = (question) => {
  if (question % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const startIsEvenGame = () => playDefaultGame(description, genQuestion, genAnswer);

export default startIsEvenGame;
