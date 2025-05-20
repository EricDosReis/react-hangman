import { HangmanFigure } from "@/components/HangmanFigure";
import { Layout } from "@/components/Layout";

const App = () => {
  return (
    <Layout>
      <HangmanFigure remainingGuesses={5} />
    </Layout>
  );
};

export default App;
