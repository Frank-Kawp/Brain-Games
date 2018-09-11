#!/usr/bin/env node

import startIsEvenGame from '../games/is-even';
import { aboutGameScreen, sayHiToNewUser, showGameDescription } from '..';

aboutGameScreen();
showGameDescription('Answer "yes" if number even otherwise answer "no".');

const userName = sayHiToNewUser();

startIsEvenGame(userName);
