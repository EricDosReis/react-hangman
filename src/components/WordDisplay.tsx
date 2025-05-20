type WordDisplayProps = {
  word: string;
  guessedLetters: Set<string>;
};

const WordDisplay = ({ word, guessedLetters }: WordDisplayProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      {word.split("").map((letter, index) => (
        <div
          key={index}
          className="h-10 w-6 border-b-2 border-gray-500 text-center text-2xl font-bold uppercase text-white sm:w-8"
        >
          {guessedLetters.has(letter) ? letter : ""}
        </div>
      ))}
    </div>
  );
};

export { WordDisplay };
