import React from "react";
import ReactDOM from "react-dom";
import Main from "./pages/Main";
import "./global.scss";
import { PartyContextProvider } from "./contexts/PartyContext";
import { ModalContextProvider } from "./contexts/ModalContext";

ReactDOM.render(
  <React.StrictMode>
    <ModalContextProvider>
      <PartyContextProvider>
        <Main />
      </PartyContextProvider>
    </ModalContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
