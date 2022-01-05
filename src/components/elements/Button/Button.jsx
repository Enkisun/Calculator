import React from "react";
import cn from "classnames";
import "./Button.scss";

export default function Button(props) {
  const { className, children } = props;

  return (
    <button className={cn("item", className)} type="button">
      {children}
    </button>
  );
}
