import React from "react";
import styles from "./styles.module.scss";

interface PokemonInfoProps {
  pokemon: Pokemon;
}

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

function PokemonInfo({ pokemon }: PokemonInfoProps) {
  return <div className={styles.container}>Pokemon Info</div>;
}

export default PokemonInfo;
