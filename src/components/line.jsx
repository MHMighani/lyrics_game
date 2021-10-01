import React, { Component } from "react";
import Word from "./word";

class Line extends Component {
  constructor(props) {
    super(props);
    this.wordElements = [];
    this.state = { selectedWordIndex: 0 };
  }

  setWordElements = (el) => {
    this.wordElements.push(el);
  };

  handleWordSelection = () => {
    const { selectedWordIndex } = this.state;
    const wordsArrayLength = this.props.words.split(" ").length;
    if (selectedWordIndex + 1 === wordsArrayLength) {
      this.props.handleLineSelection();
    }
    this.setState({ selectedWordIndex: selectedWordIndex + 1 });
  };

  hideLetters(words) {
    const wordsWithHiddenLetters = words.map((word) => {
      const obj = { value: word, hiddenLettersIndex: [] };
      const skipChars = ["'", ",", ".", ";", "!", "?"];

      for (let i = 0; i < word.length; i++) {
        if (!skipChars.includes(word[i])) obj.hiddenLettersIndex.push(i);
      }
      return obj;
    });
    return wordsWithHiddenLetters;
  }

  render() {
    const words = this.props.words.split(" ");
    const wordsWithHiddenLetters = this.hideLetters(words);
    const { selectedWordIndex } = this.state;
    return (
      <div>
        {wordsWithHiddenLetters.map((wordObj, index) => (
          <Word
            selected={
              this.props.selected && selectedWordIndex === index ? true : false
            }
            key={index}
            value={wordObj.value}
            hiddenLettersIndex={wordObj.hiddenLettersIndex}
            handleWordSelection={() => this.handleWordSelection()}
          />
        ))}
      </div>
    );
  }
}

export default Line;
