import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { DefaultButton } from ".";

const BUTTONTEXT = "Testing";

describe("Default Button", () => {
  const handleClickMock = jest.fn();

  beforeEach(() => {
    render(
      <DefaultButton
        type="button"
        title="Testando botão"
        handleClick={handleClickMock}
      >
        {BUTTONTEXT}
      </DefaultButton>
    )
  })

  it("should render with the text props", () => {
    const button = screen.getByTitle(/Testando botão/);

    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveTextContent(BUTTONTEXT);
  });

  it("should call the function to handle the click", async () => {
    const button = screen.getByTitle(/Testando botão/);

    await userEvent.click(button);

    expect(handleClickMock).toHaveBeenCalledTimes(1);
  });
});
