import * as React from 'react';

import TextInput from '../TextInput';

interface ConfirmedProps {
  firstLetter: string;
  setFirstLetter: (newValue: string) => void;
  secondLetter: string;
  setSecondLetter: (newValue: string) => void;
  fourthLetter: string;
  setFourthLetter: (newValue: string) => void;
  thirdLetter: string;
  setThirdLetter: (newValue: string) => void;
  fifthLetter: string;
  setFifthLetter: (newValue: string) => void;
}

const Confirmed = ({
  firstLetter,
  setFirstLetter,
  secondLetter,
  setSecondLetter,
  thirdLetter,
  setThirdLetter,
  fourthLetter,
  setFourthLetter,
  fifthLetter,
  setFifthLetter,
}: ConfirmedProps) => {

  return (
    <section className="text-center">
      <h2 className="">Correct letters</h2>
      <p className="">Enter correct letters in the field corresponding with it's place in the word.</p>
      <div className="flex gap-8 p-8 justify-center">
        <TextInput onChange={setFirstLetter} value={firstLetter} />
        <TextInput onChange={setSecondLetter} value={secondLetter} />
        <TextInput onChange={setThirdLetter} value={thirdLetter} />
        <TextInput onChange={setFourthLetter} value={fourthLetter} />
        <TextInput onChange={setFifthLetter} value={fifthLetter} />
      </div>
    </section>
  );
};

export default React.memo(Confirmed);
