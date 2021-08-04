import React from "react";
import { render, screen } from "@testing-library/react";
import PokemonCard from ".";

const mockedPokemon = {
  height: 2,
  id: 50,
  name: "diglett",
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
    front_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/50.png",
  },
  types: [
    {
      type: {
        name: "ground",
      },
    },
  ],
  weight: 8,
};

describe("PokemonCard component", () => {
  it("should render correctly", () => {
    render(<PokemonCard pokemon={mockedPokemon} />);

    expect(screen.getByRole("img", { name: "diglett" })).toBeInTheDocument();
  });
});
