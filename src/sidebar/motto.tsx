import React, { useEffect, useState } from "react";
import "./motto.css";

type Quote = {
  quote: string;
  author: string;
};

const quoteList: Quote[] = [
  {
    quote: "Those who can imagine anything, can create the impossible.",
    author: "Alan Turing",
  },
  {
    quote:
      "Programming is a skill best acquired by practice and example rather than from books.",
    author: "Alan Turing",
  },
  { quote: "It is not enough for code to work.", author: "Robert C. Martin" },
  {
    quote: "The only way to go fast, is to go well.",
    author: "Robert C. Martin",
  },
  {
    quote: "Clean code always looks like it was written by someone who cares.",
    author: "Robert C. Martin",
  },
];

export const Motto = () => {
  const [mottoId, setMottoId] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (mottoId + 1 === quoteList.length) {
        setMottoId(0);
      } else {
        setMottoId(mottoId + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [mottoId]);

  return (
    <MottoDisplayComponent
      quote={quoteList[mottoId].quote}
      author={quoteList[mottoId].author}
    />
  );
};

const MottoDisplayComponent = ({ quote, author }: Quote) => {
  return (
    <div key={quote} className="motto roll-out">
      <div>“{quote}”</div>
      <span>- {author}</span>
    </div>
  );
};
