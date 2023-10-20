import PickButton from './pickButton';
import type { onPick } from '@/types';

export default function Picking({ onPick }: { onPick: onPick }) {
  return (
    <div className="relative mx-auto aspect-[2/1.8] max-w-xs bg-triangle bg-[size:clamp(180px,56%,230px)_clamp(90px,56%,160px)] bg-center bg-no-repeat xs:bg-[size:230px_160px] md:max-w-[30rem] md:bg-[size:313px_278px]">
      <PickButton
        label="paper"
        onPick={onPick}
        className="absolute left-0 top-0 w-[clamp(5rem,43%,8rem)] xs:w-32 md:w-[12.5rem]"
      />
      <PickButton
        label="scissors"
        onPick={onPick}
        className="absolute right-0 top-0 w-[clamp(5rem,43%,8rem)] xs:w-32 md:w-[12.5rem]"
      />
      <PickButton
        label="rock"
        onPick={onPick}
        className="absolute bottom-0 left-2/4 w-[clamp(5rem,43%,8rem)] -translate-x-2/4 xs:w-32 md:w-[12.5rem]"
      />
    </div>
  );
}
