import React from "react";
import ReactDOM from "react-dom";
import Main from "./pages/Main";
import "./global.scss";
import { PartyContextProvider } from "./contexts/PartyContext";

ReactDOM.render(
  <React.StrictMode>
    <PartyContextProvider>
      <Main />
    </PartyContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
