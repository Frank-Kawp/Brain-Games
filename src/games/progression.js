import { playDefaultGame, makeRandomNum } from '..';

const description = 'What number is missing in this progression?';

const makeRandomStep = () => Math.round(2 + Math.random() * (7 - 2));

const genQuestion = () => {
  const step = makeRandomStep();
  const num = makeRandomNum();
  const progression = [];
  const randomMiisinNum = makeRandomStep();

  progression.push(num);

  for (let i = 0; i < 10; i += 1) {
    progression.push(progression[i] + step);
  }

  progression[randomMiisinNum] = '..';
  return progression.join(' ');
};

const genAnswer = (question) => {
  const arr = question.split(' ');
  let answer = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if ((arr[i]) === '..') {
      answer = (Number(arr[i + 1]) - Number(arr[i - 1])) / 2;
    }
  }
  return answer;
};

const startProgression = () => {
  playDefaultGame(description, genQuestion, genAnswer);
};

export default startProgression;
