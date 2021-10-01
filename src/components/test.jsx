import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    this.inputElements = [];
    this.myRef = React.createRef();
  }

  handleClick = (id) => {
    this.inputElements[id + 1].focus();
  };

  setInputElement = (element) => {
    this.inputElements.push(element);
  };

  state = {};
  render() {
    return (
      <div className="container">
        <input
          ref={this.setInputElement}
          onChange={() => this.handleClick(0)}
          type="text"
        />
        <input
          onChange={() => this.handleClick(1)}
          ref={this.setInputElement}
          type="text"
        />
        <input
          onChange={() => this.handleClick(2)}
          ref={this.setInputElement}
          type="text"
        />
        <input
          onChange={() => this.handleClick(3)}
          ref={this.setInputElement}
          type="text"
        />
      </div>
    );
  }
}

export default Test;
