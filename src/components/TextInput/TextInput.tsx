import * as React from 'react';

interface TextInputProps {
  onChange: (newValue: string) => void;
  value: string;
}

const TextInput = ({
  onChange,
  value,
}: TextInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const caps = event.target.value.toUpperCase();
    onChange(caps);
  };

  return (
    <input
      className="max-w-[100px] p-2 text-black text-5xl text-center"
      onChange={handleChange}
      type="text"
      value={value}
    />
  );
};

export default React.memo(TextInput);
