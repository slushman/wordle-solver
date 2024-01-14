import { useCallback, useState } from 'react';

import Footer from './Footer';
import LetterButton from './LetterButton';
import TextInput from './TextInput';
import WordList from './WordList';

/**
 * gray: #86888a rgb(134,136,138)
 * darkgray: #939598 rgb(147,149,152)
 * yellow: #c9b458 rgb(201,180,88)
 * darkyellow: #b59f3b rgb(181,159,59)
 * green: #6aaa64 rgb(106,170,100)
 * darkgreen: #538d4e rgb(83,141,78)
 */

const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const row3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

export default function App() {
  const [letters, setLetters] = useState<string[]>(['', '', '', '', '']);
  const [absentList, setAbsentList] = useState<string[]>([]);
  const [presentList, setPresentList] = useState<string[]>([]);

  const getColor = (letter: string) => {
    if (letters.includes(letter)) {
      return 'bg-wordleGreen';
    }

    if (presentList.includes(letter)) {
      return 'bg-wordleYellow';
    }

    if (absentList.includes(letter)) {
      return 'bg-black';
    }

    return 'bg-wordleGray';
  };

  const handleSetLetter = useCallback(
    (newLetter: string, index: number) => {
      setLetters((prevLetters) => prevLetters.map((letter, mapIndex) => (index === mapIndex ? newLetter : letter)));

      if (presentList.includes(newLetter)) {
        // remove letter from presentList
        setPresentList((prevPresentList) => {
          return prevPresentList.filter((prevPresent) => prevPresent !== newLetter);
        });
      } else if (absentList.includes(newLetter)) {
        // remove letter from absentList
        setAbsentList((prevAbsentList) => {
          return prevAbsentList.filter((prevAbsent) => prevAbsent !== newLetter);
        });
      }
    },
    [absentList, presentList],
  );

  const handleClickLetter = useCallback((letter: string, clickNumber: number) => {
    if (clickNumber === 2) {
      // remove letter from presentList
      setPresentList((prevPresentList) => {
        return prevPresentList.filter((prevPresent) => prevPresent !== letter);
      });
    } else if (clickNumber === 1) {
      // remove letter from absentList
      setAbsentList((prevAbsentList) => {
        return prevAbsentList.filter((prevAbsent) => prevAbsent !== letter);
      });

      // add letter to presentList
      setPresentList((prevPresentList) => prevPresentList.concat(letter));
    } else if (clickNumber === 0) {
      // add letter to absentList
      setAbsentList((prevAbsentList) => prevAbsentList.concat(letter));
    }
  }, []);

  return (
    <div className="text-white bg-[#282c34] min-h-screen">
      <header className="flex flex-col justify-center items-center p-8 max-w-screen-xs mx-auto">
        <h1 className="">Wordle Solver</h1>
      </header>
      <main className="my-0 max-w-screen-xs mx-auto">
        <section className="text-center">
          <div className="pb-4">
            <h2 className="">Correct letters</h2>
            <p className="">Enter correct letters in the fields below.</p>
          </div>
          <div className="flex gap-4 pb-8 justify-center">
            {letters.map((letter, index) => (
              <TextInput index={index} key={index} onChange={handleSetLetter} value={letter} />
            ))}
          </div>
        </section>
        <section className="text-center pb-8 m-auto">
          <div className="pb-4">
            <h2>Letters</h2>
            <ul>
              <li>Click once to mark the letter as absent from the word</li>
              <li>Click twice to mark the letter as present in the word</li>
              <li>Click three times to put the letter back to the default state of &quot;undetermined&quot;</li>
            </ul>
          </div>
          <div className="flex gap-2 p-2 justify-center content-center">
            {row1.map((letter) => {
              const color = getColor(letter);
              return <LetterButton key={letter} color={color} letter={letter} onChange={handleClickLetter} />;
            })}
          </div>
          <div className="flex gap-2 p-2 justify-center content-center">
            {row2.map((letter) => {
              const color = getColor(letter);
              return <LetterButton key={letter} color={color} letter={letter} onChange={handleClickLetter} />;
            })}
          </div>
          <div className="flex gap-2 p-2 justify-center content-center">
            {row3.map((letter) => {
              const color = getColor(letter);
              return <LetterButton key={letter} color={color} letter={letter} onChange={handleClickLetter} />;
            })}
          </div>
        </section>
        <WordList absentList={absentList} letters={letters} presentList={presentList} />
      </main>
      <Footer />
    </div>
  );
}
