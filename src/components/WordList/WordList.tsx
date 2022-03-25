import * as React from 'react';

import words from '../../words';

interface WordListProps {
  firstLetter: string;
  secondLetter: string;
  thirdLetter: string;
  fourthLetter: string;
  fifthLetter: string;
  absentList: string[];
  presentList: string[];
}

const WordList = ({
  firstLetter,
  secondLetter,
  thirdLetter,
  fourthLetter,
  fifthLetter,
  absentList,
  presentList,
}: WordListProps) => {
  const wordList = words.filter((word) => {
    if (
      absentList.length === 0
      && presentList.length === 0
      && firstLetter === ''
      && secondLetter === ''
      && thirdLetter === ''
      && fourthLetter === ''
      && fifthLetter === ''
    ) {
      return true;
    }

    const letterArray = Array.from(word.toUpperCase());

    const hasAbsents = absentList.length > 0 && letterArray.some(letter => absentList.includes(letter));
    const hasPresents = presentList.length > 0 && presentList.every(letter => letterArray.includes(letter));
    const hasFirst = firstLetter !== '' && firstLetter === letterArray[0];
    const hasSecond = secondLetter !== '' && secondLetter === letterArray[1];
    const hasThird = thirdLetter !== '' && thirdLetter === letterArray[2];
    const hasFourth = fourthLetter !== '' && fourthLetter === letterArray[3];
    const hasFifth = fifthLetter !== '' && fifthLetter === letterArray[4];

    return !hasAbsents && hasPresents && hasFirst && hasSecond && hasThird && hasFourth && hasFifth;
  });

  return (
    <section className="text-center">
      <h2>Potential Words</h2>
      <ul className="grid grid-cols-4 text-left text-xl pb-8">
      {
        wordList.map((word, index) => (
          <li key={index}>{word}</li>
        ))
      }
      </ul>
    </section>
  );
};

export default React.memo(WordList);
