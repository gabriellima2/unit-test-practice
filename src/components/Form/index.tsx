import { FormEvent, useState } from "react";

import { DefaultButton } from "../DefaultButton";

import "./styles.css";

interface FormProps {
  handleSubmit: (param: string) => void
}

interface InputProps {
  id: string;
  name: string;
  value: string;
  placeholder?: string;
  handleChange: (value: string) => void
}

const Input = ({placeholder, handleChange, ...props}: InputProps) => (
  <label>
    <input
      type="text"
      {...props}
      autoFocus
      placeholder={placeholder || "Digite aqui..."}
      onChange={(e) => handleChange(e.target.value)}
    />
  </label>
)

export const Form = ({handleSubmit, ...props}: FormProps) => {
  const [usernameTyped, setUsernameTyped] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    handleSubmit(usernameTyped);
    setUsernameTyped("");
  }

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <Input
          id="username"
          name="username"
          value={usernameTyped}
          handleChange={setUsernameTyped}
          placeholder="Digite o nome..."
        />
      </fieldset>
      <DefaultButton type="submit" title="Adicionar usuário">Adicionar</DefaultButton>
      </form>
  )
}
