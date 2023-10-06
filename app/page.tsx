'use client';

import Image from 'next/image';
import RulesWrapper from '@/components/RulesWrapper';
import logo from '@/public/images/logo.svg';
import paperIcon from '@/public/images/icon-paper.svg';
import scissorsIcon from '@/public/images/icon-scissors.svg';
import rockIcon from '@/public/images/icon-rock.svg';
import { ReactNode, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Picks = 'paper' | 'scissors' | 'rock';
type Result = 'win' | 'lose' | 'draw';
type onPick = (pick: Picks) => void;

export default function Home() {
  const [score, setScore] = useState(0);
  const [playerPick, setPlayerPick] = useState<Picks | null>(null);
  const [housePick, setHousePick] = useState<Picks | null>(null);
  const result = playerPick ? getResult(playerPick, housePick!) : null;

  function handlePlayerPick(pick: Picks) {
    const housePick = getRandomPick();

    setPlayerPick(pick);
    setHousePick(housePick);
  }

  function handleScoreChange(result: Result) {
    if (result === 'win') {
      setScore(score + 1);
    } else if (result === 'lose' && score > 0) {
      setScore(score - 1);
    }
  }

  function handlePlayAgain() {
    setPlayerPick(null);
    setHousePick(null);
  }

  return (
    <main className="overflow-x-hidden">
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
          <AnimatePresence initial={false}>
            {playerPick ? (
              <Playing
                playerPick={playerPick}
                housePick={housePick!}
                result={result!}
                onPlayAgain={handlePlayAgain}
                updateScore={handleScoreChange}
              />
            ) : (
              <Picking onPick={handlePlayerPick} />
            )}
          </AnimatePresence>
        </div>
        <RulesWrapper />
      </div>
    </main>
  );
}

function Picking({ onPick }: { onPick: onPick }) {
  return (
    <div className="flex flex-wrap gap-y-4 gap-x-[3.25rem] justify-center bg-triangle bg-no-repeat bg-[size:230px_160px] bg-center">
      <PickButton label="paper" onPick={onPick} />
      <PickButton label="scissors" onPick={onPick} />
      <PickButton label="rock" onPick={onPick} />
    </div>
  );
}

function Playing({
  playerPick,
  housePick,
  result,
  onPlayAgain,
  updateScore,
}: {
  playerPick: Picks;
  housePick: Picks;
  result: Result;
  onPlayAgain: () => void;
  updateScore: (result: Result) => void;
}) {
  let resultMessage = 'Draw';
  let playAgainClass = '';

  if (result === 'win') {
    resultMessage = 'You win';
    playAgainClass = 'hover:text-blue-500 focus-visible:text-blue-500';
  } else if (result === 'lose') {
    resultMessage = 'You lose';
    playAgainClass = 'hover:text-red-500 focus-visible:text-red-500';
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: 'easeIn',
        },
      }}
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
                ease: 'easeIn',
              },
            }}
          >
            {result === 'win' ? (
              <WinnerWrapper>
                <PickButton label={playerPick} disabled />
              </WinnerWrapper>
            ) : (
              <PickButton label={playerPick} disabled />
            )}
          </motion.div>
          <span className="uppercase text-white font-semibold tracking-widest text-sm absolute -bottom-11">
            You picked
          </span>
        </div>
        <div className="flex flex-col items-center relative">
          <motion.div
            className="w-28 h-28 border-transparent rounded-full bg-[hsl(237,49%,15%)] opacity-25 m-2"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
                ease: 'easeIn',
              },
            }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 1,
                duration: 0.5,
                ease: 'easeIn',
              },
            }}
            className="absolute top-0 left-0"
          >
            {result === 'lose' ? (
              <WinnerWrapper>
                <PickButton label={housePick} disabled />
              </WinnerWrapper>
            ) : (
              <PickButton label={housePick} disabled />
            )}
          </motion.div>
          <span className="uppercase text-white font-semibold tracking-widest text-sm absolute -bottom-11 whitespace-nowrap">
            The house picked
          </span>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 1.5,
            duration: 0.5,
            ease: 'easeIn',
          },
        }}
        onAnimationComplete={() => {
          updateScore(result);
        }}
        className="mt-32 flex flex-col gap-6 items-center"
      >
        <span className="text-white text-5xl font-bold tracking-wider uppercase text-center">
          {resultMessage}
        </span>
        <button
          className={`w-56 h-12 font-semibold tracking-widest text-gray-700 uppercase bg-white rounded-lg transition-colors ${playAgainClass}`}
          onClick={onPlayAgain}
        >
          Play again
        </button>
      </motion.div>
    </motion.div>
  );
}

function WinnerWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 1.5,
            duration: 0.5,
            ease: 'easeIn',
          },
        }}
        className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-72 h-72 rounded-full -z-[1] bg-radial-2"
      />
      {children}
    </div>
  );
}

function PickButton({
  label,
  onPick,
  disabled = false,
}: {
  label: Picks;
  onPick?: onPick;
  disabled?: boolean;
}) {
  const pickConfig = getPickConfig(label);

  return (
    <button
      className={`w-32 h-32 rounded-full shadow-option-b p-4 hover:opacity-80 focus-visible:opacity-80 transition-opacity disabled:!opacity-100 ${pickConfig.buttonClass}`}
      aria-label={label}
      onClick={() => onPick?.(label)}
      disabled={disabled}
    >
      <span className="bg-white w-full h-full rounded-full flex items-center justify-center shadow-option-t">
        <Image
          src={pickConfig.src}
          alt={label}
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

function getResult(playerPick: Picks, housePick: Picks): Result {
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
