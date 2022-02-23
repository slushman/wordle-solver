import * as React from 'react';

import LetterButton from '../LetterButton';

const Letters = () => {

  return (
    <section className="text-center pb-8 m-auto">
      <div className="pb-4">
        <h2>Letters</h2>
        <ul>
          <li>Click once to mark the letter as absent from the word</li>
          <li>Click twice to mark the letter as present in the word</li>
          <li>Click three times to put the letter back to the default state of "undetermined"</li>
        </ul>
      </div>
      <div className="flex gap-2 p-2 justify-center content-center">
        <LetterButton letter="Q" />
        <LetterButton letter="W" />
        <LetterButton letter="E" />
        <LetterButton letter="R" />
        <LetterButton letter="T" />
        <LetterButton letter="Y" />
        <LetterButton letter="U" />
        <LetterButton letter="I" />
        <LetterButton letter="O" />
        <LetterButton letter="P" />
      </div>
      <div className="flex gap-2 p-2 justify-center content-center">
        <LetterButton letter="A" />
        <LetterButton letter="S" />
        <LetterButton letter="D" />
        <LetterButton letter="F" />
        <LetterButton letter="G" />
        <LetterButton letter="H" />
        <LetterButton letter="J" />
        <LetterButton letter="K" />
        <LetterButton letter="L" />
      </div>
      <div className="flex gap-2 p-2 justify-center content-center">
        <LetterButton letter="Z" />
        <LetterButton letter="X" />
        <LetterButton letter="C" />
        <LetterButton letter="V" />
        <LetterButton letter="B" />
        <LetterButton letter="N" />
        <LetterButton letter="M" />
      </div>
    </section>
  );
};

export default React.memo(Letters);
