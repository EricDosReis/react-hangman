import { useState } from "react";

import { HangmanFigure } from "@/components/HangmanFigure";
import { Layout } from "@/components/Layout";
import { WordDisplay } from "@/components/WordDisplay";
import { GUESSES } from "@/constants";

const App = () => {
  const [remainingGuesses, setRemainingGuesses] = useState(GUESSES);

  return (
    <Layout>
      <HangmanFigure remainingGuesses={5} />

      <div className="flex flex-col gap-2 text-center text-gray-100">
        <p className="text-xl">
          Remaining guesses: <b>{remainingGuesses}</b>
        </p>

        <p className="text-xl">
          <b>Tip</b>: some tip here
        </p>
      </div>

      <WordDisplay word={"vercel"} guessedLetters={new Set(["v", "c", "l"])} />
    </Layout>
  );
};

export default App;
