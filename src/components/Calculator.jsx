import React from "react";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reset: "AC",
      value: "0",
      prevValue: "",
      operator: "",
      summary: "", // last expression
      summaryExpression: "", // const for tap '=' several times
    };
  }

  onDigitClick = (event) => {
    const newValue = event.target.dataset.value; // digit from data-value

    if (
      this.state.value !== "0" &&
      newValue === "." &&
      this.state.summary && // check if '.' already exist
      this.state.summary.toString().search(/\.+\d*$/) !== -1
    )
      return;

    if (
      this.state.operator && // reset value if last click was be on operator
      this.state.summary.toString().slice(-1) === this.state.operator
    ) {
      this.setState({ value: newValue === "." ? "0." : newValue });
      return this.setState({ summary: this.state.summary + newValue });
    }

    if (
      this.state.value === "0" ||
      (this.state.prevValue && // reset value if summary equal to value
        Number(this.state.summary) === Number(this.state.value))
    ) {
      switch (newValue) {
        case "0":
          break;
        case ".":
          this.setState({ value: "0." });
          this.setState({ summary: this.state.summary + "0." });
          this.setState({ reset: "C" });
          break;
        default:
          this.setState({ value: newValue });
          this.setState({ reset: "C" });
          break;
      }
    } else {
      this.setState({ value: this.state.value + newValue });
      this.setState({ summary: this.state.summary + newValue });
      this.setState({ reset: "C" });
    }
  };

  onOperatorClick = (event) => {
    const newOperator =
      event.target.dataset.value ||
      event.target.parentNode.dataset.value ||
      event.target.childNodes[0]?.dataset.value; // operator from data-value

    if (this.state.summary.toString().search(/\d+\.?[+*/-][\d]+$/) !== -1) {
      // when click binary after '='
      const calculatedValue = this.calculate(
        Number(this.state.prevValue),
        Number(this.state.value)
      );

      this.setState({ summary: calculatedValue + newOperator });
      this.setState({ prevValue: calculatedValue });
    } else {
      this.setState({ summary: this.state.value + newOperator });
      this.setState({ prevValue: this.state.value });
    }

    this.setState({ operator: newOperator });
    this.setState({ summaryExpression: "" });
  };

  calculate = (a, b) => {
    switch (this.state.operator) {
      case "+":
        this.setState({ value: a + b });
        return a + b;
      case "-":
        this.setState({ value: a - b });
        return a - b;
      case "*":
        this.setState({ value: a * b });
        return a * b;
      case "/":
        if (this.state.value === "0" || this.state.value === "Error") {
          new Error(this.setState({ value: "Error" }));
          return "Error";
        }
        this.setState({ value: a / b });
        return a / b;
      default:
        return b;
    }
  };

  equals = () => {
    let calculatedValue;

    if (this.state.summaryExpression) {
      calculatedValue = this.calculate(
        Number(this.state.value),
        Number(this.state.summaryExpression)
      );
    } else {
      calculatedValue = this.calculate(
        Number(this.state.prevValue),
        Number(this.state.value)
      );
      this.setState({ summaryExpression: this.state.value });
    }

    this.setState({ prevValue: this.state.value });
    this.setState({ summary: calculatedValue });
  };

  clear = () => {
    switch (this.state.reset) {
      case "AC":
        this.setState({ prevValue: "" });
        this.setState({ summary: "" });
        break;
      case "C":
        this.setState({ reset: "AC" });
        break;
      default:
        break;
    }

    this.setState({ value: "0" });
  };
}
