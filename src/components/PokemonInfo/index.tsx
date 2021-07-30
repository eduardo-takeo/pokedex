import React from "react";
import { useModal } from "../../contexts/ModalContext";
import styles from "./styles.module.scss";
import CloseIcon from "../../assets/close.png";

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
  const { isVisible, toggleModal } = useModal();

  //TODO: Close Modal function

  return (
    <>
      {isVisible && (
        <main className={styles.modal}>
          <div className={styles.modalContainer}>
            <img
              src={CloseIcon}
              alt="Close"
              onClick={toggleModal}
              className={styles.closeButton}
            />
            <div className={styles.modalColumn}>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <h2>Description</h2>
            </div>
            <div className={styles.modalColumn}>
              <h1>Name</h1>
              <h2>Description</h2>
              <h2>Abilities</h2>
              <h2>Speed</h2>
              <h2>Attack</h2>
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default PokemonInfo;
