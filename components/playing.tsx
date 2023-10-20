import PickButton from './pickButton';
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
    <div className="fade-in mx-auto max-w-xs md:max-w-[60rem] lg:relative">
      <div className="flex animate-split items-start justify-between lg:mx-auto lg:w-[41rem]">
        <div className="flex aspect-square w-[clamp(5rem,43%,8rem)] flex-col items-center justify-center gap-6 xs:w-32 md:w-[18rem] md:flex-col-reverse md:gap-16">
          <div className="aspect-square w-full">
            <div className="fade-in relative aspect-square w-full">
              {result === 'win' && <WinnerBackground />}
              <PickButton label={playerPick} disabled className="md:p-8" />
            </div>
          </div>
          <span className="relative text-center text-sm font-semibold uppercase tracking-widest text-white xs:whitespace-nowrap md:text-2xl">
            You picked
            <span className="sr-only">{playerPick}</span>
          </span>
        </div>
        <div className="flex aspect-square w-[clamp(5rem,43%,8rem)] flex-col items-center justify-center gap-6 xs:w-32 md:w-[18rem] md:flex-col-reverse md:gap-16">
          <div className="relative flex aspect-square w-full items-center justify-center">
            <div
              className="fade-in absolute aspect-square w-[calc(100%-1rem)] rounded-full border-transparent bg-[hsl(237,49%,15%)] opacity-25"
              aria-hidden="true"
            />
            <div className="fade-in--delay-md relative aspect-square w-full">
              {result === 'lose' && <WinnerBackground />}
              <PickButton label={housePick} disabled className="md:p-8" />
            </div>
          </div>
          <span className="relative text-center text-sm font-semibold uppercase tracking-widest text-white xs:whitespace-nowrap md:text-2xl">
            The house picked
            <span className="sr-only">{housePick}</span>
          </span>
        </div>
      </div>
      <div
        onAnimationEnd={() => {
          updateScore(result);
        }}
        className="fade-in--delay-lg mt-32 flex flex-col items-center gap-6 lg:absolute lg:left-2/4 lg:top-[10.5rem] lg:mt-0 lg:-translate-x-2/4"
      >
        <span className="text-center text-[clamp(2rem,14vw,3rem)] font-bold uppercase !leading-none tracking-wider text-white xs:text-5xl">
          {resultMessage}
        </span>
        <button
          className={`w-[min(100%,14rem)] rounded-lg bg-white px-4 py-3 font-semibold uppercase tracking-widest text-gray-700 transition-colors lg:w-[min(100vw,14rem)] ${playAgainClass}`}
          onClick={onPlayAgain}
        >
          Play again
        </button>
      </div>
    </div>
  );
}

function WinnerBackground() {
  return (
    <div
      className="fade-in--delay-lg absolute left-2/4 top-2/4 -z-[1] aspect-square w-[clamp(12rem,80vw,18rem)] -translate-x-2/4 -translate-y-2/4 rounded-full bg-radial-2 xs:w-72 md:w-[45.5rem]"
      aria-hidden="true"
    />
  );
}
