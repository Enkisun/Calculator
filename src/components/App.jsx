import React, { useState } from "react";
import Button from "./elements/Button/Button";
import Calculator from "./modules/Calculator/Calculator";
import EngineerCalculator from "./modules/Calculator/EngineerCalculator";
import { ReactComponent as CalculateIcon } from "../assets/calculate-icon.svg";
import { ReactComponent as EngineerCalculateIcon } from "../assets/engineer-calculate-icon.svg";
import "./App.scss";

export default function App() {
  const [isEngineer, setIsEngineer] = useState(false);

  const switchCalculatorType = () => setIsEngineer(!isEngineer);

  return (
    <div className="container">
      {!isEngineer && (
        <>
          <Calculator />
          <Button className="switchButton" onClick={switchCalculatorType}>
            <EngineerCalculateIcon className="icon engineer" />
          </Button>
        </>
      )}
      {isEngineer && (
        <>
          <EngineerCalculator />
          <Button className="switchButton" onClick={switchCalculatorType}>
            <CalculateIcon className="icon" />
          </Button>
        </>
      )}
    </div>
  );
}
