import React, { useEffect, useState } from "react";

import "./greeting.css";

const titles = [".NET Fullstack Developer.", "Architecture enthusiast"];

export const Greeting = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isAdding, setIsAdding] = useState(true);
  const [waitCount, setWaitCount] = useState(0);

  const titleComponents = Array.from(
    titles[titleIndex].slice(0, currentLetterIndex)
  ).filter((x) => <TitleLetter letter={x} />);

  useEffect(() => {
    const interval = setInterval(() => {
      if (waitCount < 10) {
        setWaitCount(waitCount + 1);
        return;
      }
      if (titles[titleIndex].length === currentLetterIndex + 1) {
        setWaitCount(0);
        setIsAdding(false);
      }

      if (currentLetterIndex === 0 && !isAdding) {
        if (titleIndex + 1 === titles.length) {
          setTitleIndex(0);
        } else {
          setTitleIndex(titleIndex + 1);
        }
        setIsAdding(true);
      }
      if (isAdding) {
        setCurrentLetterIndex(currentLetterIndex + 1);
      } else if (!isAdding && currentLetterIndex !== 0) {
        setCurrentLetterIndex(currentLetterIndex - 1);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [currentLetterIndex, isAdding, titleIndex, waitCount]);

  return (
    <div className="about-me ">
      Hello, I'm Kacper - {titleComponents}
      <span className="caret">|</span>
    </div>
  );
};

type TitleLetterProps = {
  letter: string;
};

const TitleLetter = ({ letter }: TitleLetterProps) => {
  return <span>{letter}</span>;
};
