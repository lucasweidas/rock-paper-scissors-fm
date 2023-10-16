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
