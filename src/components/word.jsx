import React, { Component } from "react";

class Word extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.letterElements = [];
  }

  componentDidMount() {
    if (this.props.selected) {
      this.letterElements[0].focus();
    }
  }

  componentDidUpdate() {
    if (this.props.selected) {
      this.letterElements[0].focus();
    }
  }

  setLettersRef = (el) => {
    this.letterElements.push(el);
  };

  handleChange = (e) => {
    const index = this.letterElements.indexOf(e.target);
    const nextInput = this.letterElements[index + 1];
    if (nextInput) {
      nextInput.focus();
    } else {
      this.props.handleWordSelection();
    }
  };

  render() {
    const { value, hiddenLettersIndex } = this.props;
    return (
      <span className="word">
        {value.split("").map((letter, index) => {
          return (
            <span key={index} className="word__letter">
              {hiddenLettersIndex.includes(index) ? (
                <input
                  className="letter-input"
                  maxLength="1"
                  onChange={(e) => this.handleChange(e)}
                  ref={this.setLettersRef}
                  index={index}
                />
              ) : (
                letter
              )}
            </span>
          );
        })}
      </span>
    );
  }
}

export default Word;
