import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";

import { Users } from ".";

import { setupStore } from "../../redux/store";
import { addUser } from "../../redux/users/slice";

import { renderWithProviders } from "../../utils/test-utils";

const USERNAME = "Gabriel";

describe("Users Component", () => {
  const store = setupStore();
  store.dispatch(addUser(USERNAME));

  beforeEach(() => {
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

  it("should remove the user when clicking the button", async () => {
    window.confirm = jest.fn().mockImplementation(() => true);

    const removeButton = screen.getByTitle(`Remover ${USERNAME}`);
    await userEvent.click(removeButton);

    expect(window.confirm).toHaveBeenCalled();

    expect(screen.queryByText(USERNAME)).not.toBeInTheDocument();
    expect(screen.getByText(/Total de usuários: 0/)).toBeInTheDocument();
  });
});
