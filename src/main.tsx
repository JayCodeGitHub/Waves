import React from "react";
import ReactDOM from "react-dom/client";
import { PlayerProvider } from "./hooks/usePlayer.tsx";
import App from "./App.tsx";
import SEO from "./components/SEO.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PlayerProvider>
      <SEO />
      <App />
    </PlayerProvider>
  </React.StrictMode>
);
