import paperIcon from '@/public/images/icon-paper.svg';
import scissorsIcon from '@/public/images/icon-scissors.svg';
import rockIcon from '@/public/images/icon-rock.svg';
import type { Picks, Result } from '@/types';

export function getPickConfig(pick: Picks) {
  switch (pick) {
    case 'paper':
      return {
        src: paperIcon,
        imageClass: 'w-[45%]',
        buttonClass: 'bg-linear-2',
      };
    case 'scissors':
      return {
        src: scissorsIcon,
        imageClass: 'w-[45%]',
        buttonClass: 'bg-linear-1',
      };
    case 'rock':
      return {
        src: rockIcon,
        imageClass: 'w-[45%]',
        buttonClass: 'bg-linear-3',
      };
  }
}

export function getRandomPick(): Picks {
  const random = Math.floor(Math.random() * 3 + 1);

  switch (random) {
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    default:
      return 'rock';
  }
}

export function getResult(playerPick: Picks, housePick: Picks): Result {
  if (playerPick === 'paper' && housePick === 'rock') {
    return 'win';
  }
  if (playerPick === 'rock' && housePick === 'scissors') {
    return 'win';
  }
  if (playerPick === 'scissors' && housePick === 'paper') {
    return 'win';
  }

  if (housePick === 'paper' && playerPick === 'rock') {
    return 'lose';
  }
  if (housePick === 'rock' && playerPick === 'scissors') {
    return 'lose';
  }
  if (housePick === 'scissors' && playerPick === 'paper') {
    return 'lose';
  }

  return 'draw';
}

export function setLocalScore(score: number) {
  localStorage.setItem('score', JSON.stringify(score));
}
