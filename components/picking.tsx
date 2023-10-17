import PickButton from './pickButton';
import type { onPick } from '@/types';

export default function Picking({ onPick }: { onPick: onPick }) {
  return (
    <div className="max-w-xs md:max-w-[30rem] aspect-[2/1.8] relative bg-triangle bg-no-repeat bg-[size:clamp(180px,56%,230px)_clamp(90px,56%,160px)] xs:bg-[size:230px_160px] md:bg-[size:313px_278px] bg-center mx-auto">
      <PickButton
        label="paper"
        onPick={onPick}
        className="absolute top-0 left-0 w-[clamp(5rem,43%,8rem)] xs:w-32 md:w-[12.5rem]"
      />
      <PickButton
        label="scissors"
        onPick={onPick}
        className="absolute top-0 right-0 w-[clamp(5rem,43%,8rem)] xs:w-32 md:w-[12.5rem]"
      />
      <PickButton
        label="rock"
        onPick={onPick}
        className="absolute bottom-0 left-2/4 -translate-x-2/4 w-[clamp(5rem,43%,8rem)] xs:w-32 md:w-[12.5rem]"
      />
    </div>
  );
}
