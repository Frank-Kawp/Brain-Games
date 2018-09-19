import readLineSync from 'readline-sync';

import startIsEvenGame from './games/is-even';

import startCalcGame from './games/calc';

import startGCDGame from './games/gcd';

import startBalanceGame from './games/balance';

import startProgressionGame from './games/progression';

import startPrimeGame from './games/prime';


const games = [
  'Even numbers game',
  'Calc game',
  'Find GCD game',
  'Balance numbers game',
  'Progression game',
  'Prime numbers game',
];

const gamesFunctions = {
  0: startIsEvenGame,
  1: startCalcGame,
  2: startGCDGame,
  3: startBalanceGame,
  4: startProgressionGame,
  5: startPrimeGame,
};

const showGameLogo = () => {
  console.log('*************************************************************************');
  console.log('********************** Welcome to the Brain Games! **********************');
  console.log('*************************************************************************');
  console.log(' ');
  console.log('*************************** Brain Games Menu ****************************');
  console.log(' ');
};

export const showMenu = () => {
  showGameLogo();
  const userChoose = readLineSync.keyInSelect(games, '*********************************** Choose the game by number');
  if (userChoose === -1) return -1;
  return gamesFunctions[userChoose]();
};

export default showMenu;
