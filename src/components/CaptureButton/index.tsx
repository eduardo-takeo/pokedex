import React from "react";
import "./styles.module.scss";

interface CaptureButtonProps {
  onClick: () => void;
}

function CaptureButton({ onClick }: CaptureButtonProps) {
  return <button onClick={onClick}>Capture</button>;
}

export default CaptureButton;
