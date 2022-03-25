import React from 'react';

import Footer from '../Footer';
import LetterButton from '../LetterButton';
import TextInput from '../TextInput';
import WordList from '../WordList';

/**
 * gray: #86888a rgb(134,136,138)
 * darkgray: #939598 rgb(147,149,152)
 * yellow: #c9b458 rgb(201,180,88)
 * darkyellow: #b59f3b rgb(181,159,59)
 * green: #6aaa64 rgb(106,170,100)
 * darkgreen: #538d4e rgb(83,141,78)
 */

const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const row3 = ["Z", "X", "C", "V", "B", "N", "M"];

function App() {
  const [firstLetter, setFirstLetter] = React.useState('');
  const [secondLetter, setSecondLetter] = React.useState('');
  const [thirdLetter, setThirdLetter] = React.useState('');
  const [fourthLetter, setFourthLetter] = React.useState('');
  const [fifthLetter, setFifthLetter] = React.useState('');

  const [absentList, setAbsentList] = React.useState<string[]>([]);
  const [presentList, setPresentList] = React.useState<string[]>([]);

  const letters = React.useMemo(() => ([
    firstLetter,
    secondLetter,
    thirdLetter,
    fourthLetter,
    fifthLetter,
  ]),
  [
    firstLetter,
    secondLetter,
    thirdLetter,
    fourthLetter,
    fifthLetter,
  ]);

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

  const handleSetLetter = React.useCallback(
    (newLetter: string, index: number) => {
      switch (index) {
        case 0:
          setFirstLetter(newLetter);
          break;
        case 1:
          setSecondLetter(newLetter)
          break;
        case 2:
          setThirdLetter(newLetter);
          break;
        case 3:
          setFourthLetter(newLetter);
          break;
        case 4:
          setFifthLetter(newLetter);
          break;
      }

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

  const handleClickLetter = React.useCallback(
    (letter: string, clickNumber: number) => {
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
        setPresentList(prevPresentList => prevPresentList.concat(letter));
      } else if (clickNumber === 0) {
        // add letter to absentList
        setAbsentList(prevAbsentList => prevAbsentList.concat(letter));
      }
    },
    [],
  );

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
            <TextInput index={0} onChange={handleSetLetter} value={firstLetter} />
            <TextInput index={1} onChange={handleSetLetter} value={secondLetter} />
            <TextInput index={2} onChange={handleSetLetter} value={thirdLetter} />
            <TextInput index={3} onChange={handleSetLetter} value={fourthLetter} />
            <TextInput index={4} onChange={handleSetLetter} value={fifthLetter} />
          </div>
        </section>
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
            {
              row1.map((letter) => {
                const color = getColor(letter);
                return (
                  <LetterButton key={letter} color={color} letter={letter} onChange={handleClickLetter} />
                );
              })
            }
          </div>
          <div className="flex gap-2 p-2 justify-center content-center">
            {
              row2.map((letter) => {
                const color = getColor(letter);
                return (
                  <LetterButton key={letter} color={color} letter={letter} onChange={handleClickLetter} />
                );
              })
            }
          </div>
          <div className="flex gap-2 p-2 justify-center content-center">
            {
              row3.map((letter) => {
                const color = getColor(letter);
                return (
                  <LetterButton key={letter} color={color} letter={letter} onChange={handleClickLetter} />
                );
              })
            }
          </div>
        </section>
        <WordList
           firstLetter={firstLetter}
           secondLetter={secondLetter}
           thirdLetter={thirdLetter}
           fourthLetter={fourthLetter}
           fifthLetter={fifthLetter}
           absentList={absentList}
           presentList={presentList}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
