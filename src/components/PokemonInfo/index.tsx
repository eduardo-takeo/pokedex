import React from "react";
import { useModal } from "../../contexts/ModalContext";
import styles from "./styles.module.scss";
import CloseIcon from "../../assets/close.png";
import { IPokemon } from "../../interfaces/global";

interface PokemonInfoProps {
  pokemon: IPokemon;
}

function PokemonInfo({ pokemon }: PokemonInfoProps) {
  const { isVisible, toggleModal } = useModal();

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
              <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
            </div>
            <div className={styles.modalColumn}>
              <h2># {pokemon.id}</h2>
              <span>Name: {pokemon.name}</span>
              <span>Height: {pokemon.height}</span>
              <span>Weight: {pokemon.weight}</span>
              {/* TODO: <span>Types: </span> */}
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default PokemonInfo;
