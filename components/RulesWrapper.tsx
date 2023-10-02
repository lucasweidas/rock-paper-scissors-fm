'use client';

import { useCallback, useState } from 'react';
import Rules from './Rules';

export default function RulesWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleRules = useCallback(() => {
    setIsOpen(isOpen => !isOpen);
    document.body.classList.toggle('no-scroll');
  }, []);

  return (
    <>
      <OpenButton onToggle={toggleRules} />
      {isOpen && <Rules onToggle={toggleRules} />}
    </>
  );
}

function OpenButton({ onToggle }: { onToggle: () => void }) {
  return (
    <button
      className="uppercase font-semibold border-[2px] border-white rounded-lg h-11 w-32 text-white tracking-widest mx-auto flex justify-center items-center mt-36"
      onClick={onToggle}
    >
      Rules
    </button>
  );
}
