import words from '../words';

interface WordListProps {
  letters: string[];
  absentList: string[];
  presentList: string[];
}

export default function WordList({ absentList, letters, presentList }: WordListProps) {
  const wordList = words.filter((word) => {
    if (absentList.length === 0 && presentList.length === 0 && letters.every((letter) => letter === '')) {
      return true;
    }

    const letterArray = Array.from(word.toUpperCase());

    const hasAbsents = letterArray.some((letter) => absentList.includes(letter));
    const hasPresents = presentList.every((letter) => letterArray.includes(letter));
    const hasFirst = letters[0] !== '' ? letters[0] === letterArray[0] : true;
    const hasSecond = letters[1] !== '' ? letters[1] === letterArray[1] : true;
    const hasThird = letters[2] !== '' ? letters[2] === letterArray[2] : true;
    const hasFourth = letters[3] !== '' ? letters[3] === letterArray[3] : true;
    const hasFifth = letters[4] !== '' ? letters[4] === letterArray[4] : true;

    return !hasAbsents && hasPresents && hasFirst && hasSecond && hasThird && hasFourth && hasFifth;
  });

  return (
    <section className="text-center">
      <h2>Potential Words</h2>
      <ul className="grid grid-cols-4 text-left text-xl pb-8">
        {wordList.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </section>
  );
}
