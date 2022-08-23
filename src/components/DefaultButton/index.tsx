import { ButtonHTMLAttributes, ReactNode } from "react";

import "./styles.css";

interface DefaultButtonProps extends
  Pick<ButtonHTMLAttributes<HTMLButtonElement>, "type">  {
  children: ReactNode;
  handleClick?: (param?: unknown) => void;
}

export const DefaultButton = (props: DefaultButtonProps) => {
  return (
    <button type={props.type || "button"} onClick={props.handleClick}>
      {props.children}
    </button>
  )
}
