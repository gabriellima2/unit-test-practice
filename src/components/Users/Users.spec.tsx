import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";

import { Users } from ".";

import { setupStore } from "../../redux/store";
import { addUser } from "../../redux/users/slice";

import { renderWithProviders } from "../../utils/test-utils";

const USERNAME = "Gabriel"

describe("Users Component", () => {
  beforeEach(() => {
    const store = setupStore();
    store.dispatch(addUser(USERNAME));
  
    renderWithProviders(
    <>
      <Users.Quantity />
      <Users.List />
    </>,
    { store });
  });

  it("should render with store values", () => {
    expect(screen.getByText(USERNAME)).toBeInTheDocument();
    expect(screen.getByText(/Total de usuários: 1/)).toBeInTheDocument();
  });

 /* it("should remove user", () => {
    const removeButton = screen.getByTitle(`Remover ${USERNAME}`);
    userEvent.click(removeButton);

    expect(screen.getByText(USERNAME)).not.toBeInTheDocument();
    expect(screen.getByText(/Total de usuários: 0/)).toBeInTheDocument();
  })*/
});
