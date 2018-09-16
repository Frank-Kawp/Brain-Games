import { playDefaultGame, makeRandomNum } from '..';

const maxNumber = 80;
const maxStepNumber = 7;
const description = 'What number is missing in this progression?';

const genNewMemberOfProgression = (num, step) => num + step;


const genQuestionFunc = () => {
  const progressionStep = makeRandomNum(maxStepNumber);
  const initialNumber = makeRandomNum(maxNumber);

  const iter = (str, num, step, acc) => {
    if (acc === 10) return str.slice(0, -1);
    if (acc === step) return str + iter(`${num} .. `, genNewMemberOfProgression(num, step), step, acc + 1);
    return str + iter(`${num} `, genNewMemberOfProgression(num, step), step, acc + 1);
  };
  return iter('', initialNumber, progressionStep, 1);
};


const genQuestAndAswPair = () => {
  const question = genQuestionFunc();

  const firstNumber = parseInt(question, 10);
  const secondNumber = parseInt(question.slice(-3), 10);
  const answer = Math.floor((secondNumber - firstNumber) / 8);

  const pair = (message) => {
    if (message === 'question') return question;
    if (message === 'answer') return String(answer);
    return message;
  };
  return pair;
};


const startProgressionGame = () => {
  playDefaultGame(description, genQuestAndAswPair);
};

export default startProgressionGame;
