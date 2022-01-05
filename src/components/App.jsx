import React from "react";
import Button from "./elements/Button/Button";
import { ReactComponent as DivideIcon } from "../assets/divide-icon.svg";
import { ReactComponent as PlusIcon } from "../assets/plus-icon.svg";
import { ReactComponent as MinusIcon } from "../assets/minus-icon.svg";
import { ReactComponent as EqualsIcon } from "../assets/equals-icon.svg";
import { ReactComponent as RootIcon } from "../assets/root-icon.svg";
import { ReactComponent as DegreeIcon } from "../assets/degree-icon.svg";
import "./App.scss";

export default function App() {
  return (
    <div className="container">
      <div className="inputWrapper">
        <input className="input" placeholder="0" readOnly />
      </div>
      <Button className="reset">AC</Button>
      <div className="engineerOperationWrapper">
        <Button className="engineerOperation" onClick="power()">
          <RootIcon className="icon" />
        </Button>
        <Button className="engineerOperation" onClick="power()">
          sin
        </Button>
        <Button className="engineerOperation" onClick="power()">
          <DegreeIcon className="icon" />
        </Button>
        <Button className="engineerOperation" onClick="power()">
          cos
        </Button>
      </div>
      <Button className="operation" onClick="binary()">
        <DivideIcon className="icon" />
      </Button>
      <Button data-value="7">7</Button>
      <Button data-value="8">8</Button>
      <Button data-value="9">9</Button>
      <Button className="operation" onClick="binary()">
        <PlusIcon className="icon multiply" />
      </Button>
      <Button data-value="4">4</Button>
      <Button data-value="5">5</Button>
      <Button data-value="6">6</Button>
      <Button className="operation" onClick="binary()">
        <MinusIcon className="icon" />
      </Button>
      <Button data-value="1">1</Button>
      <Button data-value="2">2</Button>
      <Button data-value="3">3</Button>
      <Button className="operation" onClick="binary()">
        <PlusIcon className="icon" />
      </Button>
      <Button className="zero" data-value="0">
        0
      </Button>
      <Button data-value=",">,</Button>
      <Button className="operation equals" onClick="equal()">
        <EqualsIcon className="icon" />
      </Button>
    </div>
  );
}
