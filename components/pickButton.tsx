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
        `aspect-square w-full rounded-full p-[clamp(0.625rem,4.2vw,1rem)] shadow-option-b transition-opacity hover:opacity-80 focus-visible:opacity-80 disabled:!opacity-100 xs:p-4 md:p-6 md:shadow-option-b-md ${pickConfig.buttonClass}`,
        className,
      )}
      aria-label={label}
      onClick={() => onPick?.(label)}
      disabled={disabled}
    >
      <span className="flex h-full w-full items-center justify-center rounded-full bg-white shadow-option-t md:shadow-option-t-md">
        <Image
          src={pickConfig.src}
          alt={label}
          className={pickConfig.imageClass}
        />
      </span>
    </button>
  );
}
