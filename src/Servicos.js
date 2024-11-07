import React from "react";
import img1 from "./img/9686e717c7ce6e05ba4c72297b9aff4a.jpg";
import img2 from "./img/autonuke.png";
import img3 from "./img/Conceito_de_ecologia_tecnologica_com_holograma___Vetor_Gratis.jpg";
import img4 from "./img/images.jpg";
import img5 from "./img/images_1.jpg";
import img6 from "./img/images_2.jpg";
import "./Responsive-App.css";

function Servicos() {
  const services = [
    {
      img: img1,
      title: "Reaproveitamento de Lixo Eletrônico",
      description:
        "A empresa recupera peças e componentes de dispositivos eletrônicos descartados, reintegrando-os na cadeia produtiva para reduzir o desperdício e o impacto ambiental.",
    },
    {
      img: img4,
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
      img: img2,
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
  ];

  return (
    <div className="servicos-section">
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
