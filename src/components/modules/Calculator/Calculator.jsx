import React from "react";
import Button from "../../elements/Button/Button";
import { ReactComponent as DivideIcon } from "../../../assets/divide-icon.svg";
import { ReactComponent as PlusIcon } from "../../../assets/plus-icon.svg";
import { ReactComponent as MinusIcon } from "../../../assets/minus-icon.svg";
import { ReactComponent as EqualsIcon } from "../../../assets/equals-icon.svg";
import "./Calculator.scss";

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

    this.ref = React.createRef();
  }

  onDigitClick = (event) => {
    const newValue = event.key?.toString() || event.target.dataset.value; // digit from data-value or key down value

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
      event.key?.toString() ||
      event.target.dataset.value ||
      event.target.parentNode.dataset.value ||
      event.target.childNodes[0]?.dataset.value; // operator from data-value or key down value

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
      this.setState({ summaryExpression: this.state.value });
      calculatedValue = this.calculate(
        Number(this.state.prevValue),
        Number(this.state.value)
      );
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

  onKeyDown = (e) => {
    e.preventDefault();

    if (e.key.toString().search(/[\/*+-]/) !== -1) {
      this.onOperatorClick(e);
    }

    if (e.key.toString().search(/[\d]/) !== -1) {
      this.onDigitClick(e);
    }

    if (e.key.toString().search(/[=]/) !== -1) {
      this.equals();
    }

    if (e.key.toString().search(/[cC]/) !== -1) {
      this.clear();
    }
  };

  renderValue = () => {
    if (this.state.value > 999999) {
      return Number(this.state.value).toExponential(1);
    }

    return this.state.value;
  };

  componentDidMount() {
    this.ref.current.focus();
    this.ref.current.addEventListener("keydown", this.onKeyDown);
  }

  componentWillUnmount() {
    this.ref.current.removeEventListener("keydown", this.onKeyDown);
  }

  render() {
    return (
      <div className="container" ref={this.ref} tabIndex="0">
        <div className="inputWrapper">
          <input className="input" value={this.state.value} readOnly />
        </div>
        <Button className="reset" onClick={this.clear}>
          {this.state.reset}
        </Button>
        <Button
          className="operator"
          onClick={this.onOperatorClick}
          data-value="/"
        >
          <DivideIcon className="icon" data-value="/" />
        </Button>
        <Button onClick={this.onDigitClick} data-value="7">
          7
        </Button>
        <Button onClick={this.onDigitClick} data-value="8">
          8
        </Button>
        <Button onClick={this.onDigitClick} data-value="9">
          9
        </Button>
        <Button
          className="operator"
          onClick={this.onOperatorClick}
          data-value="*"
        >
          <PlusIcon className="icon multiply" data-value="*" />
        </Button>
        <Button onClick={this.onDigitClick} data-value="4">
          4
        </Button>
        <Button onClick={this.onDigitClick} data-value="5">
          5
        </Button>
        <Button onClick={this.onDigitClick} data-value="6">
          6
        </Button>
        <Button
          className="operator"
          onClick={this.onOperatorClick}
          data-value="-"
        >
          <MinusIcon className="icon" data-value="-" />
        </Button>
        <Button onClick={this.onDigitClick} data-value="1">
          1
        </Button>
        <Button onClick={this.onDigitClick} data-value="2">
          2
        </Button>
        <Button onClick={this.onDigitClick} data-value="3">
          3
        </Button>
        <Button
          className="operator"
          onClick={this.onOperatorClick}
          data-value="+"
        >
          <PlusIcon className="icon" data-value="+" />
        </Button>
        <Button className="zero" onClick={this.onDigitClick} data-value="0">
          0
        </Button>
        <Button onClick={this.onDigitClick} data-value=".">
          ,
        </Button>
        <Button className="operator equals" onClick={this.equals}>
          <EqualsIcon className="icon" />
        </Button>
      </div>
    );
  }
}
