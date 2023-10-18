'use client';

import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Playing from '@/components/playing';
import Picking from '@/components/picking';
import RulesWrapper from '@/components/rulesWrapper';
import { getRandomPick, getResult } from '@/utils';
import type { Picks, Result } from '@/types';

import logo from '@/public/images/logo.svg';

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
    <main className="overflow-hidden">
      <h1 className="sr-only">
        Choose one of the options below to start playing.
      </h1>
      <div className="px-7 pt-8 md:pt-12 pb-14 md:pb-8 min-h-screen flex flex-col max-w-[88rem] mx-auto">
        <TopBar score={score} />
        <div className="mt-24 w-full">
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

function TopBar({ score }: { score: number }) {
  return (
    <div className="flex gap-4 justify-between items-center py-3 pl-5 pr-3 md:py-4 md:pl-8 md:pr-6 rounded-lg shadow-[0_0_2px_2px_hsl(217,16%,45%),inset_0_0_2px_2px_hsl(217,16%,45%)] max-w-md mx-auto w-full md:max-w-[44rem]">
      <div className="w-[82px] h-[51px] md:w-[162px] md:h-[99px] relative flex-shrink-0">
        <Image
          src={logo}
          alt="Rock, Paper, Scissors"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="min-w-20 h-[4.5rem] md:min-w-[9.5rem] md:h-28 p-3 md:px-4 flex items-center justify-center flex-col bg-white rounded-lg">
        <h2 className="text-blue-500 font-semibold uppercase text-xs tracking-widest md:text-base !leading-none">
          Score
        </h2>
        <span className="text-gray-700 text-[2rem] !leading-none font-bold uppercase md:text-6xl">
          {score}
        </span>
      </div>
    </div>
  );
}
