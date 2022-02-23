import React from 'react';

import Confirmed from '../Confirmed';
import Letters from '../Letters';
import WordList from '../WordList';

/**
 * gray: #86888a rgb(134,136,138)
 * darkgray: #939598 rgb(147,149,152)
 * yellow: #c9b458 rgb(201,180,88)
 * darkyellow: #b59f3b rgb(181,159,59)
 * green: #6aaa64 rgb(106,170,100)
 * darkgreen: #538d4e rgb(83,141,78)
 */

interface AbsentContextProps {
  absentList: string[];
  setAbsentList: React.Dispatch<React.SetStateAction<string[]>>;
}
interface PresentContextProps {
  presentList: string[];
  setPresentList: React.Dispatch<React.SetStateAction<string[]>>;
}

const defaultAbsentState = {
  absentList: [],
  setAbsentList: () => {},
};
const defaultPresentState = {
  presentList: [],
  setPresentList: () => {},
};

export const ContextAbsent = React.createContext<AbsentContextProps>(defaultAbsentState);
export const ContextPresent = React.createContext<PresentContextProps>(defaultPresentState);
export const ContextConfirmed = React.createContext<string[]>([]);

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

  return (
    <div className="text-white bg-[#282c34]">
      <header className="flex flex-col justify-center items-center p-16 max-w-screen-sm mx-auto">
        <h1 className="">Wordle Solver</h1>
      </header>
      <main className="my-0 max-w-screen-sm mx-auto">
        <ContextAbsent.Provider value={{ absentList, setAbsentList }}>
          <ContextPresent.Provider value={{ presentList, setPresentList }}>
            <ContextConfirmed.Provider value={letters}>
              <Confirmed
                firstLetter={firstLetter}
                setFirstLetter={setFirstLetter}
                secondLetter={secondLetter}
                setSecondLetter={setSecondLetter}
                thirdLetter={thirdLetter}
                setThirdLetter={setThirdLetter}
                fourthLetter={fourthLetter}
                setFourthLetter={setFourthLetter}
                fifthLetter={fifthLetter}
                setFifthLetter={setFifthLetter}
              />
              <Letters />
            </ContextConfirmed.Provider>
          </ContextPresent.Provider>
        </ContextAbsent.Provider>
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
    </div>
  );
}

export default App;
