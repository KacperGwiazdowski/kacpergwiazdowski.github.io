import React, { useState } from "react";

import "./greeting.css";

export const Greeting = () => {
  const [title, setTitle] = useState(Array.from(".NET Fullstack Developer."));

  const titleComponents = title.filter((x) => <TitleLetter letter={x} />);

  return (
    <div className="about-me ">
      Hello, I'm Kacper - {titleComponents}
      <span className="caret">|</span>
      <button onClick={() => setTitle(title.slice(0, title.length - 1))}>
        aa
      </button>
    </div>
  );
};

type TitleLetterProps = {
  letter: string;
};

const TitleLetter = ({ letter }: TitleLetterProps) => {
  return <span>{letter}</span>;
};
