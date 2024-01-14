import { useCallback, useState } from 'react';

interface LetterButtonProps {
  color: string;
  letter: string;
  onChange: (letter: string, clickNumber: number) => void;
}

export default function LetterButton({ color, letter, onChange }: LetterButtonProps) {
  const [clickNumber, setClickNumber] = useState(0);

  const handleClick = useCallback(() => {
    if (clickNumber === 2) {
      setClickNumber(0);
    } else {
      setClickNumber(clickNumber + 1);
    }

    onChange(letter, clickNumber);
  }, [clickNumber, letter, onChange]);

  return (
    <button
      className={`${color} px-3 py-1 rounded flex align-middle items-center content-center justify-center flex-1 cursor-pointer max-w-[32px]`}
      onClick={handleClick}
    >
      {letter}
    </button>
  );
}
