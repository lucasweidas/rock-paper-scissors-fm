import { useCallback, useState } from 'react';
import Rules from './rules';

export default function RulesWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleRules = useCallback(() => {
    setIsOpen(isOpen => !isOpen);
    document.body.classList.toggle('no-scroll');
  }, []);

  return (
    <div className="mt-auto lg:self-end">
      <button
        className="relative mx-auto mt-12 flex h-11 w-32 items-center justify-center rounded-lg border-[2px] border-white font-semibold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-gray-700 focus-visible:bg-white focus-visible:text-gray-700"
        onClick={toggleRules}
        aria-pressed={isOpen}
        aria-haspopup="dialog"
      >
        Rules
      </button>
      {isOpen && <Rules onToggle={toggleRules} />}
    </div>
  );
}
