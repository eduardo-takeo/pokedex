import React from "react";
import "./styles.module.scss";
import PokeballIcon from "../../assets/pokeball.png";
import { useModal } from "../../contexts/ModalContext";

interface CaptureButtonProps {
  onClick: () => void;
}

function CaptureButton({ onClick }: CaptureButtonProps) {
  const { isVisible } = useModal();

  return (
    <>
      {!isVisible && (
        <button onClick={onClick}>
          <img src={PokeballIcon} alt="Capture" />
        </button>
      )}
    </>
  );
}

export default CaptureButton;
