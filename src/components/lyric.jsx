import React, { Component } from "react";
import Line from "./line";

class Lyric extends Component {
  state = { selectedLineIndex: 0 };

  handleLineSelection = () => {
    this.setState({ selectedLineIndex: this.state.selectedLineIndex + 1 });
  };

  render() {
    const { data } = this.props;
    const { selectedLineIndex } = this.state;
    const linesArray = data.split("\n");

    return (
      <div className="lyric">
        {linesArray.map((line, index) => (
          <Line
            selected={index === selectedLineIndex ? true : false}
            key={index}
            words={line}
            handleLineSelection={() => this.handleLineSelection()}
          />
        ))}
      </div>
    );
  }
}

export default Lyric;
