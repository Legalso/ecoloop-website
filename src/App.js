// npm run start para rodar localmente
// npm run deploy para buildar pra o github pages

import React, { useState } from "react";
import logo from "./img/logoofc.png";
import "./App.css";
import "./Responsive-App.css";
import SobreNos from "./SobreNos";
import Servicos from "./Servicos";
import VideoSection from "./VideoSection"; // Importe o componente VideoSection

function Header({ setSection, section }) {
  return (
    <header className="App-header">
      <div className="left">
        <img src={logo} className="App-logo" alt="logo" />
        <span>EcoLoop</span>
      </div>
      <div className="right">
        <button
          className={section === "inicio" ? "active" : ""}
          onClick={() => setSection("inicio")}
        >
          Início
        </button>
        <button
          className={section === "servicos" ? "active" : ""}
          onClick={() => setSection("servicos")}
        >
          Serviços
        </button>
        <button
          className={section === "sobre" ? "active" : ""}
          onClick={() => setSection("sobre")}
        >
          Sobre Nós
        </button>
        <button
          className={section === "video" ? "active" : ""}
          onClick={() => setSection("video")}
        >
          Vídeos
        </button>
      </div>
    </header>
  );
}

function MainContent() {
  return (
    <div className="App-main">
      <div className="content-container">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">EcoLoop</h1>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="App-footer">
      <p>RECICLAGEM QUE MOLDA O FUTURO</p>
    </footer>
  );
}

function Inicio() {
  return <div className="App-section">Bem-vindo à página inicial!</div>;
}

function ServicosSection() {
  return (
    <div className="App-section">
      <Servicos />
    </div>
  );
}

function Sobre() {
  return (
    <div className="App-section">
      <SobreNos />
    </div>
  );
}

function App() {
  const [section, setSection] = useState("inicio");

  let content;
  switch (section) {
    case "inicio":
      content = <Inicio />;
      break;
    case "servicos":
      content = <ServicosSection />;
      break;
    case "sobre":
      content = <Sobre />;
      break;
    case "video":
      content = <VideoSection />;
      break;
    default:
      content = <Inicio />;
  }

  return (
    <div className="App">
      <Header setSection={setSection} section={section} />
      {section === "inicio" ? <MainContent /> : content}
      {section === "inicio" && <Footer />}
    </div>
  );
}

export default App;
