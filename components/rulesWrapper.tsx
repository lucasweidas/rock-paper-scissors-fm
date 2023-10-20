'use client';

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
        className="uppercase font-semibold border-[2px] border-white rounded-lg h-11 w-32 text-white tracking-widest mx-auto flex justify-center items-center mt-12 hover:text-gray-700 hover:bg-white focus-visible:text-gray-700 focus-visible:bg-white transition-colors relative"
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
