import React from "react";
import styles from "./styles.module.scss";

function EmptyPrompt() {
  return (
    <div className={styles.container}>
      <h1>No Pokemons found</h1>
    </div>
  );
}

export default EmptyPrompt;
