import React from "react";
import img1 from "./img/autonuke.png";
import img2 from "./img/autonuke.png";
import img3 from "./img/autonuke.png";
import img4 from "./img/autonuke.png";
import img5 from "./img/autonuke.png";
import img6 from "./img/autonuke.png";
import img7 from "./img/autonuke.png";

function Servicos() {
  const services = [
    {
      img: img1,
      title: "Reaproveitamento de Lixo Eletrônico",
      description:
        "A empresa recupera peças e componentes de dispositivos eletrônicos descartados, reintegrando-os na cadeia produtiva para reduzir o desperdício e o impacto ambiental.",
    },
    {
      img: img2,
      title: "Valorização de Marca",
      description:
        "Ao contratar a Ecoloop, as empresas parceiras agregam valor à sua marca, associando-se a práticas sustentáveis e ganhando uma imagem positiva de responsabilidade ambiental.",
    },
    {
      img: img3,
      title: "Venda de Certificados de Conformidade Ambiental",
      description:
        "A Ecoloop emite certificados que comprovam o descarte e a reciclagem responsáveis dos resíduos eletrônicos, valorizando o compromisso ambiental das empresas contratantes.",
    },
    {
      img: img4,
      title: "Coleta de Lixo Eletrônico",
      description:
        "A empresa realiza a coleta dos resíduos eletrônicos, oferecendo uma solução completa para o descarte adequado de equipamentos que não podem ser reaproveitados.",
    },
    {
      img: img5,
      title: "Consultoria em Sustentabilidade Eletrônica",
      description:
        "A Ecoloop auxilia empresas a adotarem práticas sustentáveis em seus processos, orientando sobre como reduzir o impacto ambiental de seus resíduos eletrônicos.",
    },
    {
      img: img6,
      title: "Capacitação Profissional em Tecnologia e Reciclagem",
      description:
        "A empresa oferece cursos e treinamentos para jovens e profissionais interessados em reciclagem e manutenção de eletrônicos, promovendo qualificação para o mercado de trabalho.",
    },
    {
      img: img7,
      title: "Gestão de Resíduos e Logística Reversa",
      description:
        "A Ecoloop organiza a coleta, o transporte e o processamento dos resíduos eletrônicos de seus clientes, garantindo que o material seja tratado corretamente desde a origem até o destino final.",
    },
  ];

  return (
    <div className="App-section">
      <h2>Nossos Serviços</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <img
              src={service.img}
              alt={service.title}
              className="service-img"
            />
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servicos;
