import React, { useState } from "react";
import CaptureButton from "../../components/CaptureButton";
import PokemonCard from "../../components/PokemonCard";
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

  async function capturePokemon() {
    const randomId = Math.floor(Math.random() * 151) + 1;

    const newPokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`
    )
      .then((response) => response.json())
      .catch((err) => console.error(err));

    setCapturedPokemons([...capturedPokemons, newPokemon]);
  }

  return (
    <main className={styles.content}>
      <header className={styles.header}>
        <h1>Pokedéx</h1>
        <input type="text" />
      </header>

      <section className={styles.cardsContainer}>
        {capturedPokemons &&
          capturedPokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              image={pokemon.sprites.front_default}
            />
          ))}
      </section>

      <CaptureButton onClick={capturePokemon} />
    </main>
  );
}

export default Main;
