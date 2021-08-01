import React from "react";
import { IPokemon } from "../../interfaces/global";
import PokemonCard from "../PokemonCard";
import styles from "./styles.module.scss";

interface PokemonPartyProps {
  party: IPokemon[];
}

function PokemonParty({ party }: PokemonPartyProps) {
  return (
    <div className={styles.container}>
      {party.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonParty;
