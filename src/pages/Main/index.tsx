import React, { useState, useEffect } from "react";
import CaptureButton from "../../components/CaptureButton";
import PokemonCard from "../../components/PokemonCard";
import PokemonInfo from "../../components/PokemonInfo";
import EmptyPrompt from "../../components/EmptyPrompt";
import styles from "./styles.module.scss";

interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  height: number;
  types: [];
  stats: [];
}

function Main() {
  const [capturedPokemons, setCapturedPokemons] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const [searchPokemon, setSearchPokemon] = useState<string>("");

  useEffect(() => {
    filterPokemons(searchPokemon);
  }, [searchPokemon]);

  async function capturePokemon() {
    if (capturedPokemons.length >= 10) {
      alert("Party is full");
      return;
    }

    const randomId = Math.floor(Math.random() * 151) + 1;

    const newPokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`
    )
      .then((response) => response.json())
      .catch((err) => console.error(err));

    setCapturedPokemons([...capturedPokemons, newPokemon]);
  }

  function filterPokemons(searchTerm: string) {
    const filtered = capturedPokemons.filter((pokemon) => {
      return pokemon.name
        .toLowerCase()
        .includes(searchTerm.toLocaleLowerCase());
    });

    setFilteredPokemons(filtered);
  }

  //! Fix bug, search not working properly
  const pokemonParty =
    filteredPokemons.length < 1 ? capturedPokemons : filteredPokemons;

  return (
    <main className={styles.content}>
      <header className={styles.header}>
        <h1>Pokedéx</h1>
        <input
          type="text"
          className={styles.searchbar}
          placeholder="Search Pokémon"
          onChange={(event) => setSearchPokemon(event.target.value)}
        />
      </header>

      {pokemonParty.length < 1 && <EmptyPrompt />}

      {pokemonParty.length > 0 && (
        <section className={styles.cardsContainer}>
          {pokemonParty.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              image={pokemon.sprites.front_default}
            />
          ))}
        </section>
      )}

      {/* Create Context to control modal */}
      {/* <PokemonInfo pokemon={capturedPokemons[0]} /> */}

      <CaptureButton onClick={capturePokemon} />
    </main>
  );
}

export default Main;
