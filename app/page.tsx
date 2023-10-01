import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <h1 className="sr-only">
        Choose one of the options bellow to start playing.
      </h1>
      <div>
        <div>
          <div>
            <Image
              src="/images/logo.svg"
              alt="Rock, Paper, Scissors"
              width={162}
              height={99}
            />
          </div>
          <div>
            <h2>Score</h2>
            <span>0</span>
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
