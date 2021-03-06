import React from "react";
import { render } from "@testing-library/react";
import EmptyPrompt from ".";

describe("Empty prompt", () => {
  it("should render title", () => {
    const { getByText } = render(<EmptyPrompt />);
    expect(getByText("No Pokemons found")).toBeInTheDocument();
  });
});
