import { motion } from 'framer-motion';
import PickButton from './pickButton';
import { fadeIn, fadeInLargeDelay, fadeInMediumDelay } from '@/constants';
import type { Picks, Result } from '@/types';

export default function Playing({
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
      variants={fadeIn}
      initial="initial"
      animate="animate"
      className="lg:relative max-w-xs md:max-w-[60rem] mx-auto"
    >
      <div className="flex justify-between items-start">
        <div className="w-[clamp(5rem,43%,8rem)] xs:w-32 md:w-[18rem] aspect-square flex flex-col items-center justify-center gap-6 md:flex-col-reverse md:gap-16">
          <div className="w-full aspect-square">
            <motion.div
              variants={fadeIn}
              initial="initial"
              animate="animate"
              className="relative w-full aspect-square"
            >
              {result === 'win' && <WinnerBackground />}
              <PickButton label={playerPick} disabled className="md:p-8" />
            </motion.div>
          </div>
          <span className="uppercase text-white font-semibold tracking-widest text-sm text-center xs:whitespace-nowrap md:text-2xl">
            You picked
          </span>
        </div>
        <div className="w-[clamp(5rem,43%,8rem)] xs:w-32 md:w-[18rem] aspect-square flex flex-col items-center justify-center gap-6 md:flex-col-reverse md:gap-16">
          <div className="relative w-full aspect-square flex items-center justify-center">
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
              className="relative w-full aspect-square"
            >
              {result === 'lose' && <WinnerBackground />}
              <PickButton label={housePick} disabled className="md:p-8" />
            </motion.div>
          </div>
          <span className="uppercase text-white font-semibold tracking-widest text-sm text-center xs:whitespace-nowrap md:text-2xl">
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
        className="mt-32 flex flex-col gap-6 items-center lg:mt-0 lg:absolute lg:top-[10.5rem] lg:-translate-x-2/4 lg:left-2/4"
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
      className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-[clamp(12rem,80vw,18rem)] xs:w-72 md:w-[45.5rem] aspect-square rounded-full -z-[1] bg-radial-2"
    />
  );
}
