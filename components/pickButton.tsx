import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { getPickConfig } from '@/utils';
import type { Picks, onPick } from '@/types';

export default function PickButton({
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
        `w-full aspect-square rounded-full shadow-option-b md:shadow-option-b-md p-[clamp(0.625rem,4.2vw,1rem)] md:p-6 xs:p-4 hover:opacity-80 focus-visible:opacity-80 transition-opacity disabled:!opacity-100 ${pickConfig.buttonClass}`,
        className
      )}
      aria-label={label}
      onClick={() => onPick?.(label)}
      disabled={disabled}
    >
      <span className="bg-white w-full h-full rounded-full flex items-center justify-center shadow-option-t md:shadow-option-t-md">
        <Image
          src={pickConfig.src}
          alt={label}
          className={pickConfig.imageClass}
        />
      </span>
    </button>
  );
}
