import React from "react";
import { render, screen } from "@testing-library/react";
import { mockedParty } from "../../../mocks/mockedParty";
import PokemonParty from ".";

describe("PokemonParty component", () => {
  it("should render correctly", () => {
    render(<PokemonParty party={mockedParty} />);

    expect(screen.getByRole("img", { name: "grimer" })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "machop" })).toBeInTheDocument();
  });
});
