import Image from 'next/image';
import rulesImg from '@/public/images/image-rules.svg';

export default function Rules({ onToggle }: { onToggle: () => void }) {
  return (
    <div
      className="fixed inset-0 isolate min-h-screen w-screen md:flex md:items-center md:justify-center"
      aria-modal="true"
    >
      <div className="relative z-10 flex h-full w-full flex-col items-center overflow-y-auto bg-white px-4 pb-16 pt-24 md:h-[26rem] md:w-[25rem] md:rounded-lg md:p-8">
        <h2 className="mb-28 text-2xl font-bold uppercase text-gray-700 md:mb-12 md:self-start md:text-3xl md:leading-none">
          Rules
        </h2>
        <div className="mb-20 md:mb-0">
          <Image
            src={rulesImg}
            alt="Paper beats rock. Rock beats scissors. Scissors beats paper."
          />
        </div>
        <button
          className="right-8 top-9 mt-auto opacity-25 transition-opacity hover:opacity-75 focus-visible:opacity-75 md:absolute md:mt-0"
          aria-label="close rules"
          onClick={onToggle}
          aria-pressed="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            aria-hidden="true"
          >
            <path
              fill="#3B4262"
              fillRule="evenodd"
              d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z"
            />
          </svg>
        </button>
      </div>
      <div
        className="absolute inset-0 bg-black/50 max-md:hidden"
        onClick={onToggle}
        aria-hidden="true"
      />
    </div>
  );
}
