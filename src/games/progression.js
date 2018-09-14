import { playDefaultGame, makeRandomNum } from '..';

const description = 'What number is missing in this progression?';

const makeRandomStep = () => Math.round(2 + Math.random() * (7 - 2));

const genNewMemberOfProgression = (num, step) => num + step;

const genQuestion = () => {
  const progressionStep = makeRandomStep();
  const initialNumber = makeRandomNum();

  const iter = (str, num, step, acc) => {
    if (acc === 10) return str.slice(0, -1);
    if (acc === step) return str + iter(`${num} .. `, genNewMemberOfProgression(num, step), step, acc + 1);
    return str + iter(`${num} `, genNewMemberOfProgression(num, step), step, acc + 1);
  };
  return iter('', initialNumber, progressionStep, 1);
};


const genAnswer = (question) => {
  const firstNumber = parseInt(question, 10);
  const secondNumber = parseInt(question.slice(-3), 10);
  return Math.floor((secondNumber - firstNumber) / 8);
};


const startProgression = () => {
  playDefaultGame(description, genQuestion, genAnswer);
};

export default startProgression;
