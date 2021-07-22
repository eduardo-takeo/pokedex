import React from "react";
import styles from "./styles.module.scss";

interface PokemonCardProps {
  name: string;
  image: string;
}

function PokemonCard({ name, image }: PokemonCardProps) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} />
      <h1>{name}</h1>
    </div>
  );
}

export default PokemonCard;
