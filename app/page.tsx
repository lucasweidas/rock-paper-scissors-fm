import Image from 'next/image';

export default function Home() {
  return (
    <main className="px-7 pt-8 pb-14">
      <h1 className="sr-only">
        Choose one of the options bellow to start playing.
      </h1>
      <div>
        <div className="flex gap-8 justify-between items-center py-3 pl-5 pr-3 rounded-lg shadow-[0_0_2px_2px_hsl(217,16%,45%),inset_0_0_2px_2px_hsl(217,16%,45%)]">
          <div className="w-[82px] h-[47px]">
            <Image
              src="/images/logo.svg"
              alt="Rock, Paper, Scissors"
              width={162}
              height={99}
            />
          </div>
          <div className="w-20 h-[4.5rem] p-3 flex items-center justify-center flex-col bg-white rounded-lg">
            <h2 className="text-blue-500 font-semibold uppercase text-xs tracking-widest">
              Score
            </h2>
            <span className="text-gray-700 text-[2rem] !leading-none font-bold uppercase">
              12
            </span>
          </div>
        </div>

        <div>
          <button aria-label="Paper">
            <Image
              src="/images/icon-paper.svg"
              alt="Paper"
              width={49}
              height={59}
            />
          </button>
          <button aria-label="Rock">
            <Image
              src="/images/icon-rock.svg"
              alt="Rock"
              width={48}
              height={48}
            />
          </button>
          <button aria-label="Scissors">
            <Image
              src="/images/icon-scissors.svg"
              alt="Scissors"
              width={51}
              height={58}
            />
          </button>
        </div>

        <button>Rules</button>
      </div>
    </main>
  );
}
