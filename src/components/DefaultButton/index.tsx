import { ButtonHTMLAttributes, ReactNode } from "react";

import "./styles.css";

interface DefaultButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>  {
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
