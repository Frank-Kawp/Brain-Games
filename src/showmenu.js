import readLineSync from 'readline-sync';

import { sayHelloToNewUser } from '.';

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
};

const whoStartTheGame = 'menu';

export const menu = (userName) => {
  if (typeof userName === 'undefined') {
    showGameLogo();
    userName = sayHelloToNewUser();
    console.log(' ');
  }

  console.log('*************************** Brain Games Menu ****************************');
  console.log(' ');
  const userChoose = readLineSync.keyInSelect(games, '*********************************** Choose the game by number');
  if (userChoose === -1) return -1;
  return gamesFunctions[userChoose](userName, whoStartTheGame);
};

export default menu;
