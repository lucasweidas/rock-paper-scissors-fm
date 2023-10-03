'use client';

import Image from 'next/image';
import RulesWrapper from '@/components/RulesWrapper';
import logo from '@/public/images/logo.svg';
import paperIcon from '@/public/images/icon-paper.svg';
import scissorsIcon from '@/public/images/icon-scissors.svg';
import rockIcon from '@/public/images/icon-rock.svg';
import { useState } from 'react';

type Picks = 'paper' | 'scissors' | 'rock';

export default function Home() {
  const [score, setScore] = useState(0);
  const [playerPick, setPlayerPick] = useState<Picks>();

  function handlePlayerPick(pick: Picks) {
    setPlayerPick(pick);
  }

  return (
    <main>
      <h1 className="sr-only">
        Choose one of the options below to start playing.
      </h1>
      <div className="px-7 pt-8 pb-14 min-h-screen flex flex-col">
        <div className="flex gap-8 justify-between items-center py-3 pl-5 pr-3 rounded-lg shadow-[0_0_2px_2px_hsl(217,16%,45%),inset_0_0_2px_2px_hsl(217,16%,45%)] max-w-md mx-auto w-full">
          <div className="w-[82px] h-[51px] relative">
            <Image
              src={logo}
              alt="Rock, Paper, Scissors"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-20 h-[4.5rem] p-3 flex items-center justify-center flex-col bg-white rounded-lg">
            <h2 className="text-blue-500 font-semibold uppercase text-xs tracking-widest">
              Score
            </h2>
            <span className="text-gray-700 text-[2rem] !leading-none font-bold uppercase">
              {score}
            </span>
          </div>
        </div>
        <div className="max-w-xs mx-auto mt-24 w-full">
          {playerPick ? (
            <Playing playerPick={playerPick} />
          ) : (
            <Picking onPick={handlePlayerPick} />
          )}
        </div>

        <RulesWrapper />
      </div>
    </main>
  );
}

function Picking({ onPick }: { onPick: (pick: Picks) => void }) {
  return (
    <div className="flex flex-wrap gap-y-4 gap-x-[3.25rem] justify-center bg-triangle bg-no-repeat bg-[size:230px_160px] bg-center">
      <OptionButton name="paper" onPick={onPick} />
      <OptionButton name="scissors" onPick={onPick} />
      <OptionButton name="rock" onPick={onPick} />
    </div>
  );
}

function Playing({ playerPick }: { playerPick: Picks }) {
  const housePick = getRandomPick();
  const winner = getWinner(playerPick, housePick);

  let message = 'Draw';
  if (winner === 'player') {
    message = 'You win';
  } else if (winner === 'house') {
    message = 'You lose';
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center justify-center gap-6">
          <OptionButton name={playerPick} disabled />
          <span className="uppercase text-white font-semibold tracking-widest text-sm">
            You picked
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          {/* <div className="w-28 h-28 rounded-full bg-[hsl(237,49%,15%)] opacity-25 m-2" /> */}
          <OptionButton name={housePick} disabled />
          <span className="uppercase text-white font-semibold tracking-widest text-sm">
            The house picked
          </span>
        </div>
      </div>
      <div className="mt-20 flex flex-col gap-6 items-center">
        <span className="text-white text-5xl font-bold tracking-wider uppercase text-center">
          {message}
        </span>
        <button className="w-56 h-12 font-semibold tracking-widest uppercase text-gray-700 bg-white rounded-lg">
          Play again
        </button>
      </div>
    </>
  );
}

function OptionButton({
  name,
  onPick,
  disabled = false,
}: {
  name: Picks;
  onPick?: (pick: Picks) => void;
  disabled?: boolean;
}) {
  const pickConfig = getPickConfig(name);

  return (
    <button
      className={`w-32 h-32 rounded-full shadow-option-b p-4 ${pickConfig.buttonClass}`}
      aria-label={name}
      onClick={() => onPick?.(name)}
      disabled={disabled}
    >
      <span className="bg-white w-full h-full rounded-full flex items-center justify-center shadow-option-t">
        <Image
          src={pickConfig.src}
          alt={name}
          className={pickConfig.imageClass}
        />
      </span>
    </button>
  );
}

function getPickConfig(pick: Picks) {
  switch (pick) {
    case 'paper':
      return {
        src: paperIcon,
        imageClass: 'w-[43px] h-[53px]',
        buttonClass: 'bg-linear-2',
      };
    case 'scissors':
      return {
        src: scissorsIcon,
        imageClass: 'w-[45px] h-[52px]',
        buttonClass: 'bg-linear-1',
      };
    case 'rock':
      return {
        src: rockIcon,
        imageClass: 'w-[43px] h-[53px]',
        buttonClass: 'bg-linear-3',
      };
  }
}

function getRandomPick(): Picks {
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

function getWinner(playerPick: Picks, housePick: Picks) {
  if (playerPick === 'paper' && housePick === 'rock') {
    return 'player';
  }
  if (playerPick === 'rock' && housePick === 'scissors') {
    return 'player';
  }
  if (playerPick === 'scissors' && housePick === 'paper') {
    return 'player';
  }

  if (housePick === 'paper' && playerPick === 'rock') {
    return 'house';
  }
  if (housePick === 'rock' && playerPick === 'scissors') {
    return 'house';
  }
  if (housePick === 'scissors' && playerPick === 'paper') {
    return 'house';
  }

  return 'draw';
}
