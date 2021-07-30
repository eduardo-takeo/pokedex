import { useContext } from "react";
import { createContext, ReactNode, useState } from "react";
import { IPokemon } from "../interfaces/global";

interface PartyContextProps {
  children: ReactNode;
}

interface PartyContextData {
  party: IPokemon[];
  capturePokemon: () => void;
  removeFromParty: (name: string) => void;
}

const PartyContext = createContext({} as PartyContextData);

export const PartyContextProvider = ({ children }: PartyContextProps) => {
  const [party, setParty] = useState<IPokemon[]>([]);

  async function capturePokemon() {
    if (party.length >= 10) {
      alert("Party is full");
      return;
    }

    const randomId = Math.floor(Math.random() * 151) + 1;

    const newPokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`
    )
      .then((response) => response.json())
      .catch((err) => console.error(err));

    setParty([...party, newPokemon]);
  }

  function removeFromParty(name: string) {
    const newParty = party.filter((pokemon) => pokemon.name !== name);

    setParty(newParty);
  }

  return (
    <PartyContext.Provider value={{ party, capturePokemon, removeFromParty }}>
      {children}
    </PartyContext.Provider>
  );
};

// Custom Hook
export const useParty = () => {
  return useContext(PartyContext);
};
