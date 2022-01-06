import React from "react";
import cn from "classnames";
import "./Button.scss";

export default function Button(props) {
  const { className, children, ...restProps } = props;

  return (
    <button
      className={cn("buttonWrapper", className)}
      type="button"
      {...restProps}
    >
      {children}
    </button>
  );
}
