import Image from 'next/image';

export default function Home() {
  return (
    <main className="px-7 pt-8 pb-14">
      <h1 className="sr-only">
        Choose one of the options below to start playing.
      </h1>
      <div>
        <div className="flex gap-8 justify-between items-center py-3 pl-5 pr-3 rounded-lg shadow-[0_0_2px_2px_hsl(217,16%,45%),inset_0_0_2px_2px_hsl(217,16%,45%)] max-w-md mx-auto">
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

        <div className="flex flex-wrap gap-y-4 gap-x-[3.25rem] justify-center bg-triangle bg-no-repeat bg-[size:230px_160px] bg-center max-w-xs mx-auto mt-24">
          <button
            className="w-32 h-32 rounded-full bg-linear-2 shadow-option-b p-4"
            aria-label="Paper"
          >
            <span className="bg-white w-full h-full rounded-full flex items-center justify-center shadow-option-t">
              <Image
                src="/images/icon-paper.svg"
                alt="Paper"
                width={49}
                height={59}
                className="w-[43px] h-[53px]"
              />
            </span>
          </button>
          <button
            className="w-32 h-32 rounded-full bg-linear-1 shadow-option-b p-4"
            aria-label="Scissors"
          >
            <span className="bg-white w-full h-full rounded-full flex items-center justify-center shadow-option-t">
              <Image
                src="/images/icon-scissors.svg"
                alt="Scissors"
                width={51}
                height={58}
                className="w-[45px] h-[52px]"
              />
            </span>
          </button>
          <button
            className="w-32 h-32 rounded-full bg-linear-3 shadow-option-b p-4"
            aria-label="Rock"
          >
            <span className="bg-white w-full h-full rounded-full flex items-center justify-center shadow-option-t">
              <Image
                src="/images/icon-rock.svg"
                alt="Rock"
                width={48}
                height={48}
                className="w-[42px] h-[42px]"
              />
            </span>
          </button>
        </div>

        <button className="uppercase font-semibold border-[2px] border-white rounded-lg h-11 w-32 text-white tracking-widest mx-auto flex justify-center items-center mt-36">
          Rules
        </button>
      </div>
    </main>
  );
}
