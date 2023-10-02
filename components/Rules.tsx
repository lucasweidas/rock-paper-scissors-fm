import Image from 'next/image';

export default function Rules({ onToggle }: { onToggle: () => void }) {
  return (
    <div className="fixed bg-white w-screen min-h-screen inset-0 flex flex-col items-center pt-24 px-4 pb-16">
      <h2 className="mb-28 text-2xl uppercase font-bold text-gray-700">
        Rules
      </h2>
      <div>
        <Image
          src="/images/image-rules.svg"
          alt="Paper beats rock. Rock beats scissors. Scissors beats paper."
          width={304}
          height={270}
        />
      </div>
      <CloseButton onToggle={onToggle} />
    </div>
  );
}

function CloseButton({ onToggle }: { onToggle: () => void }) {
  return (
    <button className="mt-auto" onClick={onToggle}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
        <path
          fill="#3B4262"
          fillRule="evenodd"
          d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z"
          opacity=".25"
        />
      </svg>
    </button>
  );
}
