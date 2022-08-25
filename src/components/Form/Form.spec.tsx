import { fireEvent, screen } from "@testing-library/dom";
import "@testing-library/jest-dom";

import { renderWithProviders } from "../../utils/test-utils";
import { addUser } from "../../redux/users/slice";
import { setupStore } from "../../redux/store";

import { Form } from ".";

describe("Form Component", () => {
  const store = setupStore();
  const handleSubmit = jest.fn();

  let usernameInput: HTMLInputElement;
  let submitButton: HTMLButtonElement;

  beforeAll(() => {
    renderWithProviders(<Form handleSubmit={handleSubmit} />);
  });

  it ("should render", () => {
    usernameInput = screen.getByDisplayValue("");
    submitButton = screen.getByText("Adicionar");

    expect(usernameInput).toHaveAttribute("id", "username");
    expect(submitButton).toBeInTheDocument();
  });

  describe("User interactions in Form", () => {
    it("should show the username entered", () => {
      fireEvent.change(usernameInput, {target: {value: "Gabriel"}});

      expect(usernameInput).toHaveValue("Gabriel");
    });

    it("should call the submit function", () => {})
  });
});
