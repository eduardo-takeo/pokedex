import React, { useState } from "react";
import CaptureButton from "../../components/CaptureButton";
import PokemonCard from "../../components/PokemonCard";
import styles from "./styles.module.scss";

function Main() {
  const mocked = [
    {
      name: "Charmander",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      name: "Bulbasaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      name: "Blastoise",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
  ];
  const [capturedPokemon, setCapturedPokemon] = useState(mocked);

  return (
    <main className={styles.content}>
      <header className={styles.header}>
        <h1>Pokedéx</h1>
        <input type="text" />
      </header>

      <section className={styles.cardsContainer}>
        {capturedPokemon!.map((pokemon) => (
          <PokemonCard name={pokemon.name} image={pokemon.image} />
        ))}
      </section>

      <CaptureButton />
    </main>
  );
}

export default Main;
