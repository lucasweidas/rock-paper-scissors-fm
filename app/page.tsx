'use client';

import Image from 'next/image';
import RulesWrapper from '@/components/RulesWrapper';
import logo from '@/public/images/logo.svg';
import paperIcon from '@/public/images/icon-paper.svg';
import scissorsIcon from '@/public/images/icon-scissors.svg';
import rockIcon from '@/public/images/icon-rock.svg';
import { useState } from 'react';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

type Picks = 'paper' | 'scissors' | 'rock';
type Result = 'win' | 'lose' | 'draw';
type onPick = (pick: Picks) => void;

const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
  },
};

const fadeInMediumDelay: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
      ease: 'easeIn',
    },
  },
};

const fadeInLargeDelay: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 0.5,
      ease: 'easeIn',
    },
  },
};

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
        <div className="flex gap-4 justify-between items-center py-3 pl-5 pr-3 rounded-lg shadow-[0_0_2px_2px_hsl(217,16%,45%),inset_0_0_2px_2px_hsl(217,16%,45%)] max-w-md mx-auto w-full">
          <div className="w-[82px] h-[51px] relative flex-shrink-0">
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
    <div className="w-full aspect-[2/1.8] relative bg-triangle bg-no-repeat bg-[size:clamp(180px,56%,230px)_clamp(90px,56%,160px)] xs:bg-[size:230px_160px] bg-center">
      <PickButton
        label="paper"
        onPick={onPick}
        className="absolute top-0 left-0 w-[clamp(5rem,43%,8rem)] xs:w-32"
      />
      <PickButton
        label="scissors"
        onPick={onPick}
        className="absolute top-0 right-0 w-[clamp(5rem,43%,8rem)] xs:w-32"
      />
      <PickButton
        label="rock"
        onPick={onPick}
        className="absolute bottom-0 left-2/4 -translate-x-2/4 w-[clamp(5rem,43%,8rem)] xs:w-32"
      />
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
    <motion.div variants={fadeIn} initial="initial" animate="animate">
      <div className="flex justify-between items-center">
        <div className="relative w-[clamp(5rem,43%,8rem)] xs:w-32 aspect-square flex items-center justify-center">
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="absolute top-0 right-0 w-full aspect-square"
          >
            {result === 'win' && <WinnerBackground />}
            <PickButton label={playerPick} disabled />
          </motion.div>
          <span className="uppercase text-white font-semibold tracking-widest text-sm absolute top-[calc(100%+1.5rem)] text-center xs:whitespace-nowrap">
            You picked
          </span>
        </div>
        <div className="relative w-[clamp(5rem,43%,8rem)] xs:w-32 aspect-square flex items-center justify-center">
          <motion.div
            className="w-[calc(100%-1rem)] aspect-square border-transparent rounded-full bg-[hsl(237,49%,15%)] opacity-25 absolute"
            variants={fadeIn}
            initial="initial"
            animate="animate"
            aria-hidden="true"
          />
          <motion.div
            variants={fadeInMediumDelay}
            initial="initial"
            animate="animate"
            className="absolute top-0 left-0 w-full aspect-square"
          >
            {result === 'lose' && <WinnerBackground />}
            <PickButton label={housePick} disabled />
          </motion.div>
          <span className="uppercase text-white font-semibold tracking-widest text-sm absolute top-[calc(100%+1.5rem)] text-center xs:whitespace-nowrap">
            The house picked
          </span>
        </div>
      </div>
      <motion.div
        variants={fadeInLargeDelay}
        initial="initial"
        animate="animate"
        onAnimationComplete={() => {
          updateScore(result);
        }}
        className="mt-32 flex flex-col gap-6 items-center"
      >
        <span className="text-white text-[clamp(2rem,14vw,3rem)] xs:text-5xl font-bold tracking-wider !leading-none uppercase text-center">
          {resultMessage}
        </span>
        <button
          className={`w-[min(100%,14rem)] px-4 py-3 font-semibold tracking-widest text-gray-700 uppercase bg-white rounded-lg transition-colors ${playAgainClass}`}
          onClick={onPlayAgain}
        >
          Play again
        </button>
      </motion.div>
    </motion.div>
  );
}

function WinnerBackground() {
  return (
    <motion.div
      variants={fadeInLargeDelay}
      className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-[clamp(12rem,80vw,18rem)] xs:w-72 aspect-square rounded-full -z-[1] bg-radial-2"
    />
  );
}

function PickButton({
  label,
  onPick,
  disabled = false,
  className,
}: {
  label: Picks;
  onPick?: onPick;
  disabled?: boolean;
  className?: string;
}) {
  const pickConfig = getPickConfig(label);

  return (
    <button
      className={twMerge(
        `w-full aspect-square rounded-full shadow-option-b p-[clamp(0.625rem,4.2vw,1rem)] xs:p-4 hover:opacity-80 focus-visible:opacity-80 transition-opacity disabled:!opacity-100 ${pickConfig.buttonClass}`,
        className
      )}
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
        imageClass: 'w-[clamp(25px,43%,43px)] xs:w-[43px]',
        buttonClass: 'bg-linear-2',
      };
    case 'scissors':
      return {
        src: scissorsIcon,
        imageClass: 'w-[clamp(25px,43%,43px)] xs:w-[43px]',
        buttonClass: 'bg-linear-1',
      };
    case 'rock':
      return {
        src: rockIcon,
        imageClass: 'w-[clamp(25px,43%,43px)] xs:w-[43px]',
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
