import { playDefaultGame, makeRandomNum } from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';

const genQuestion = makeRandomNum;

const genAnswer = (question) => {
  if (question % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const startIsEvenGame = (userName, whoStartTheGame) => {
  playDefaultGame(userName, description, genQuestion, genAnswer, whoStartTheGame);
};

export default startIsEvenGame;
