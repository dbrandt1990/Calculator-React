import React from "react";
import "./index.css";

const Buttons = props => (
  <div>
    <div id="func-container">
      <button id="add" className="btn-primary" onClick={props.handleOperator}>
        +
      </button>
      <button
        id="subtract"
        className="btn-primary"
        onClick={props.handleOperator}
      >
        -
      </button>
      <button
        id="multiply"
        className="btn-primary"
        onClick={props.handleOperator}
      >
        *
      </button>
      <button
        id="divide"
        className="btn-primary"
        onClick={props.handleOperator}
      >
        /
      </button>
      <button id="clear" className="btn-danger" onClick={props.handleClear}>
        Clear
      </button>
    </div>
    <div id="button-container">
      <button id="one" onClick={props.handleNumber}>
        1
      </button>
      <button id="two" onClick={props.handleNumber}>
        2
      </button>
      <button id="three" onClick={props.handleNumber}>
        3
      </button>
      <button id="four" onClick={props.handleNumber}>
        4
      </button>
      <button id="five" onClick={props.handleNumber}>
        5
      </button>
      <button id="six" onClick={props.handleNumber}>
        6
      </button>
      <button id="seven" onClick={props.handleNumber}>
        7
      </button>
      <button id="eight" onClick={props.handleNumber}>
        8
      </button>
      <button id="nine" onClick={props.handleNumber}>
        9
      </button>
      <button id="decimal" onClick={props.handleNumber}>
        .
      </button>
      <button id="zero" onClick={props.handleNumber}>
        0
      </button>
      <button id="equals" onClick={props.handleEquals}>
        =
      </button>
    </div>
  </div>
);

class Calculator extends React.Component {
  state = {
    display: "",
    curr: "0",
    prev: "0",
    equation: ""
  };
  handleClear = () => {
    this.setState({
      display: "",
      curr: "0",
      prev: "0",
      equation: ""
    });
  };
  handleNumber = e => {
    e.preventDefault();
    let equation = this.state.equation;
    let display = this.state.display;
    let key = e.target.innerHTML;
    let num = display + key;

    //make sure mutiple 0 or '.' can't be entered, then check max display length
    if (
      (display === "0" && key === "0") ||
      (display.includes(".") && key === ".")
    ) {
      console.log("nomore zeros");
      this.setState({
        display: display
      });
    } else if (display.length < 18) {
      this.setState({
        display: num,
        curr: num,
        equation: equation.concat(key)
      });
    }
  };
  handleOperator = e => {
    e.preventDefault();
    let equation = this.state.equation;
    let display = this.state.display;
    let operator = e.target.innerHTML;
    if (display !== "" && this.state.curr > 0) {
      this.setState({
        display: "",
        prev: this.state.curr,
        equation: equation + operator
      });
    }
  };
  handleEquals = () => {
    let answer = eval(this.state.equation);
    this.setState({
      display: answer,
      curr: answer,
      prev: "0",
      operator: "",
      equation: answer
    });
  };

  render() {
    return (
      <div id="calc">
        <div id="display">
          {this.state.display === "" ? 0 : this.state.display}
        </div>
        <Buttons
          handleEquals={this.handleEquals}
          handleOperator={this.handleOperator}
          handleNumber={this.handleNumber}
          handleClear={this.handleClear}
        />
      </div>
    );
  }
}

export default Calculator;
