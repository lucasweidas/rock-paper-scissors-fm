'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import Playing from '@/components/playing';
import Picking from '@/components/picking';
import RulesWrapper from '@/components/rulesWrapper';
import { getRandomPick, getResult, setLocalScore } from '@/utils';
import type { Picks, Result } from '@/types';

import logo from '@/public/images/logo.svg';

export default function Home() {
  const [score, setScore] = useState(0);
  const [playerPick, setPlayerPick] = useState<Picks | null>(null);
  const [housePick, setHousePick] = useState<Picks | null>(null);
  const result = playerPick ? getResult(playerPick, housePick!) : null;

  const onPlayerPick = useCallback((pick: Picks) => {
    const housePick = getRandomPick();

    setPlayerPick(pick);
    setHousePick(housePick);
  }, []);

  const onChangeScore = useCallback(
    (result: Result) => {
      let nextScore = score;

      if (result === 'win') {
        nextScore++;
      } else if (result === 'lose' && score > 0) {
        nextScore--;
      }

      setScore(nextScore);
      setLocalScore(nextScore);
    },
    [score],
  );

  const onPlayAgain = useCallback(() => {
    setPlayerPick(null);
    setHousePick(null);
  }, []);

  useEffect(() => {
    const localScore = +(localStorage.getItem('score') ?? 0);

    setLocalScore(localScore);
    setScore(localScore);
  }, []);

  return (
    <main className="overflow-hidden">
      <h1 className="sr-only">
        Choose one of the options below to start playing.
      </h1>
      <div className="mx-auto flex min-h-screen max-w-[88rem] flex-col px-7 pb-14 pt-8 md:pb-8 md:pt-12">
        <TopBar score={score} />
        <div className="mt-24 w-full">
          {playerPick ? (
            <Playing
              playerPick={playerPick}
              housePick={housePick!}
              result={result!}
              onPlayAgain={onPlayAgain}
              updateScore={onChangeScore}
            />
          ) : (
            <Picking onPick={onPlayerPick} />
          )}
        </div>
        <RulesWrapper />
      </div>
    </main>
  );
}

function TopBar({ score }: { score: number }) {
  return (
    <div className="mx-auto flex w-full max-w-md items-center justify-between gap-4 rounded-lg py-3 pl-5 pr-3 shadow-[0_0_2px_2px_hsl(217,16%,45%),inset_0_0_2px_2px_hsl(217,16%,45%)] md:max-w-[44rem] md:py-4 md:pl-8 md:pr-6">
      <div className="relative h-[51px] w-[82px] flex-shrink-0 md:h-[99px] md:w-[162px]">
        <Image
          src={logo}
          alt="Rock, Paper, Scissors"
          className="object-cover"
          fill
          priority
        />
      </div>
      <div className="min-w-20 flex h-[4.5rem] flex-col items-center justify-center rounded-lg bg-white p-3 md:h-28 md:min-w-[9.5rem] md:px-4">
        <h2 className="text-xs font-semibold uppercase !leading-none tracking-widest text-blue-500 md:text-base">
          Score
        </h2>
        <span className="text-[2rem] font-bold uppercase !leading-none text-gray-700 md:text-6xl">
          {score}
        </span>
      </div>
    </div>
  );
}
