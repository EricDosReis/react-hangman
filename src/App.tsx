import { Layout } from "@/components/Layout";
import { HangmanFigure } from "./components/HangmanFigure";

const App = () => {
  return (
    <Layout>
      <HangmanFigure remainingGuesses={5} />
    </Layout>
  );
};

export default App;
