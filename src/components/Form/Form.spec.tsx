import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";

import { renderWithProviders } from "../../utils/test-utils";
import { addUser } from "../../redux/users/slice";
import { setupStore } from "../../redux/store";

import { Form } from ".";

describe("Form Component", () => {
  const store = setupStore();
  const handleSubmit = jest.fn(() => store.dispatch(addUser("Gabriel")));

  beforeAll(() => {
    renderWithProviders(<Form handleSubmit={handleSubmit} />);
  })

  it ("should render", () => {
    expect(screen.getByDisplayValue("")).toHaveAttribute("id", "username");
    expect(screen.getByText("Adicionar")).toBeInTheDocument();
  })
})
