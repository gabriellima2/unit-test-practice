import { ButtonHTMLAttributes, ReactNode } from "react";

import "./styles.css";

interface DefaultButtonProps extends
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">  {
  children: ReactNode;
  handleClick?: (param?: unknown) => void;
}

export const DefaultButton = ({
  children, handleClick, ...props}: DefaultButtonProps
  ) => {
  return (
    <button {...props} onClick={handleClick}>
      {children}
    </button>
  )
}
