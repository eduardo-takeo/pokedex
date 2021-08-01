import React, { useState } from "react";
import CaptureButton from "../../components/CaptureButton";
import PokemonCard from "../../components/PokemonCard";
import EmptyPrompt from "../../components/EmptyPrompt";
import styles from "./styles.module.scss";
import { useParty } from "../../contexts/PartyContext";
import { useEffect } from "react";
import { IPokemon } from "../../interfaces/global";
import PokemonParty from "../../components/PokemonParty";

function Main() {
  const { party } = useParty();
  const [displayPokemons, setDisplayPokemons] = useState<IPokemon[]>(party);

  useEffect(() => {
    setDisplayPokemons(party);
  }, [party]);

  function filterPokemons(searchTerm: string) {
    const filtered = party.filter((pokemon) => {
      return pokemon.name
        .toLowerCase()
        .includes(searchTerm.toLocaleLowerCase());
    });

    setDisplayPokemons(filtered);
  }

  return (
    <main className={styles.content}>
      <header className={styles.header}>
        <h1>Pokédex</h1>
        <input
          type="text"
          className={styles.searchbar}
          placeholder="Search Pokémon"
          onChange={(e) => filterPokemons(e.target.value)}
        />
      </header>

      {displayPokemons.length < 1 && <EmptyPrompt />}

      {displayPokemons.length > 0 && <PokemonParty party={displayPokemons} />}

      <CaptureButton />
    </main>
  );
}

export default Main;
