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
  const [wordList, setWordList] = React.useState(words);

  React.useEffect(
    () => {
      // filter the words based on the given inputs
      const newWordList = wordList.filter((word) => {
        const letterArray = Array.from(word.toUpperCase());

        const containsAbsents = letterArray.filter((letter: string) => {
          return absentList.includes(letter);
        });

        console.log({
          word,
          letterArray,
          absentList,
          containsAbsents,
        });

        // const hasPresents = letterArray.filter((letter: string) => {
        //   return presentList.includes(letter);
        // });

        // const hasConfirmed = letterArray.filter((letter: string) => {
        //   const wordLetterIndex = word.indexOf(letter);
        //   console.log({
        //     wordLetterIndex,
        //     firstLetter,
        //     secondLetter,
        //     thirdLetter,
        //     fourthLetter,
        //     fifthLetter,
        //   });

        //   switch (wordLetterIndex) {
        //     case 0:
        //       return firstLetter === letter;
        //     case 1:
        //       return secondLetter === letter;
        //     case 2:
        //       return thirdLetter === letter;
        //     case 3:
        //       return fourthLetter === letter;
        //     case 4:
        //       return fifthLetter === letter;
        //     default:
        //       return false;
        //   }
        // });

        return containsAbsents.length === 0
        // hasConfirmed.length > 0;

        // containsAbsents.length === 0
          // && hasPresents.length > 0
          // && hasConfirmed.length > 0;
      });

      console.log({
        newWordList,
        wordList,
      });

      if (newWordList !== wordList) {
        setWordList(newWordList);
      }
    },
    [
      firstLetter,
      secondLetter,
      thirdLetter,
      fourthLetter,
      fifthLetter,
      absentList,
      presentList,
    ],
  );

  return (
    <section className="text-center">
      <h2 className="p-4">Potential Words</h2>
      <ul className="grid grid-cols-4 text-left text-xl p-8">
      {
        words.map((word, index) => (
          <li key={index}>{word}</li>
        ))
      }
      </ul>
    </section>
  );
};

export default React.memo(WordList);
