import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CaptureButton from ".";
import PokemonCard from "../PokemonCard";
import { ModalContextProvider } from "../../contexts/ModalContext";

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

describe("CaptureButton component", () => {
  it("should render correctly", () => {
    render(<CaptureButton />);

    const captureButton = screen.getByRole("img", { name: "Capture" });
    expect(captureButton).toBeInTheDocument();
    expect(captureButton).toContainElement(
      screen.getByRole("img", { name: "Capture" })
    );
  });

  it("should have an img tag", () => {
    render(<CaptureButton />);

    const captureButton = screen.getByRole("img", { name: "Capture" });
    expect(captureButton).toContainElement(
      screen.getByRole("img", { name: "Capture" })
    );
  });

  it("should hide when PokemonInfo modal is open", () => {
    //? toggleModal (declared inside context) was not being found, wrap component inside the ContextProvider to fix
    render(
      <ModalContextProvider>
        <PokemonCard pokemon={mockedPokemon} />
      </ModalContextProvider>
    );
    fireEvent.click(screen.getByText("diglett", { exact: false }));

    const captureButton = screen.queryByRole("img", { name: "Capture" });
    expect(captureButton).not.toBeInTheDocument();
  });
});
