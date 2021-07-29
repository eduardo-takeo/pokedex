import React from "react";
import DeleteIcon from "../../assets/close.png";
import { useModal } from "../../contexts/ModalContext";
import { useParty } from "../../contexts/PartyContext";
import PokemonInfo from "../PokemonInfo";
import styles from "./styles.module.scss";

interface PokemonCardProps {
  pokemon: {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    };
    height: number;
    types: [];
    stats: [];
  };
}

function PokemonCard({ pokemon }: PokemonCardProps) {
  const { removeFromParty } = useParty();
  const { toggleModal } = useModal();

  return (
    <>
      <div className={styles.card} onClick={() => toggleModal()}>
        <img
          src={DeleteIcon}
          alt="Remove"
          className={styles.removeButton}
          onClick={() => removeFromParty(pokemon.name)}
        />
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className={styles.sprite}
        />
        <h1>{pokemon.name}</h1>
      </div>

      <PokemonInfo pokemon={pokemon} />
    </>
  );
}

export default PokemonCard;
