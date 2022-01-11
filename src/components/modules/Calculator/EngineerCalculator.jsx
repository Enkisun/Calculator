import CommonCalculator from "./Calculator";
import Button from "../../elements/Button/Button";
import { ReactComponent as DivideIcon } from "../../../assets/divide-icon.svg";
import { ReactComponent as PlusIcon } from "../../../assets/plus-icon.svg";
import { ReactComponent as MinusIcon } from "../../../assets/minus-icon.svg";
import { ReactComponent as EqualsIcon } from "../../../assets/equals-icon.svg";
import { ReactComponent as RootIcon } from "../../../assets/root-icon.svg";
import { ReactComponent as DegreeIcon } from "../../../assets/degree-icon.svg";
import "./Calculator.scss";

export default class EngineerCalculator extends CommonCalculator {
  engineerOperators = (funcName) => {
    switch (funcName) {
      case "pow":
        this.setState({ value: Math.pow(this.state.value, 2) });
        break;
      case "sqrt":
        this.setState({ value: Math.sqrt(this.state.value) });
        break;
      case "sin":
        this.setState({ value: Math.sin(this.state.value) });
        break;
      default:
        this.setState({ value: Math.cos(this.state.value) });
        break;
    }

    return this.setState({ summary: this.state.value });
  };

  render() {
    return (
      <div className="container" ref={this.ref} tabIndex="0">
        <div className="inputWrapper">
          <input className="input" value={this.state.value} readOnly />
        </div>
        <Button className="reset engineer" onClick={this.clear}>
          {this.state.reset}
        </Button>
        <div className="engineerOperatorWrapper">
          <Button
            className="engineerOperator"
            onClick={() => this.engineerOperators("sqrt")}
          >
            <RootIcon className="icon" />
          </Button>
          <Button
            className="engineerOperator"
            onClick={() => this.engineerOperators("sin")}
          >
            sin
          </Button>
          <Button
            className="engineerOperator"
            onClick={() => this.engineerOperators("pow")}
          >
            <DegreeIcon className="icon" />
          </Button>
          <Button
            className="engineerOperator"
            onClick={() => this.engineerOperators("cos")}
          >
            cos
          </Button>
        </div>

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
