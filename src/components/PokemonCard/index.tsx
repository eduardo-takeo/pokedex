import React from "react";
import DeleteIcon from "../../assets/close.png";
import styles from "./styles.module.scss";

interface PokemonCardProps {
  name: string;
  image: string;
}

function PokemonCard({ name, image }: PokemonCardProps) {
  return (
    <div className={styles.card}>
      <img src={DeleteIcon} alt="Remove" className={styles.removeButton} />
      <img src={image} alt={name} className={styles.sprite} />
      <h1>{name}</h1>
    </div>
  );
}

export default PokemonCard;
