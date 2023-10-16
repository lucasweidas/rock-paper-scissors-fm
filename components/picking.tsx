import PickButton from './pickButton';
import type { onPick } from '@/types';

export default function Picking({ onPick }: { onPick: onPick }) {
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
