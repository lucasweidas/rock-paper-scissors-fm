import Image from 'next/image';
import rulesImg from '@/public/images/image-rules.svg';

export default function Rules({ onToggle }: { onToggle: () => void }) {
  return (
    <div className="fixed w-screen min-h-screen inset-0 isolate lg:flex lg:items-center lg:justify-center">
      <div className="bg-white w-full h-full flex flex-col items-center pt-24 px-4 pb-16 lg:w-[25rem] lg:h-[26rem] lg:rounded-lg lg:p-8 relative z-10 overflow-y-auto">
        <h2 className="mb-28 text-2xl uppercase font-bold text-gray-700 lg:mb-12 lg:self-start lg:text-3xl lg:leading-none">
          Rules
        </h2>
        <div className="mb-20 lg:mb-0">
          <Image
            src={rulesImg}
            alt="Paper beats rock. Rock beats scissors. Scissors beats paper."
          />
        </div>
        <CloseButton onToggle={onToggle} />
      </div>
      <div
        className="absolute bg-black/50 inset-0 max-lg:hidden"
        onClick={onToggle}
      />
    </div>
  );
}

function CloseButton({ onToggle }: { onToggle: () => void }) {
  return (
    <button
      className="mt-auto opacity-25 hover:opacity-75 focus-visible:opacity-75 transition-opacity lg:absolute lg:mt-0 top-9 right-8"
      aria-label="close rules"
      onClick={onToggle}
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
  );
}
