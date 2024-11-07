import React from "react";
import person1 from "./img/Caio.png";
import person2 from "./img/Matheus.png";
import person3 from "./img/Belle.png";
import person4 from "./img/Pedro.png";
import person5 from "./img/Ítalo.png";
import logoOFC from "./img/logo ofc.png"
import equipeEcoloop from "./img/WhatsApp_Image_2024-10-28_at_21.01.58.jpeg";

function SobreNos() {
  const team = [
    { img: person1, name: "Caio", role: "Desenvolvedor Fullstack" },
    { img: person2, name: "Matheus", role: "Cargo 2" },
    { img: person3, name: "Belle", role: "Cargo 3" },
    { img: person4, name: "Pedro", role: "Cargo 4" },
    { img: person5, name: "Ítalo", role: "Cargo 5" },
  ];

  return (
    <div className="sobre-nos">
      <div className="sobre-nos-text">
        <div className="team-container">
          {team.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.img} alt={member.name} className="team-photo" />
              <h3>{member.name}</h3>
              {/* <p>{member.role}</p> */}
            </div>
          ))}
        </div>
        <h1 className="ecoloop-title">ECOLOOP</h1>
        <p>
          A Ecoloop Soluções é um projeto acadêmico criado por jovens estudantes
          de tecnologia da Universidade São Judas Tadeu, no campus Santana, SP.
          Estudamos no período noturno e compartilhamos uma paixão por inovação
          e sustentabilidade. Nosso sonho é ver essa iniciativa crescer e se
          transformar em uma startup capaz de fazer a diferença no mundo.
        </p>
        <img src={logoOFC} alt="Ecoloop" className="sobre-nos-image" />
        <p>
          Atualmente, estamos aplicando parte de nosso projeto no Ministério
          Público Federal (MPF), onde colocamos em prática nossas soluções para
          o reaproveitamento e descarte sustentável de eletrônicos. Com esse
          projeto, queremos reduzir o impacto ambiental do lixo eletrônico e
          oferecer soluções mais conscientes para o uso de recursos.
        </p>
        <img
          src={equipeEcoloop}
          alt="EcoLoop em ação"
          className="sobre-nos-image"
        />
        <p>
          Na Ecoloop, acreditamos que a sustentabilidade não precisa ser
          complexa – ela pode ser acessível e integrada ao dia a dia das
          empresas. Oferecemos desde o reaproveitamento de componentes até a
          certificação ambiental, buscando sempre soluções práticas que gerem
          impacto real. Nossa visão é clara: inspirar mudanças com ações
          concretas, promovendo uma economia circular e ajudando as empresas a
          adotar práticas ecológicas que fortalecem sua marca e reduzem o
          desperdício. Estamos só começando, mas nossa ambição é grande, e nosso
          compromisso com o futuro é ainda maior.
        </p>
      </div>
    </div>
  );
}

export default SobreNos;
