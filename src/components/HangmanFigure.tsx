import { GUESSES } from "@/constants";
import { motion } from "motion/react";

const gallowsLines = [
  {
    x1: 20,
    y1: 180,
    x2: 180,
    y2: 180,
  },
  {
    x1: 50,
    y1: 20,
    x2: 50,
    y2: 180,
  },
  {
    x1: 50,
    y1: 20,
    x2: 140,
    y2: 20,
  },
  {
    x1: 140,
    y1: 20,
    x2: 140,
    y2: 50,
  },
];

const head = {
  cx: 140,
  cy: 65,
  r: 15,
};

const bodyParts = [
  {
    id: "body",
    x1: 140,
    y1: 82,
    x2: 140,
    y2: 120,
  },
  {
    id: "rightArm",
    x1: 140,
    y1: 90,
    x2: 120,
    y2: 110,
  },
  {
    id: "leftArm",
    x1: 140,
    y1: 90,
    x2: 160,
    y2: 110,
  },
  {
    id: "rightLeg",
    x1: 140,
    y1: 120,
    x2: 120,
    y2: 150,
  },
  {
    id: "leftLeg",
    x1: 140,
    y1: 120,
    x2: 160,
    y2: 150,
  },
];

const HEAD_OFFSET = 1;

type HangmanFigureProps = {
  remainingGuesses: number;
};

const HangmanFigure = ({ remainingGuesses }: HangmanFigureProps) => {
  return (
    <svg height="200" width="200" viewBox="0 0 200 200">
      {gallowsLines.map((line, index) => (
        <line key={index} {...line} className="stroke-gray-200 stroke-[4px]" />
      ))}

      <motion.circle
        {...head}
        initial={{ scale: 0 }}
        animate={{ scale: GUESSES - remainingGuesses > 0 ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="stroke-pink fill-transparent stroke-[4px]"
      />

      {bodyParts.map((part, index) => (
        <motion.line
          key={part.id}
          {...part}
          initial={{ pathLength: 0 }}
          animate={{
            pathLength:
              GUESSES - remainingGuesses > index + HEAD_OFFSET ? 1 : 0,
          }}
          transition={{ duration: 0.25 }}
          className="stroke-pink stroke-[4px]"
        />
      ))}
    </svg>
  );
};

export { HangmanFigure };
