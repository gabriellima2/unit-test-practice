import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";

import { renderWithProviders } from "../../utils/test-utils";

import { Form } from ".";

const USERNAME = "Gabriel";

const getUsernameInput = () => screen.getByPlaceholderText(/Digite o nome.../);
const getSubmitButton = () => screen.getByTitle(/Adicionar usuário/);

describe("Form Component", () => {
  const handleSubmit = jest.fn();

  beforeEach(() => {
    renderWithProviders(<Form handleSubmit={handleSubmit} />);
  });

  it ("should render", () => {
    expect(getUsernameInput()).toHaveAttribute("id", "username");
    expect(getSubmitButton()).toBeInTheDocument();
  });

  describe("User events in Form", () => {
    it("should show the username typed", async () => {
      await userEvent.type(getUsernameInput(), USERNAME);

      expect(screen.getByDisplayValue(USERNAME)).toBeInTheDocument();
    });

    it("should call the submit function", async () => {
      await userEvent.click(getSubmitButton());

      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
