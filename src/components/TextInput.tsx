import { ChangeEvent } from 'react';

interface TextInputProps {
  index: number;
  onChange: (newValue: string, index: number) => void;
  value: string;
}

export default function TextInput({ index, onChange, value }: TextInputProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const caps = event.target.value.toUpperCase();
    onChange(caps, index);
  };

  const bgColor = value ? 'bg-wordleGreen' : 'bg-wordleBlack';

  return (
    <input
      className={`w-1/5 p-2 text-white text-3xl text-center border-solid border-wordleGray border-2 ${bgColor}`}
      onChange={handleChange}
      type="text"
      value={value}
    />
  );
}
