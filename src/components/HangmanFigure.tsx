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

const HangmanFigure = () => {
  return (
    <svg height="200" width="200" viewBox="0 0 200 200">
      {gallowsLines.map((line, index) => (
        <line key={index} {...line} className="stroke-gray-200 stroke-[4px]" />
      ))}

      <circle {...head} className="stroke-pink fill-transparent stroke-[4px]" />

      {bodyParts.map((part) => (
        <line key={part.id} {...part} className="stroke-pink stroke-[4px]" />
      ))}
    </svg>
  );
};

export { HangmanFigure };
