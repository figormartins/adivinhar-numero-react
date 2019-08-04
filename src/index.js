import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//Vamos buscar de 0~300, palpite inicial vai ser 150.
function App() {
  const [palpite, setPalpite] = useState(150);
  const [estado, setEstado] = useState("INICIAR");
  const [chute, setChute] = useState(1);
  const [minimo, setMinimo] = useState(0);
  const [maximo, setMaximo] = useState(300);

  const comecarJogo = () => {
    setEstado("JOGANDO");
    setMinimo(0);
    setMaximo(300);
    setPalpite(150);
    setChute(1);
  };

  const menor = () => {
    setMaximo(palpite);
    setPalpite(parseInt((palpite - minimo) / 2) + minimo);
    setChute(chute + 1);
  };

  const maior = () => {
    setMinimo(palpite);
    setPalpite(parseInt((maximo - palpite) / 2) + palpite);
    setChute(chute + 1);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "INICIAR") {
    return (
      <div className="App">
        <h2>Vamos iniciar o jogo?</h2>
        <button onClick={comecarJogo}>Vamos!</button>
      </div>
    );
  }

  if (estado === "FIM") {
    return (
      <div className="App">
        <h2>Quantidade de chutes: {chute}</h2>
        <h3>Deseja jogar mais uma partida?</h3>
        <button onClick={comecarJogo}>Vamos!</button>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Seu número é {palpite}?</h1>
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou</button>
      <button onClick={maior}>Maior</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
