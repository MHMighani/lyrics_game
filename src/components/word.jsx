import React from "react";
import LetterInput from "./letterInput";

const Word = ({ value, hiddenLettersIndex }) => {
  return (
    <div className="word">
      {value.split("").map((letter, index) => {
        return (
          <span key={index} className="word__letter">
            {hiddenLettersIndex.includes(index) ? (
              <LetterInput index={index} />
            ) : (
              letter
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Word;
