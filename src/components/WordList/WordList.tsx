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

    let hasAbsents = false;
    let hasPresents = true;
    let hasFirst = true;
    let hasSecond = true;
    let hasThird = true;
    let hasFourth = true;
    let hasFifth = true;

    const letterArray = Array.from(word.toUpperCase());

    if (absentList.length > 0) {
      hasAbsents = letterArray.some(letter => absentList.includes(letter));
    }

    if (presentList.length > 0) {
      hasPresents = presentList.every(letter => letterArray.includes(letter));
    }

    if (firstLetter !== '') {
      hasFirst = firstLetter === letterArray[0];
    }

    if (secondLetter !== '') {
      hasSecond = secondLetter === letterArray[1];
    }

    if (thirdLetter !== '') {
      hasThird = thirdLetter === letterArray[2];
    }

    if (fourthLetter !== '') {
      hasFourth = fourthLetter === letterArray[3];
    }

    if (fifthLetter !== '') {
      hasFifth = fifthLetter === letterArray[4];
    }

    return !hasAbsents && hasPresents && hasFirst && hasSecond && hasThird && hasFourth && hasFifth;
  });

  return (
    <section className="text-center">
      <h2 className="p-4">Potential Words</h2>
      <ul className="grid grid-cols-4 text-left text-xl p-8">
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
