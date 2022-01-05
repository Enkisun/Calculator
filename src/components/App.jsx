import React from "react";
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
      <div className="item reset" id="reset">
        AC
      </div>
      <div className="engineerOperationWrapper">
        <div className="item engineerOperation" onClick="power()">
          <RootIcon className="icon" />
        </div>
        <div className="item engineerOperation" onClick="power()">
          sin
        </div>
        <div className="item engineerOperation" onClick="power()">
          <DegreeIcon className="icon" />
        </div>
        <div className="item engineerOperation" onClick="power()">
          cos
        </div>
      </div>
      <div className="item operation" onClick="binary()">
        <DivideIcon className="icon" />
      </div>
      <div className="item" data-value="7">
        7
      </div>
      <div className="item" data-value="8">
        8
      </div>
      <div className="item" data-value="9">
        9
      </div>
      <div className="item operation" onClick="binary()">
        <PlusIcon className="icon multiply" />
      </div>
      <div className="item" data-value="4">
        4
      </div>
      <div className="item" data-value="5">
        5
      </div>
      <div className="item" data-value="6">
        6
      </div>
      <div className="item operation" onClick="binary()">
        <MinusIcon className="icon" />
      </div>
      <div className="item" data-value="1">
        1
      </div>
      <div className="item" data-value="2">
        2
      </div>
      <div className="item" data-value="3">
        3
      </div>
      <div className="item operation" onClick="binary()">
        <PlusIcon className="icon" />
      </div>
      <div className="item zero" data-value="0">
        0
      </div>
      <div className="item" id="point" data-value=",">
        ,
      </div>
      <div className="item operation equals" onClick="equal()">
        <EqualsIcon className="icon" />
      </div>
    </div>
  );
}
