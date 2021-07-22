import React from "react";
import CaptureButton from "../../components/CaptureButton";
import PokemonCard from "../../components/PokemonCard";
import styles from "./styles.module.scss";

function Main() {
  return (
    <main className={styles.content}>
      <header className={styles.header}>
        <h1>Pokedéx</h1>
        <input type="text" />
      </header>

      <section className={styles.cardsContainer}>
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </section>

      <CaptureButton />
    </main>
  );
}

export default Main;
