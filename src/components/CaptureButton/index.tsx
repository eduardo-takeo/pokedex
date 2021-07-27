import React from "react";
import "./styles.module.scss";
import PokeballIcon from "../../assets/pokeball.png";

interface CaptureButtonProps {
  onClick: () => void;
}

function CaptureButton({ onClick }: CaptureButtonProps) {
  return (
    <button onClick={onClick}>
      <img src={PokeballIcon} alt="Capture" />
    </button>
  );
}

export default CaptureButton;
