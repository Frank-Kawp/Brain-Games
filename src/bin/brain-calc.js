#!/usr/bin/env node

import startCalcGame from '../games/calc';
import { aboutGameScreen, sayHiToNewUser, showGameDescription } from '..';

aboutGameScreen();
showGameDescription('What is the result of the expression?');

const userName = sayHiToNewUser();

startCalcGame(userName);
