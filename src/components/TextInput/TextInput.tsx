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
      className="w-1/5 p-2 text-black text-3xl text-center"
      onChange={handleChange}
      type="text"
      value={value}
    />
  );
};

export default React.memo(TextInput);
