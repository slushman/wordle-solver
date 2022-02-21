import * as React from 'react';

import { ContextAbsent, ContextPresent, ContextConfirmed } from '../App';

interface LetterButtonProps {
  letter: string;
}

const LetterButton = ({
  letter,
}: LetterButtonProps) => {
  const [colorClass, setColorClass] = React.useState('bg-wordleGray');
  const [clickNumber, setClickNumber] = React.useState(0);

  const { setAbsentList } = React.useContext(ContextAbsent);
  const { setPresentList } = React.useContext(ContextPresent);
  const letters = React.useContext(ContextConfirmed);

  React.useEffect(() => {
    if (letters.includes(letter)) {
      setColorClass('bg-wordleGreen');
    }
  }, [letters]);

  const handleClick = React.useCallback(() => {
    if (clickNumber === 2) {
      // set color
      setColorClass('bg-wordleGray');

      // set click number
      setClickNumber(0);

      // remove letter from presentList
      setPresentList((prevPresentList) => {
        return prevPresentList.filter((prevPresent) => {
          return prevPresent !== letter;
        });
      });
    } else if (clickNumber === 1) {
      // set color
      setColorClass('bg-wordleYellow');

      // set click number
      setClickNumber(2);

      // remove letter from absentList
      setAbsentList((prevAbsentList) => {
        return prevAbsentList.filter((prevAbsent) => {
          return prevAbsent !== letter;
        });
      });

      // add letter to presentList
      setPresentList(prevPresentList => prevPresentList.concat(letter));
    } else if (clickNumber === 0) {
      // set color
      setColorClass('bg-black');

      // set click number
      setClickNumber(1);

      // add letter to absentList
      setAbsentList(prevAbsentList => prevAbsentList.concat(letter));
    }
  }, [clickNumber]);

  return (
    <button className={`${colorClass} p-6 h-20 w-20`} onClick={handleClick}>{letter}</button>
  );
};

export default React.memo(LetterButton);
