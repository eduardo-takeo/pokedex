import React from "react";
import "./styles.module.scss";
import PokeballIcon from "../../assets/pokeball.png";
import { useModal } from "../../contexts/ModalContext";
import { useParty } from "../../contexts/PartyContext";

function CaptureButton() {
  const { capturePokemon } = useParty();
  const { isVisible } = useModal();

  return (
    <>
      {!isVisible && (
        <button onClick={capturePokemon}>
          <img src={PokeballIcon} alt="Capture" />
        </button>
      )}
    </>
  );
}

export default CaptureButton;
